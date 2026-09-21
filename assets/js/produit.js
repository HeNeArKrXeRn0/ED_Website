/* ==========================================================================
   EQUIP DRONES — Fiche produit (template unique)
   Rend n'importe quel produit de data.js à partir de ?id=<product-id>.
   Consomme window.ED (data, i18n, ui, cart) — ne le modifie jamais.
   Un id absent ou inconnu affiche un état « produit introuvable ».
   ========================================================================== */
(function () {
  'use strict';

  var SITE = 'Equip Drones';
  var WHATSAPP = 'https://wa.me/213661936666';

  /* Raccourcis affectés au début de chaque rendu (ED existe dès `ed:ready`) */
  var ED, t, L, esc;

  /* ------------------------------------------------------------- fragments */

  function heading(key) {
    return '<div class="section-head"><h2 class="h-section" data-i18n="' + key + '">' +
           esc(t(key)) + '</h2></div>';
  }

  function card(p) {
    return ED.ui.productCard(p);
  }

  /* Bandeau de chiffres clés — omis tant que `highlights` est vide */
  function statStrip(p) {
    var hs = (p.highlights || []).filter(function (h) { return h && h.value != null; });
    if (!hs.length) return '';

    var cells = hs.map(function (h) {
      var icon = h.icon || (ED.ui.getSpecIcon ? ED.ui.getSpecIcon(L(h.label)) : null);
      var iconHTML = icon ? '<img class="spec-icon" src="' + esc(icon) + '" alt="" aria-hidden="true" style="width:28px;height:28px;margin:0 auto 8px auto;display:block;">' : '';
      return '<div class="stat" style="text-align:center;">' +
               iconHTML +
               '<div class="stat-value">' + esc(L(h.value)) + '</div>' +
               '<div class="stat-label">' + esc(L(h.label)) + '</div>' +
             '</div>';
    }).join('');

    /* La grille du design system est figée à 4 colonnes : on l'adapte au
       nombre réel de chiffres tout en restant responsive. */
    return '<div class="stat-strip mt-7" ' +
           'style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">' +
           cells + '</div>';
  }

  function heroBlock(p) {
    var soon   = p.availability === 'coming_soon';
    var discontinued = p.availability === 'discontinued';
    var catKey = p.type === 'payload' ? 'cat.payload' : 'cat.' + p.category;

    var tags = (p.useCases || []).map(function (s) {
      return '<span class="tag" data-i18n="sector.' + esc(s) + '">' + esc(t('sector.' + s)) + '</span>';
    }).join('');

    var sectors = tags
      ? '<div class="mt-6">' +
          '<div class="tiny mb-4" data-i18n="prod.sectors">' + esc(t('prod.sectors')) + '</div>' +
          '<div class="row">' + tags + '</div>' +
        '</div>'
      : '';

    var actions = discontinued
      ? '<button type="button" class="btn btn-primary" disabled data-i18n="cta.discontinued">' + esc(t('cta.discontinued')) + '</button>'
      : (soon
        ? '<a class="btn btn-primary" href="devis.html" data-i18n="cta.notify">' + esc(t('cta.notify')) + '</a>'
        : '<div class="qty">' +
            '<button type="button" data-qty-step="-1" aria-label="' + esc(t('qty.decrease')) + '">−</button>' +
            '<label class="sr-only" for="ed-qty" data-i18n="prod.qty">' + esc(t('prod.qty')) + '</label>' +
            '<input id="ed-qty" type="number" inputmode="numeric" min="1" max="999" step="1" ' +
                   'value="1" data-qty-for="' + esc(p.id) + '">' +
            '<button type="button" data-qty-step="1" aria-label="' + esc(t('qty.increase')) + '">+</button>' +
          '</div>' +
          '<button type="button" class="btn btn-primary" data-add="' + esc(p.id) + '" ' +
                  'data-i18n="cta.addQuote">' + esc(t('cta.addQuote')) + '</button>');

    var dji = p.djiUrl
      ? '<a class="btn btn-ghost" href="' + esc(p.djiUrl) + '" target="_blank" rel="noopener noreferrer" ' +
           'data-i18n="cta.djiSheet">' + esc(t('cta.djiSheet')) + '</a>'
      : '';

    var parentHref = 'agriculture.html';
    var parentKey = 'nav.agriculture';
    if (p.category === 'enterprise') {
      parentHref = 'enterprise.html';
      parentKey = 'nav.enterprise';
    } else if (p.category === 'camera') {
      parentHref = 'camera.html';
      parentKey = 'nav.camera';
    }

    return '' +
      '<section class="hero">' +
        '<div class="wrap">' +
          '<nav class="small" aria-label="' + esc(t('nav.breadcrumb')) + '">' +
            '<a href="index.html" data-i18n="nav.home">' + esc(t('nav.home')) + '</a>' +
            '<span aria-hidden="true"> / </span>' +
            '<a href="' + parentHref + '" data-i18n="' + parentKey + '">' + esc(t(parentKey)) + '</a>' +
            '<span aria-hidden="true"> / </span>' +
            '<span aria-current="page">' + esc(p.name) + '</span>' +
          '</nav>' +

          '<div class="hero-grid mt-6">' +
            '<div class="hero-media card">' + ED.ui.img(p) + '</div>' +
            '<div>' +
              '<p class="eyebrow" data-i18n="' + catKey + '">' + esc(t(catKey)) + '</p>' +
              '<h1 class="h-section">' + esc(p.name) + '</h1>' +
              '<p class="lead mt-4 measure">' + esc(L(p.tagline)) + '</p>' +
              '<div class="row mt-5">' + ED.ui.badge(p.availability) + '</div>' +
              sectors +
              '<div class="row mt-6">' + actions + dji + '</div>' +
            '</div>' +
          '</div>' +

          statStrip(p) +
        '</div>' +
      '</section>';
  }

  function usageBlock(p) {
    var txt = L(p.usage);
    if (!txt) return '';
    return '<h2 class="h-section" data-i18n="prod.usage">' + esc(t('prod.usage')) + '</h2>' +
           '<p class="lead measure mt-5">' + esc(txt) + '</p>';
  }

  /* Tableau de spécifications — omis tant que `specs` est vide */
  function specsBlock(p) {
    var groups = (p.specs || []).filter(function (g) {
      return g && Array.isArray(g.rows) && g.rows.length;
    });
    if (!groups.length) return '';

    var tables = groups.map(function (g) {
      var rows = g.rows.map(function (r) {
        var value = (r && r.value != null && r.value !== '') ? L(r.value) : '—';
        var labelText = L(r && r.label);
        var icon = ED.ui.getSpecIcon ? ED.ui.getSpecIcon(labelText) : 'assets/img/svg_icons/payload.svg';
        var iconHTML = icon ? '<img class="spec-icon" src="' + esc(icon) + '" alt="" aria-hidden="true" style="margin-right:8px;vertical-align:-3px;">' : '';
        return '<tr><th scope="row">' + iconHTML + esc(labelText) + '</th>' +
               '<td>' + esc(value) + '</td></tr>';
      }).join('');

      return '<div class="spec-group">' +
               '<div class="spec-group-title">' + esc(L(g.group)) + '</div>' +
               '<div class="table-scroll">' +
                 '<table class="spec-table"><tbody>' + rows + '</tbody></table>' +
               '</div>' +
             '</div>';
    }).join('');

    var djiLink = p.djiUrl
      ? '<div class="mt-6"><a class="btn btn-secondary" href="' + esc(p.djiUrl) + '" target="_blank" rel="noopener noreferrer" data-i18n="cta.djiFullSpecs">' + esc(t('cta.djiFullSpecs')) + ' →</a></div>'
      : '';

    return heading('prod.specs') +
           '<div style="max-width:880px">' + tables +
             '<p class="tiny mt-6" data-i18n="prod.specNote">' + esc(t('prod.specNote')) + '</p>' +
             djiLink +
           '</div>';
  }

  function payloadsBlock(p) {
    var list = (p.compatiblePayloads || [])
      .map(function (pid) { return ED.data.byId(pid); })
      .filter(function (x) { return !!x; });
    if (!list.length) return '';

    return heading('prod.payloads') +
           '<div class="grid grid-3">' + list.map(card).join('') + '</div>';
  }

  /* 3 autres modèles (appareils ou accessoires) partageant un secteur ou une catégorie */
  function relatedBlock(p) {
    var sectors = p.useCases || [];
    var targetType = p.type || 'aircraft';

    var scored = ED.data.products
      .filter(function (o) { return o.type === targetType && o.id !== p.id; })
      .map(function (o) {
        var shared = (o.useCases || []).filter(function (s) {
          return sectors.indexOf(s) !== -1;
        }).length;
        return { p: o, score: shared * 2 + (o.category === p.category ? 1 : 0) };
      })
      .filter(function (x) { return x.score > 0; });

    scored.sort(function (a, b) { return b.score - a.score; });

    var list = scored.slice(0, 3).map(function (x) { return x.p; });
    if (!list.length) return '';

    return heading('prod.related') +
           '<div class="grid grid-3">' + list.map(card).join('') + '</div>';
  }

  function ctaBlock() {
    return '' +
      '<div class="cta-band">' +
        '<h2 class="h-section" data-i18n="quote.title">' + esc(t('quote.title')) + '</h2>' +
        '<p class="lead mt-4 measure" style="margin-inline:auto" data-i18n="quote.noPrice">' +
          esc(t('quote.noPrice')) + '</p>' +
        '<div class="btn-row">' +
          '<a class="btn btn-primary" href="devis.html" data-i18n="cta.quote">' + esc(t('cta.quote')) + '</a>' +
          '<a class="btn btn-wa" href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer" ' +
             'data-i18n="cta.whatsapp">' + esc(t('cta.whatsapp')) + '</a>' +
        '</div>' +
      '</div>';
  }

  /* Les sections présentes alternent les fonds, quelles que soient
     celles qui sont omises faute de données. */
  function sections(p) {
    return [usageBlock(p), specsBlock(p), payloadsBlock(p), relatedBlock(p), ctaBlock()]
      .filter(function (html) { return !!html; })
      .map(function (html, i) {
        return '<section class="section' + (i % 2 === 0 ? ' section-alt' : '') + '">' +
                 '<div class="wrap">' + html + '</div>' +
               '</section>';
      })
      .join('');
  }

  /* ------------------------------------------------------------ interactions */

  function wireQty() {
    var input = document.getElementById('ed-qty');
    if (!input) return;

    function clamp(n) {
      n = parseInt(n, 10);
      if (isNaN(n) || n < 1) n = 1;
      return Math.min(999, n);
    }

    document.querySelectorAll('[data-qty-step]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var step = parseInt(btn.getAttribute('data-qty-step'), 10) || 0;
        input.value = clamp(parseInt(input.value, 10) + step);
      });
    });

    input.addEventListener('change', function () { input.value = clamp(input.value); });
  }

  /* ------------------------------------------------------------------ rendu */

  function notFound(main) {
    document.title = t('prod.notFound') + ' — ' + SITE;

    main.innerHTML = '' +
      '<section class="section">' +
        '<div class="wrap">' +
          '<div class="empty-state">' +
            '<h1 class="h-section" data-i18n="prod.notFound">' + esc(t('prod.notFound')) + '</h1>' +
            '<p class="lead mt-4 measure" style="margin-inline:auto" data-i18n="prod.notFoundBody">' +
              esc(t('prod.notFoundBody')) + '</p>' +
            '<div class="row mt-6" style="justify-content:center">' +
              '<a class="btn btn-primary" href="catalogue.html" data-i18n="cta.back">' + esc(t('cta.back')) + '</a>' +
              '<a class="btn" href="index.html" data-i18n="nav.home">' + esc(t('nav.home')) + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function render() {
    ED = window.ED;
    var main = document.getElementById('main');
    if (!ED || !main) return;

    t   = ED.i18n.t;
    L   = ED.i18n.L;
    esc = ED.ui.esc;

    var id = ED.ui.qs('id');
    var p  = id ? ED.data.byId(id) : null;

    if (!p) {
      notFound(main);
    } else {
      document.title = p.name + ' — ' + SITE;
      main.innerHTML = heroBlock(p) + sections(p);
      wireQty();
    }

    ED.i18n.apply(main);
  }

  document.addEventListener('ed:ready', render);
  document.addEventListener('ed:langchange', function () {
    var input = document.querySelector('[data-qty-for]');
    var qty = input && input.value;
    render();
    input = document.querySelector('[data-qty-for]');
    if (input && qty) input.value = qty;
  });
})();
