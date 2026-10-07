/* ==========================================================================
   EQUIP DRONES — Web3Forms integration (shared helper)
   Consomme le contrat window.ED exposé par app.js. Ne le modifie jamais,
   sauf pour y attacher ED.web3forms.

   Sécurité de la clé API (important — dépôt public) :
   - La clé Web3Forms N'EST PAS versionnée. Elle est lue à l'exécution dans
     `window.ED_WEB3FORMS_KEY`, définie par le fichier LOCAL et ignoré
     `assets/js/web3forms-config.js` (voir `web3forms-config.example.js`).
   - En production, limitez la clé au domaine www.equipdrones.com depuis le
     tableau de bord Web3Forms (domain allowlist). La clé reste visible dans
     le trafic réseau — c'est le fonctionnement normal de Web3Forms — mais
     elle ne doit jamais apparaître dans git.
   ========================================================================== */
(function () {
  'use strict';

  var ENDPOINT = 'https://api.web3forms.com/submit';

  function ed() { return window.ED; }
  function t(key) { return ed().i18n.t(key); }

  function accessKey() {
    var k = window.ED_WEB3FORMS_KEY || (ed() && ed().web3formsKey);
    return (typeof k === 'string' && k && k.indexOf('PASTE-') !== 0) ? k : '';
  }

  function showStatus(statusEl, key) {
    if (!statusEl) { return; }
    statusEl.dataset.statusKey = key;
    statusEl.textContent = t(key);
    statusEl.className = 'notice mt-4';
    statusEl.classList.remove('hidden');
    if (statusEl.setAttribute) { statusEl.setAttribute('role', 'status'); }
  }

  function showError(statusEl) {
    /* Erreur visiteur générique (bilingue) ; le détail reste en console. */
    showStatus(statusEl, 'form.error');
  }

  /**
   * Submit a form via Web3Forms.
   *
   * @param {Object} opts
   * @param {HTMLFormElement}    opts.form       — the <form> element
   * @param {HTMLElement}        opts.statusEl   — container for feedback
   * @param {HTMLButtonElement}  opts.submitBtn  — the submit trigger
   * @param {Object}             [opts.extraData]— extra key/value pairs
   * @param {function(): void}   [opts.onSuccess]— optional callback
   */
  function submit(opts) {
    var form = opts.form;
    var statusEl = opts.statusEl;
    var submitBtn = opts.submitBtn;
    var extraData = opts.extraData || {};
    var onSuccess = opts.onSuccess || function () {};

    var key = accessKey();
    if (!key) {
      if (window.console && console.warn) {
        console.warn(
          '[web3forms] Missing API key: copy ' +
          'assets/js/web3forms-config.example.js to ' +
          'assets/js/web3forms-config.js (git-ignored) and set your key. ' +
          'Never commit the real key.'
        );
      }
      showError(statusEl);
      return;
    }

    var originalLabel = submitBtn ? submitBtn.textContent : '';

    /* Honeypot : les robots cochent `botcheck`, les humains non. */
    var honeypot = form ? form.querySelector('[name="botcheck"]') : null;
    if (honeypot && ((honeypot.type === 'checkbox' && honeypot.checked) ||
                     (honeypot.value && honeypot.value !== ''))) {
      /* Silencieux : on simule un succès pour ne pas renseigner le robot. */
      showStatus(statusEl, 'form.success');
      if (form && form.reset) { form.reset(); }
      onSuccess();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('form.sending');
    }
    if (statusEl) { statusEl.classList.add('hidden'); }

    var fd = new FormData(form);
    fd.set('access_key', key);
    fd.set('language', ed().i18n.lang());
    Object.keys(extraData).forEach(function (k) {
      fd.set(k, extraData[k]);
    });

    fetch(ENDPOINT, { method: 'POST', body: fd })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        }).catch(function () {
          return { ok: res.ok, data: null };
        });
      })
      .then(function (out) {
        if (out.ok && out.data && out.data.success) {
          showStatus(statusEl, 'form.success');
          if (form && form.reset) { form.reset(); }
          onSuccess();
        } else {
          if (window.console && console.warn) {
            console.warn('[web3forms] Submission refused:', out.data || out.ok);
          }
          showError(statusEl);
        }
      })
      .catch(function (err) {
        if (window.console && console.warn) {
          console.warn('[web3forms] Network error:', err);
        }
        showError(statusEl);
      })
      .then(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
          /* Restaure le libellé traduit si la langue a changé entre-temps. */
          if (ed() && ed().i18n && ed().i18n.apply) { ed().i18n.apply(submitBtn); }
        }
      });
  }

  /* Re-traduction des statuts après un changement de langue. */
  document.addEventListener('ed:langchange', function () {
    document.querySelectorAll('[data-status-key]').forEach(function (node) {
      if (!node.classList.contains('hidden') && node.dataset.statusKey) {
        node.textContent = t(node.dataset.statusKey);
      }
    });
  });

  /* Attache au contrat ED + alias historique. */
  if (window.ED) { window.ED.web3forms = { submit: submit }; }
  window.ED_WEB3FORMS = window.ED_WEB3FORMS || { submit: submit };
  window.ED_WEB3FORMS.submit = submit;
})();
