const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
function catalogue() {
  const ctx = vm.createContext({ window: {} });
  ['data', 'i18n'].forEach(f => vm.runInContext(read(`assets/js/${f}.js`), ctx));
  return ctx.window;
}
const { ED_STRINGS: strings, ED_PRODUCTS: products } = catalogue();
const pages = fs.readdirSync(root).filter(f => f.endsWith('.html'));
const sources = pages.concat(fs.readdirSync(path.join(root,'assets/js')).filter(f => f.endsWith('.js')).map(f=>'assets/js/'+f));
test('every dictionary entry has deliberate French and English copy', () => {
  for (const [key, entry] of Object.entries(strings)) for (const lang of ['fr','en']) {
    assert.equal(typeof entry[lang], 'string', `${key}.${lang}`);
    assert.ok(entry[lang].trim(), `${key}.${lang} is empty`);
  }
});
test('all literal translation references resolve, including attributes and metadata', () => {
  for (const file of sources) {
    const text = read(file);
    const keys = [...text.matchAll(/\b(?:t|heading)\('([\w.-]+)'\)/g)].map(m=>m[1]);
    for (const m of text.matchAll(/data-i18n(?:-html)?="([\w.-]+)"/g)) keys.push(m[1]);
    for (const m of text.matchAll(/data-i18n-attr="([\w.,: -]+)"/g))
      for (const pair of m[1].split(',')) keys.push(pair.split(':')[1].trim());
    for (const key of keys) assert.ok(strings[key], `${file}: missing ${key}`);
  }
});
test('all product bilingual fields are complete and all page scripts parse', () => {
  function walk(value, prefix) {
    if (!value || typeof value !== 'object') return;
    if ('fr' in value || 'en' in value) for (const lang of ['fr','en']) assert.equal(typeof value[lang], 'string', prefix+'.'+lang);
    Object.entries(value).forEach(([k,v])=>walk(v,prefix+'.'+k));
  }
  products.forEach(p=>walk(p,p.id));
  for (const f of sources) {
    if (f.endsWith('.js')) new vm.Script(read(f),{filename:f});
    else for (const m of read(f).matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(m[1],{filename:f});
  }
});
function quoteHarness() {
  let lang = 'fr';
  const nodes = Object.fromEntries(['q-msg','q-wa','q-mail','quote-lines','quote-count'].map(id=>[id,{classList:{add(){},remove(){},contains(){return false;}},setAttribute(){},innerHTML:'',textContent:''}]));
  let cartItems = [{id:'t100',qty:3}];
  const ED = {
    i18n: { t: key => strings[key]?.[lang] ?? key, L: v => typeof v === 'object' ? (v?.[lang] || v?.fr || '') : String(v || ''), apply: () => {} },
    ui: { esc: String, img: p => `<img alt="${p.name}">`, badge: a => `<span>${a}</span>` },
    data: { byId: id => products.find(p=>p.id===id) },
    cart: { items: () => cartItems, count: () => cartItems.reduce((acc, i) => acc + i.qty, 0) },
    contact: {company:'Equip Drones',email:'example@example.com',whatsapp:'123'}
  };
  const ctx = vm.createContext({ window:{ED}, document:{readyState:'loading',addEventListener(){},getElementById:id=>nodes[id],querySelector:()=>null,querySelectorAll:()=>[]} });
  const code = read('assets/js/devis.js').replace(/\}\)\(\);\s*$/, 'window.testQuote = {buildMessage:buildMessage, renderCart:renderCart, show:function(d){lastData=d;showPanel();}};})();');
  vm.runInContext(code,ctx);
  return { api:ctx.window.testQuote,nodes,setLang:v=>lang=v,setCart:items=>cartItems=items };
}
test('quote body, product availability, activity and mail links follow language without translating user content', () => {
  const h=quoteHarness();
  const data={name:'Test',company:'Farm',email:'test@example.com',phone:'0123456789',wilaya:'Alger',activity:'devis.copy.exploitation-agricole',area:'10',message:'Texte libre / free text'};
  for (const lang of ['fr','en']) {
    h.setLang(lang); h.api.show(data);
    const msg=h.nodes['q-msg'].value;
    assert.ok(msg.startsWith(strings['message.quote'][lang]));
    assert.ok(msg.includes(strings[data.activity][lang]));
    assert.ok(msg.includes(strings['avail.not_available'][lang]));
    assert.ok(msg.includes('3 x DJI Agras T100'));
    assert.ok(msg.endsWith(data.message));
    const email = new URL(h.nodes['q-mail'].href);
    assert.equal(email.searchParams.get('subject'),strings['message.subject'][lang]+' — Test');
    assert.equal(email.searchParams.get('body'),msg.replace(/\n/g,'\r\n'));
    assert.equal(new URL(h.nodes['q-wa'].href).searchParams.get('text'),msg);

    // Verify cart lines render properly above the form without errors
    h.api.renderCart();
    assert.ok(h.nodes['quote-lines'].innerHTML.includes('cart-line'));
    assert.ok(h.nodes['quote-lines'].innerHTML.includes('DJI Agras T100'));
    assert.ok(h.nodes['quote-count'].textContent.includes(strings['quote.items'][lang]));
  }
});
test('contact form produces translated errors and outgoing text', () => {
  let lang='fr';const fields={'c-name':'Test','c-company':'Company','c-email':'test@example.com','c-phone':'0123456789','c-message':'Texte libre / free text'};
  const ctx=vm.createContext({window:{},ED:{i18n:{t:k=>strings[k]?.[lang]??k}},document:{addEventListener(){},getElementById:id=>({value:fields[id]||''})}});
  const script=[...read('a-propos.html').matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
  vm.runInContext(script.replace(/\}\)\(\);\s*$/, 'window.testContact = {build:buildMessage,problem:firstProblem};})();'),ctx);
  for(const l of ['fr','en']){lang=l;const msg=ctx.window.testContact.build();assert.ok(msg.startsWith(strings['message.contactTitle'][l]));assert.ok(msg.includes(strings['quote.name'][l]));assert.ok(msg.endsWith(fields['c-message']));}
  fields['c-name']='';assert.equal(ctx.window.testContact.problem().key,'contact.needName');
  fields['c-name']='Test';fields['c-email']='bad';assert.equal(ctx.window.testContact.problem().key,'contact.badEmail');
});
test('language persists, invalid choices are ignored, and all product cards render bilingual values', () => {
  const storage=new Map([['ed_lang','en']]); const events=[];
  const document={readyState:'loading',documentElement:{lang:'fr'},addEventListener(){},querySelectorAll(){return [];},dispatchEvent:e=>events.push(e)};
  const ctx=vm.createContext({window:catalogue(),document,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},CustomEvent:class{constructor(type,options){this.type=type;this.detail=options?.detail;}}});
  vm.runInContext(read('assets/js/app.js'),ctx);
  const ed=ctx.window.ED; assert.equal(ed.i18n.lang(),'en');
  for(const lang of ['fr','en']) {
    ed.i18n.setLang(lang);assert.equal(document.documentElement.lang,lang);assert.equal(storage.get('ed_lang'),lang);
    assert.equal(ed.i18n.L({fr:'Plein format',en:'Full frame'}),lang==='fr'?'Plein format':'Full frame');
    for(const p of products){const card=ed.ui.productCard(p);assert.ok(card.includes(p.name));assert.ok(!card.includes('[object Object]'));}
  }
  ed.i18n.setLang('invalid');assert.equal(ed.i18n.lang(),'en');assert.equal(events.length,2);
});
test('theme initialization accepts DOMContentLoaded without changing CSS default tokens', () => {
  const callbacks={};const vars={};
  vm.runInNewContext(read('assets/js/theme-config.js'),{document:{readyState:'loading',addEventListener:(event,fn)=>callbacks[event]=fn,documentElement:{style:{setProperty:(key,val)=>vars[key]=val}}}});
  callbacks.DOMContentLoaded({type:'DOMContentLoaded'});
  const css=read('assets/css/site.css');
  for(const [key,val] of Object.entries(vars)) {
    const match=css.match(new RegExp(key+':\\s*([^;]+);'));
    assert.ok(match,key);assert.equal(String(val),match[1].trim(),key);
  }
});
