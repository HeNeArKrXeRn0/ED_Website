/* ==========================================================================
   EQUIP DRONES — Comparateur de modèles
   Compare 2 à 4 appareils (type 'aircraft' uniquement ; les charges utiles
   sont exclues). État partageable dans l'URL : ?ids=t50,t70p

   Consomme le contrat window.ED exposé par app.js. Ne le modifie pas.
   ========================================================================== */
(function () {
  'use strict';

  var SLOTS       = 4;
  var DEFAULT_IDS = ['t50', 't70p'];   /* deux modèles agricoles de référence */
  var DASH        = '—';               /* valeur non publiée par DJI */

  var slots       = ['', '', '', ''];
  var hideSame    = false;
  var started     = false;

  /* Libellés absents de i18n.js (fichier gelé) — bilingues malgré tout. */
  var LOCAL = {
    noSpecs: {
      fr: 'Les spécifications détaillées de ces appareils sont en cours d’intégration. Contactez-nous pour recevoir les fiches techniques complètes.',
      en: 'Detailed specifications for these aircraft are being added. Contact us to receive the full technical datasheets.'
    },
    ctaTitle: {
      fr: 'Besoin d’aide pour choisir ?',
      en: 'Need help choosing?'
    }
  };

  /* --------------------------------------------------------------- outils */
  function t(k)   { return window.ED.i18n.t(k); }
  function L(v)   { return window.ED.i18n.L(v); }
  function esc(s) { return window.ED.ui.esc(s); }
  function lt(k)  { return L(LOCAL[k]); }

  function aircraft() { return window.ED.data.aircraft(); }

  /* Renvoie l'id si — et seulement si — c'est bien un appareil connu. */
  function validId(id) {
    var p = window.ED.data.byId(String(id == null ? '' : id).trim());
    return (p && p.type === 'aircraft') ? p.id : '';
  }

  /* Clé de rapprochement : libellé français normalisé. */
  function key(s) {
    return String(s == null ? '' : s).replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function chosen() {
    return slots.filter(function (id) { return !!id; });
  }

  /* ------------------------------------------------------ état & URL */
  function defaults() {
    var out = [];
    DEFAULT_IDS.forEach(function (id) { if (validId(id)) out.push(id); });
    /* Repli si les modèles par défaut disparaissent du catalogue */
    aircraft().forEach(function (p) {
      if (out.length < 2 && p.category === 'agriculture' && out.indexOf(p.id) === -1) out.push(p.id);
    });
    return out;
  }

  function readUrl() {
    var raw = window.ED.ui.qs('ids');
    if (raw === null) return defaults();      /* aucun paramètre : sélection par défaut */

    var out = [];
    raw.split(',').forEach(function (part) {
      var id = validId(part);
      if (id && out.indexOf(id) === -1 && out.length < SLOTS) out.push(id);
    });
    return out;                                /* ?ids= invalide : on assume 0 sélection */
  }

  function fill(list) {
    var out = ['', '', '', ''];
    list.slice(0, SLOTS).forEach(function (id, i) { out[i] = id; });
    return out;
  }

  function syncUrl() {
    var list = chosen();
    try {
      var base = window.location.href.split('#')[0].split('?')[0];
      window.history.replaceState(null, '', base + (list.length ? '?ids=' + list.join(',') : ''));
    } catch (e) {
      /* Certains navigateurs refusent replaceState en file:// — sans conséquence. */
    }
  }

  /* ------------------------------------------------------------ sélecteurs */
  function categories() {
    var out = ['agriculture', 'enterprise'].filter(function (c) {
      return aircraft().some(function (p) { return p.category === c; });
    });
    aircraft().forEach(function (p) {
      if (out.indexOf(p.category) === -1) out.push(p.category);
    });
    return out;
  }

  function optionsHTML(selected) {
    var html = '<option value="">' + esc(t('cmp.none')) + '</option>';
    categories().forEach(function (cat) {
      var list = aircraft().filter(function (p) { return p.category === cat; });
      if (!list.length) return;
      html += '<optgroup label="' + esc(t('cat.' + cat)) + '">';
      list.forEach(function (p) {
        html += '<option value="' + esc(p.id) + '"' +
                (p.id === selected ? ' selected' : '') + '>' + esc(p.name) + '</option>';
      });
      html += '</optgroup>';
    });
    return html;
  }

  function buildControls() {
    var host = document.getElementById('cmp-slots');
    if (!host) return;

    var html = '';
    for (var i = 0; i < SLOTS; i++) {
      var id = 'cmp-slot-' + (i + 1);
      html += '<div class="field">' +
                '<label for="' + id + '">' +
                  '<span data-i18n="cmp.slot">' + esc(t('cmp.slot')) + '</span> ' + (i + 1) +
                '</label>' +
                '<select class="select" id="' + id + '" data-slot="' + i + '">' +
                  optionsHTML(slots[i]) +
                '</select>' +
              '</div>';
    }
    host.innerHTML = html;

    host.querySelectorAll('select').forEach(function (sel) {
      sel.addEventListener('change', onSelect);
    });
  }

  function onSelect(e) {
    var sel  = e.currentTarget;
    var i    = parseInt(sel.getAttribute('data-slot'), 10);
    var next = validId(sel.value);
    var prev = slots[i];

    /* Un même appareil ne peut pas occuper deux colonnes : on échange. */
    if (next) {
      for (var j = 0; j < SLOTS; j++) {
        if (j !== i && slots[j] === next) {
          slots[j] = prev;
          var other = document.getElementById('cmp-slot-' + (j + 1));
          if (other) other.value = prev;
        }
      }
    }

    slots[i] = next;
    if (sel.value !== next) sel.value = next;   /* valeur inconnue : on remet à zéro */

    syncUrl();
    renderResult();
  }

  /* --------------------------------------------------- modèle du tableau */
  /* Union des lignes de spécification des appareils sélectionnés, groupe par
     groupe, rapprochées par libellé français. L'ordre suit le premier
     appareil qui déclare le groupe, puis la ligne.                        */
  function buildModel(list) {
    var groups = [], gmap = {};

    list.forEach(function (p) {
      (p.specs || []).forEach(function (g) {
        if (!g) return;

        var gk  = key(g.group && g.group.fr) || key(L(g.group));
        var grp = gmap[gk];
        if (!grp) {
          grp = { label: g.group, rows: [], rmap: {} };
          gmap[gk] = grp;
          groups.push(grp);
        }

        (g.rows || []).forEach(function (r) {
          if (!r) return;
          var rk = key(r.label && r.label.fr) || key(L(r.label));
          if (!rk) return;                       /* ligne sans libellé : non comparable */

          var row = grp.rmap[rk];
          if (!row) {
            row = { label: r.label, values: {} };
            grp.rmap[rk] = row;
            grp.rows.push(row);
          }
          if (!(p.id in row.values)) row.values[p.id] = r.value;
        });
      });
    });

    return groups.filter(function (g) { return g.rows.length > 0; });
  }

  /* Valeur affichée : un appareil qui ne publie pas la ligne affiche « — ». */
  function valueOf(row, id) {
    var v = row.values[id];
    if (v && typeof v === 'object') v = L(v);
    v = String(v == null ? '' : v).trim();
    return v === '' ? DASH : v;
  }

  function identical(row, list) {
    var first = valueOf(row, list[0].id);
    for (var i = 1; i < list.length; i++) {
      if (valueOf(row, list[i].id) !== first) return false;
    }
    return true;
  }

  /* ---------------------------------------------------------- rendu HTML */
  /* Les deux correctifs en ligne qui figuraient ici (décalage sticky de l'en-tête
     et couleur des en-têtes de groupe) sont désormais corrigés dans site.css.   */
  var STICKY_FIX = '';
  var GROUP_FIX = '';

  function headCell(p) {
    var href = 'produit.html?id=' + encodeURIComponent(p.id);
    var allowed = window.ED.data.isQuoteAllowed(p);
    var notAvail = p.availability === 'not_available';

    var actionBtn = allowed
      ? '<button type="button" class="btn btn-sm btn-primary" data-add="' + esc(p.id) + '" data-i18n="cta.addQuote">' + esc(t('cta.addQuote')) + '</button>'
      : (notAvail
        ? '<button type="button" class="btn btn-sm" disabled data-i18n="avail.not_available">' + esc(t('avail.not_available')) + '</button>'
        : '<button type="button" class="btn btn-sm" disabled data-i18n="cta.discontinued">' + esc(t('cta.discontinued')) + '</button>');

    return '<th scope="col"' + STICKY_FIX + '>' +
      '<div class="stack" style="align-items:flex-start">' +
        '<span style="display:block;width:110px;max-width:100%">' + window.ED.ui.img(p) + '</span>' +
        '<a href="' + href + '">' + esc(p.name) + '</a>' +
        window.ED.ui.badge(p.availability) +
        '<span class="row">' +
          actionBtn +
          '<a class="btn btn-sm" href="' + href + '" data-i18n="cta.details">' + esc(t('cta.details')) + '</a>' +
        '</span>' +
      '</div>' +
    '</th>';
  }

  function tableHTML(list, groups) {
    var cols = list.length + 1;

    var html = '<div class="table-scroll" role="region" tabindex="0" ' +
                    'data-i18n-attr="aria-label:cmp.title" aria-label="' + esc(t('cmp.title')) + '">' +
      '<table class="cmp-table">' +
        '<thead><tr>' +
          '<th scope="col"' + STICKY_FIX + '><span class="sr-only">' + esc(t('prod.specs')) + '</span></th>';
    list.forEach(function (p) { html += headCell(p); });
    html += '</tr></thead>';

    if (groups.length) {
      html += '<tbody>';
      groups.forEach(function (g) {
        html += '<tr class="cmp-group-row">' +
                  '<th colspan="' + cols + '" scope="colgroup"' + GROUP_FIX + '>' +
                    esc(L(g.label) || t('prod.specs')) +
                  '</th></tr>';

        g.rows.forEach(function (row) {
          var same = identical(row, list);
          var labelText = L(row.label);
          var icon = window.ED.ui.getSpecIcon ? window.ED.ui.getSpecIcon(labelText) : null;
          var iconHTML = icon ? '<img class="spec-icon" src="' + esc(icon) + '" alt="" aria-hidden="true" style="margin-right:8px;vertical-align:-3px;">' : '';
          html += '<tr' + (same ? ' class="cmp-row-same"' : '') + '>' +
                    '<th scope="row">' + iconHTML + esc(labelText) + '</th>';
          list.forEach(function (p) { html += '<td>' + esc(valueOf(row, p.id)) + '</td>'; });
          html += '</tr>';
        });
      });
      html += '</tbody>';
    }

    html += '</table></div>';

    /* Spécifications pas encore saisies : on garde les colonnes, on explique. */
    if (!groups.length) {
      html += '<p class="notice mt-5">' + esc(lt('noSpecs')) + '</p>';
    }
    return html;
  }

  function renderResult() {
    var host  = document.getElementById('cmp-result');
    var tools = document.getElementById('cmp-tools');
    var note  = document.getElementById('cmp-note');
    if (!host) return;

    var list = chosen().map(function (id) { return window.ED.data.byId(id); })
                       .filter(function (p) { return !!p; });

    if (list.length < 2) {
      host.innerHTML = '<div class="empty-state">' +
                         '<p class="lead" data-i18n="cmp.needTwo">' + esc(t('cmp.needTwo')) + '</p>' +
                       '</div>';
      if (tools) tools.classList.add('hidden');
      if (note)  note.classList.add('hidden');
      return;
    }

    var groups = buildModel(list);
    host.innerHTML = tableHTML(list, groups);

    var hasRows = groups.length > 0;
    if (tools) tools.classList.toggle('hidden', !hasRows);
    if (note)  note.classList.toggle('hidden', !hasRows);

    window.ED.i18n.apply(host);
    applyHideSame();
  }

  /* ------------------------------------------- masquer les lignes identiques */
  function applyHideSame() {
    var table = document.querySelector('#cmp-result .cmp-table');
    if (!table) return;

    table.querySelectorAll('tr.cmp-row-same').forEach(function (tr) {
      tr.classList.toggle('hidden', hideSame);
    });

    /* Un groupe dont toutes les lignes sont masquées disparaît aussi. */
    table.querySelectorAll('tr.cmp-group-row').forEach(function (head) {
      var visible = false;
      var tr = head.nextElementSibling;
      while (tr && !tr.classList.contains('cmp-group-row')) {
        if (!tr.classList.contains('hidden')) visible = true;
        tr = tr.nextElementSibling;
      }
      head.classList.toggle('hidden', !visible);
    });
  }

  function wireTools() {
    var cb = document.getElementById('cmp-hide-same');
    if (!cb) return;
    cb.checked = hideSame;
    cb.addEventListener('change', function () {
      hideSame = cb.checked;
      applyHideSame();
    });
  }

  /* ------------------------------------------------------------------ boot */
  function render() {
    if (!window.ED) return;

    if (!started) {
      slots = fill(readUrl());
      syncUrl();
      wireTools();
      started = true;
    }

    var cta = document.getElementById('cmp-cta-title');
    if (cta) cta.textContent = lt('ctaTitle');

    buildControls();
    renderResult();
  }

  document.addEventListener('ed:ready', render);
  document.addEventListener('ed:langchange', render);
})();
