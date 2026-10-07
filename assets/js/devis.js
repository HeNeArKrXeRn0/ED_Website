/* ==========================================================================
   EQUIP DRONES — Page « Demande de devis »
   Consomme le contrat window.ED exposé par app.js. Ne le modifie jamais.

   Envoi direct via Web3Forms (https://api.web3forms.com/submit) : le
   formulaire construit un message structuré bilingue (coordonnées +
   sélection du panier) et l'envoie sans passer par WhatsApp, e-mail ou
   presse-papiers. La clé API est lue dans window.ED_WEB3FORMS_KEY
   (fichier local ignoré web3forms-config.js) — jamais versionnée.
   Aucun prix, aucun total.
   ========================================================================== */
(function () {
  'use strict';

  var started   = false;  /* garde-fou : render() ne démarre qu'une fois */
  var wantFocus = null;   /* contrôle à refocaliser après reconstruction */

  /* ------------------------------------------------------------- raccourcis */
  function ED()  { return window.ED; }
  function t(k)  { return ED().i18n.t(k); }
  function esc(s){ return ED().ui.esc(s); }
  function $(id) { return document.getElementById(id); }

  /* ==========================================================================
     A. Sélection (panier)
     ========================================================================== */

  function emptyHTML() {
    return '' +
      '<div class="empty-state">' +
        '<p class="body" data-i18n="quote.empty">' + esc(t('quote.empty')) + '</p>' +
        '<a class="btn btn-primary mt-5" href="catalogue.html" data-i18n="cta.catalogue">' +
          esc(t('cta.catalogue')) +
        '</a>' +
      '</div>';
  }

  function lineHTML(line) {
    var p = ED().data.byId(line.id);
    if (!p || p.availability === 'discontinued') return '';

    var id = esc(line.id);
    var qid = 'qty-' + id;
    var isPart = p.type === 'battery' || p.type === 'propeller' || p.type === 'accessory';
    var linkHref = isPart ? 'catalogue.html#pieces-accessoires' : 'produit.html?id=' + encodeURIComponent(p.id);
    var displayName = (p.title && ED().i18n.L(p.title)) ? ED().i18n.L(p.title) : p.name;

    return '' +
      '<div class="cart-line" data-line="' + id + '">' +

        '<div class="stack-2">' +
          '<span class="p-card-cat" data-i18n="cat.' + esc(p.category) + '">' +
            esc(t('cat.' + p.category)) +
          '</span>' +
          '<a class="strong" href="' + linkHref + '">' +
            esc(displayName) +
          '</a>' +
          '<div>' + ED().ui.badge(p.availability) + '</div>' +
        '</div>' +

        '<div>' +
          '<label class="sr-only" for="' + qid + '">' +
            esc(t('prod.qty') + ' — ' + p.name) +
          '</label>' +
          '<div class="qty">' +
            '<button type="button" data-step="-1" data-id="' + id + '"' +
                    ' data-focus="minus:' + id + '" aria-label="' + esc(t('qty.decrease')) + '"' +
                    (line.qty <= 1 ? ' disabled' : '') + '>&#8722;</button>' +
            '<input type="number" id="' + qid + '" value="' + line.qty + '"' +
                   ' min="1" max="999" step="1" inputmode="numeric"' +
                   ' data-qty-input="' + id + '" data-focus="input:' + id + '">' +
            '<button type="button" data-step="1" data-id="' + id + '"' +
                    ' data-focus="plus:' + id + '" aria-label="' + esc(t('qty.increase')) + '">+</button>' +
          '</div>' +
        '</div>' +

        '<button type="button" class="btn-remove" data-remove="' + id + '"' +
                ' data-focus="rm:' + id + '">' +
          '<span data-i18n="cta.remove">' + esc(t('cta.remove')) + '</span>' +
          '<span class="sr-only"> — ' + esc(p.name) + '</span>' +
        '</button>' +

      '</div>';
  }

  function renderCart() {
    var host  = $('quote-lines');
    var count = $('quote-count');
    if (!host) return;

    /* La liste est reconstruite en entier : seul un clic sur « + » ou « − »
       demande explicitement une refocalisation (wantFocus), pour que le
       pas-à-pas reste utilisable au clavier sans voler le focus le reste
       du temps — notamment pendant une tabulation. */
    var focusKey = wantFocus;
    wantFocus = null;

    var items = ED().cart.items();

    host.innerHTML = items.length
      ? items.map(lineHTML).join('')
      : emptyHTML();

    ED().i18n.apply(host);

    if (count) {
      count.textContent = items.length ? ED().cart.count() + ' ' + t('quote.items') : '';
    }

    if (focusKey) {
      var again = host.querySelector('[data-focus="' + focusKey + '"]');
      if (again && !again.disabled) {
        again.focus();
      } else {
        /* Cible disparue ou désactivée (« − » à 1) : on retombe sur le champ. */
        var fallback = host.querySelector('[data-focus="input:' + focusKey.split(':')[1] + '"]');
        if (fallback) fallback.focus();
      }
    }
  }

  function currentQty(id) {
    var input = document.querySelector('[data-qty-input="' + id + '"]');
    var n = input ? parseInt(input.value, 10) : NaN;
    return isFinite(n) && n > 0 ? n : 1;
  }

  function wireCart() {
    var host = $('quote-lines');
    if (!host) return;

    host.addEventListener('click', function (e) {
      var target = e.target;
      if (!target || !target.closest) return;

      var step = target.closest('[data-step]');
      if (step) {
        var sid  = step.getAttribute('data-id');
        var next = currentQty(sid) + parseInt(step.getAttribute('data-step'), 10);
        wantFocus = step.getAttribute('data-focus');
        ED().cart.setQty(sid, Math.min(999, Math.max(1, next)));
        return;
      }

      var rm = target.closest('[data-remove]');
      if (rm) ED().cart.remove(rm.getAttribute('data-remove'));
    });

    /* `change` (et non `input`) : on ne réécrit pas le panier à chaque frappe. */
    host.addEventListener('change', function (e) {
      var input = e.target;
      if (!input || !input.getAttribute || !input.getAttribute('data-qty-input')) return;
      var n = parseInt(input.value, 10);
      if (!isFinite(n) || n < 1) n = 1;
      ED().cart.setQty(input.getAttribute('data-qty-input'), Math.min(999, n));
    });
  }

  /* ==========================================================================
     B. Formulaire — validation
     ========================================================================== */

  var RULES = [
    { id: 'q-name',  err: 'err-name',  key: 'quote.required',
      test: function (v) { return v.length > 0; } },
    { id: 'q-email', err: 'err-email', key: 'quote.badEmail',
      test: function (v) { return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(v); } },
    { id: 'q-phone', err: 'err-phone', key: 'quote.badPhone',
      test: function (v) { return (v.match(/\d/g) || []).length >= 8; } }
  ];

  function setFieldError(input, errId, message) {
    var wrap = input.closest ? input.closest('.field') : null;
    var box  = $(errId);
    if (message) {
      if (wrap) wrap.classList.add('field-error');
      input.setAttribute('aria-invalid', 'true');
      if (box) box.textContent = message;
    } else {
      if (wrap) wrap.classList.remove('field-error');
      input.removeAttribute('aria-invalid');
      if (box) box.textContent = '';
    }
  }

  function validate() {
    var first = null;

    RULES.forEach(function (rule) {
      var input = $(rule.id);
      if (!input) return;
      var value = input.value.trim();
      var message = '';

      if (!value)            message = t('quote.required');
      else if (!rule.test(value)) message = t(rule.key);

      setFieldError(input, rule.err, message);
      if (message && !first) first = input;
    });

    if (first) { first.focus(); return false; }
    return true;
  }

  function wireErrorClearing() {
    RULES.forEach(function (rule) {
      var input = $(rule.id);
      if (!input) return;
      input.addEventListener('input', function () {
        setFieldError(input, rule.err, '');
      });
    });
  }

  function fillWilayas() {
    var select = $('q-wilaya');
    if (!select || select.options.length > 1) return;  /* déjà rempli */
    var frag = document.createDocumentFragment();
    (ED().wilayas || []).forEach(function (name) {
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      frag.appendChild(option);
    });
    select.appendChild(frag);
  }

  function readForm() {
    function v(id) { var n = $(id); return n ? n.value.trim() : ''; }
    return {
      name:     v('q-name'),
      company:  v('q-company'),
      email:    v('q-email'),
      phone:    v('q-phone'),
      wilaya:   v('q-wilaya'),
      activity: v('q-activity'),
      area:     v('q-area'),
      message:  v('q-message')
    };
  }

  /* ==========================================================================
     C. Message + envoi direct (Web3Forms)
     ========================================================================== */

  function buildMessage(d) {
    var out = [];

    out.push(t('message.quote'));
    out.push('');
    out.push(t('message.contact'));
    out.push(t('quote.name') + ': ' + d.name);
    if (d.company)  out.push(t('quote.company') + ': ' + d.company);
    out.push(t('quote.email') + ': ' + d.email);
    out.push(t('quote.phone') + ': ' + d.phone);
    if (d.wilaya)   out.push(t('quote.wilaya') + ': ' + d.wilaya);
    if (d.activity) out.push(t('quote.activity') + ': ' + t(d.activity));
    if (d.area)     out.push(t('quote.area') + ': ' + d.area);

    out.push('');
    out.push(t('message.equipment'));
    var items = ED().cart.items();
    if (!items.length) {
      out.push('- ' + t('message.general'));
    } else {
      items.forEach(function (line) {
        var p = ED().data.byId(line.id);
        if (!p || p.availability === 'discontinued') return;
        out.push('- ' + line.qty + ' x ' + p.name + ' (' + t('avail.' + p.availability) + ')');
      });
    }

    if (d.message) {
      out.push('');
      out.push(t('quote.message'));
      out.push(d.message);
    }

    return out.join('\n');
  }

  function web3forms() {
    if (ED() && ED().web3forms) { return ED().web3forms; }
    return window.ED_WEB3FORMS || null;
  }

  function quoteSubject(name) {
    return t('message.subject') + ' — ' + (name || ED().contact.company);
  }

  function submitDirect(d) {
    var form = $('quote-form');
    var statusEl = $('quote-status');
    var submitBtn = $('quote-submit-btn');
    var helper = web3forms();

    if (!form || !helper) {
      if (window.console && console.warn) {
        console.warn('[devis] Web3Forms helper missing: check script order.');
      }
      return;
    }

    var subject = quoteSubject(d.name);

    helper.submit({
      form: form,
      statusEl: statusEl,
      submitBtn: submitBtn,
      extraData: {
        subject: subject,
        from_name: d.name,
        message: buildMessage(d)
      },
      onSuccess: function () {
        try { ED().cart.clear(); } catch (e) { /* panier déjà vide */ }
        renderCart();
        openPanel();
      }
    });
  }

  function openPanel() {
    var formWrap = $('quote-form-wrap');
    var panel = $('quote-sent');
    if (formWrap) { formWrap.classList.add('hidden'); }
    if (panel) { panel.classList.remove('hidden'); panel.focus(); }
  }

  function closePanel() {
    var formWrap = $('quote-form-wrap');
    var panel = $('quote-sent');
    if (panel) { panel.classList.add('hidden'); }
    if (formWrap) { formWrap.classList.remove('hidden'); }
    var status = $('quote-status');
    if (status) { status.classList.add('hidden'); status.textContent = ''; }
    var name = $('q-name');
    if (name) { name.focus(); }
  }

  function panelIsOpen() {
    var panel = $('quote-sent');
    return !!panel && !panel.classList.contains('hidden');
  }

  function wireForm() {
    var form = $('quote-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (panelIsOpen()) { return; }
        if (!validate()) { return; }
        submitDirect(readForm());
      });
    }

    var again = $('q-new');
    if (again) { again.addEventListener('click', closePanel); }
  }

  /* ==========================================================================
     Cycle de vie
     ========================================================================== */

  function render() {
    fillWilayas();
    renderCart();
  }

  function start() {
    if (started) return;
    started = true;

    wireCart();
    wireErrorClearing();
    wireForm();
    render();
  }

  document.addEventListener('ed:ready', start);

  /* Si app.js a déjà émis `ed:ready` avant le chargement de ce script. */
  if (window.ED && document.readyState !== 'loading') start();

  document.addEventListener('ed:langchange', function () {
    if (!started) return;
    render();
    RULES.forEach(function (rule) {
      var input = $(rule.id);
      if (input && input.getAttribute('aria-invalid') === 'true') {
        setFieldError(input, rule.err, t(input.value.trim() ? rule.key : 'quote.required'));
      }
    });
    /* Le panneau de confirmation est statique (data-i18n) : appliqué par ED. */
  });

  document.addEventListener('ed:cartchange', function () {
    if (!started) return;
    renderCart();
  });

})();
