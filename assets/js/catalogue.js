/* ==========================================================================
   EQUIP DRONES — Catalogue
   Filtrage client instantané : catégorie × secteur × disponibilité, combinés
   en ET. La grille principale ne montre que les appareils ; les charges utiles
   sont listées à part, en bas de page.
   Consomme window.ED (data / i18n / ui) — ne modifie jamais ce contrat.
   ========================================================================== */
(function () {
  'use strict';

  var CATS  = ['agriculture', 'enterprise', 'camera'];
  var AVAIL = ['in_stock', 'on_order', 'coming_soon', 'discontinued', 'not_available'];

  /* Source de vérité de la vue. L'URL n'en est que le reflet partageable. */
  var state  = { cat: 'all', sector: 'all', avail: 'all' };
  var booted = false;

  /* ------------------------------------------------------- lien profond */
  /* catalogue.html?cat=agriculture&secteur=vignes&dispo=in_stock */
  function readUrl() {
    var cat    = ED.ui.qs('cat');
    var sector = ED.ui.qs('secteur');
    var avail  = ED.ui.qs('dispo');

    if (CATS.indexOf(cat) !== -1)                  state.cat    = cat;
    if (ED.data.sectors().indexOf(sector) !== -1)  state.sector = sector;
    if (AVAIL.indexOf(avail) !== -1)               state.avail  = avail;
  }

  function writeUrl() {
    var params = new URLSearchParams();
    if (state.cat    !== 'all') params.set('cat', state.cat);
    if (state.sector !== 'all') params.set('secteur', state.sector);
    if (state.avail  !== 'all') params.set('dispo', state.avail);

    var query = params.toString();
    try {
      window.history.replaceState(null, '', query ? '?' + query : window.location.pathname);
    } catch (e) {
      /* file:// (origine opaque) refuse la réécriture d'URL : sans effet sur le filtrage. */
    }
  }

  /* ------------------------------------------------------ barre de filtres */
  function chip(group, value, key, pressed) {
    return '<button type="button" class="chip"' +
           ' data-filter="' + group + '"' +
           ' data-value="' + ED.ui.esc(value) + '"' +
           ' aria-pressed="' + (pressed ? 'true' : 'false') + '"' +
           ' data-i18n="' + key + '">' + ED.ui.esc(ED.i18n.t(key)) + '</button>';
  }

  function filterGroup(id, labelKey, chipsHTML) {
    return '<div class="filter-group" role="group" aria-labelledby="' + id + '">' +
             '<span class="filter-label" id="' + id + '" data-i18n="' + labelKey + '">' +
               ED.ui.esc(ED.i18n.t(labelKey)) +
             '</span>' +
             '<div class="chips">' + chipsHTML + '</div>' +
           '</div>';
  }

  function filterBarHTML() {
    var catChips = chip('cat', 'all', 'cat.all', state.cat === 'all') +
      CATS.map(function (c) {
        return chip('cat', c, 'cat.' + c, state.cat === c);
      }).join('');

    var sectorChips = chip('sector', 'all', 'cat.all', state.sector === 'all') +
      ED.data.sectors().map(function (s) {
        return chip('sector', s, 'sector.' + s, state.sector === s);
      }).join('');

    var availChips = chip('avail', 'all', 'cat.all', state.avail === 'all') +
      AVAIL.map(function (a) {
        return chip('avail', a, 'avail.' + a, state.avail === a);
      }).join('');

    return filterGroup('ed-f-cat',    'cat.filterCat',    catChips) +
           filterGroup('ed-f-sector', 'cat.filterSector', sectorChips) +
           filterGroup('ed-f-avail',  'cat.filterAvail',  availChips) +
           '<p class="result-count" role="status"></p>';
  }

  /* ------------------------------------------------------------ filtrage */
  function matches(p) {
    if (state.cat    !== 'all' && p.category !== state.cat) return false;
    if (state.avail  !== 'all' && p.availability !== state.avail) return false;
    if (state.sector !== 'all' && (p.useCases || []).indexOf(state.sector) === -1) return false;
    return true;
  }

  /* Met à jour chips, compteur, grille et URL — sans reconstruire la barre,
     pour ne pas perdre le focus clavier sur la puce qui vient d'être activée. */
  function apply() {
    var list = ED.data.aircraft().filter(matches);

    document.querySelectorAll('#ed-filters .chip[data-filter]').forEach(function (b) {
      var pressed = state[b.getAttribute('data-filter')] === b.getAttribute('data-value');
      b.setAttribute('aria-pressed', String(pressed));
    });

    var counter = document.querySelector('#ed-filters .result-count');
    if (counter) counter.textContent = list.length + ' ' + ED.i18n.t('cat.results');

    var grid = document.getElementById('ed-grid');
    if (grid) {
      grid.innerHTML = list.map(function (p) { return ED.ui.productCard(p); }).join('');
      ED.i18n.apply(grid);
      grid.classList.toggle('hidden', list.length === 0);
    }

    var empty = document.getElementById('ed-empty');
    if (empty) empty.classList.toggle('hidden', list.length !== 0);

    writeUrl();
  }

  /* -------------------------------------------------------------- rendu */
  function render() {
    if (!booted) { booted = true; readUrl(); }

    var bar = document.getElementById('ed-filters');
    if (bar) {
      bar.innerHTML = filterBarHTML();
      ED.i18n.apply(bar);
    }

    var payloads = document.getElementById('ed-payloads');
    if (payloads) {
      payloads.innerHTML = ED.data.payloads().map(function (p) {
        return ED.ui.productCard(p);
      }).join('');
      ED.i18n.apply(payloads);
    }

    apply();
  }

  /* -------------------------------------------------- pièces & accessoires */
  var partsState = { type: 'all', drone: 'all', q: '' };

  function partTypeLabel(p) {
    if (p.type === 'battery') return ED.i18n.t('parts.typeBattery');
    if (p.type === 'propeller') return ED.i18n.t('parts.typePropeller');
    if (p.partType === 'charging_station') return ED.i18n.t('parts.typeChargingStation');
    if (p.partType === 'generator') return ED.i18n.t('parts.typeGenerator');
    if (p.partType === 'spreading_system') return ED.i18n.t('parts.typeSpreadingSystem');
    if (p.partType === 'cable') return ED.i18n.t('parts.typeCable');
    return ED.i18n.t('cat.payload');
  }

  function partsToolbarHTML() {
    var typeChips = [
      { key: 'parts.tabAll', val: 'all' },
      { key: 'parts.tabBatteries', val: 'battery' },
      { key: 'parts.tabPropellers', val: 'propeller' },
      { key: 'parts.tabAgrasAccessories', val: 'accessory' }
    ].map(function (tab) {
      var pressed = partsState.type === tab.val;
      return '<button type="button" class="chip" data-parts-type="' + tab.val + '" aria-pressed="' + String(pressed) + '" data-i18n="' + tab.key + '">' +
             ED.ui.esc(ED.i18n.t(tab.key)) + '</button>';
    }).join('');

    var droneOptions = ['<option value="all" data-i18n="parts.allDrones">' + ED.ui.esc(ED.i18n.t('parts.allDrones')) + '</option>'];
    (ED.data.partDrones ? ED.data.partDrones() : []).forEach(function (d) {
      var sel = partsState.drone === d ? ' selected' : '';
      droneOptions.push('<option value="' + ED.ui.esc(d) + '"' + sel + '>' + ED.ui.esc(d) + '</option>');
    });

    return '' +
      '<div class="parts-toolbar-inner">' +
        '<div class="filter-group" role="group" aria-labelledby="ed-p-types">' +
          '<span class="filter-label" id="ed-p-types" data-i18n="cat.filterCat">' + ED.ui.esc(ED.i18n.t('cat.filterCat')) + '</span>' +
          '<div class="chips">' + typeChips + '</div>' +
        '</div>' +
        '<div class="parts-toolbar-filters">' +
          '<div class="parts-filter-drone">' +
            '<label for="ed-parts-drone-select" class="filter-label" data-i18n="parts.filterDrone">' + ED.ui.esc(ED.i18n.t('parts.filterDrone')) + '</label>' +
            '<select id="ed-parts-drone-select" class="parts-select">' + droneOptions.join('') + '</select>' +
          '</div>' +
          '<div class="parts-filter-search">' +
            '<label for="ed-parts-search" class="filter-label sr-only" data-i18n="parts.searchPlaceholder">' + ED.ui.esc(ED.i18n.t('parts.searchPlaceholder')) + '</label>' +
            '<input type="search" id="ed-parts-search" class="parts-search-input" value="' + ED.ui.esc(partsState.q) + '" placeholder="' + ED.ui.esc(ED.i18n.t('parts.searchPlaceholder')) + '" data-i18n-attr="placeholder:parts.searchPlaceholder">' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<p class="parts-result-count result-count" role="status"></p>';
  }

  function matchesPart(p) {
    if (partsState.type !== 'all' && p.type !== partsState.type) return false;
    if (partsState.drone !== 'all' && (!p.compatibleDrones || p.compatibleDrones.indexOf(partsState.drone) === -1)) return false;
    if (partsState.q) {
      var query = partsState.q.toLowerCase().trim();
      var nameStr = (p.name || '').toLowerCase();
      var titleFr = (p.title && p.title.fr || '').toLowerCase();
      var titleEn = (p.title && p.title.en || '').toLowerCase();
      var modelStr = (p.modelNumber || '').toLowerCase();
      var dronesStr = (p.compatibleDrones || []).join(' ').toLowerCase();
      if (nameStr.indexOf(query) === -1 && titleFr.indexOf(query) === -1 && titleEn.indexOf(query) === -1 && modelStr.indexOf(query) === -1 && dronesStr.indexOf(query) === -1) {
        return false;
      }
    }
    return true;
  }

  function partRowHTML(p) {
    var allowed = ED.data.isQuoteAllowed(p);
    var notAvail = p.availability === 'not_available';
    var isDiscontinued = p.availability === 'discontinued';

    var displayName = (p.title && ED.i18n.L(p.title)) ? ED.i18n.L(p.title) : p.name;
    var droneTags = (p.compatibleDrones || []).map(function (d) {
      return '<span class="tag-sm">' + ED.ui.esc(d) + '</span>';
    }).join(' ');

    var actionBtn = allowed
      ? '<button type="button" class="btn btn-sm btn-primary" data-add="' + ED.ui.esc(p.id) + '" data-i18n="cta.addQuote">' + ED.i18n.t('cta.addQuote') + '</button>'
      : (isDiscontinued
        ? '<button type="button" class="btn btn-sm" disabled data-i18n="cta.discontinued">' + ED.i18n.t('cta.discontinued') + '</button>'
        : '<button type="button" class="btn btn-sm" disabled data-i18n="avail.not_available">' + ED.i18n.t('avail.not_available') + '</button>');

    var qtyControls = allowed
      ? '<div class="qty qty-sm">' +
          '<button type="button" data-table-qty-step="-1" data-target="' + ED.ui.esc(p.id) + '" aria-label="' + ED.ui.esc(ED.i18n.t('qty.decrease')) + '">&#8722;</button>' +
          '<input type="number" id="qty-tbl-' + ED.ui.esc(p.id) + '" value="1" min="1" max="999" step="1" inputmode="numeric" data-qty-for="' + ED.ui.esc(p.id) + '" aria-label="' + ED.ui.esc(ED.i18n.t('prod.qty') + ' — ' + displayName) + '">' +
          '<button type="button" data-table-qty-step="1" data-target="' + ED.ui.esc(p.id) + '" aria-label="' + ED.ui.esc(ED.i18n.t('qty.increase')) + '">+</button>' +
        '</div>'
      : '';

    return '' +
      '<tr class="parts-table-row" data-id="' + ED.ui.esc(p.id) + '">' +
        '<td class="parts-td-type"><span class="badge-subtle">' + ED.ui.esc(partTypeLabel(p)) + '</span></td>' +
        '<td class="parts-td-name"><span class="strong">' + ED.ui.esc(displayName) + '</span></td>' +
        '<td class="parts-td-model"><code class="parts-code">' + ED.ui.esc(p.modelNumber || '—') + '</code></td>' +
        '<td class="parts-td-drones"><div class="parts-drones-wrap">' + droneTags + '</div></td>' +
        '<td class="parts-td-avail">' + ED.ui.badge(p.availability) + '</td>' +
        '<td class="parts-td-action">' +
          '<div class="parts-action-cell">' + qtyControls + actionBtn + '</div>' +
        '</td>' +
      '</tr>';
  }

  function applyParts() {
    var parts = (ED.data.parts ? ED.data.parts() : []).filter(matchesPart);

    document.querySelectorAll('#ed-parts-toolbar .chip[data-parts-type]').forEach(function (b) {
      var pressed = partsState.type === b.getAttribute('data-parts-type');
      b.setAttribute('aria-pressed', String(pressed));
    });

    var counter = document.querySelector('#ed-parts-toolbar .parts-result-count');
    if (counter) counter.textContent = parts.length + ' ' + ED.i18n.t('parts.results');

    var tbody = document.getElementById('ed-parts-body');
    if (tbody) {
      tbody.innerHTML = parts.map(partRowHTML).join('');
      ED.i18n.apply(tbody);
    }

    var table = document.getElementById('ed-parts-table');
    if (table) {
      var scrollWrap = table.closest('.table-scroll');
      if (scrollWrap) scrollWrap.classList.toggle('hidden', parts.length === 0);
    }

    var empty = document.getElementById('ed-parts-empty');
    if (empty) empty.classList.toggle('hidden', parts.length !== 0);
  }

  function renderParts() {
    var bar = document.getElementById('ed-parts-toolbar');
    if (bar) {
      bar.innerHTML = partsToolbarHTML();
      ED.i18n.apply(bar);

      var sel = document.getElementById('ed-parts-drone-select');
      if (sel) {
        sel.addEventListener('change', function () {
          partsState.drone = this.value;
          applyParts();
        });
      }

      var search = document.getElementById('ed-parts-search');
      if (search) {
        search.addEventListener('input', function () {
          partsState.q = this.value;
          applyParts();
        });
      }
    }

    applyParts();
  }

  /* -------------------------------------------------------------- rendu */
  function render() {
    if (!booted) { booted = true; readUrl(); }

    var bar = document.getElementById('ed-filters');
    if (bar) {
      bar.innerHTML = filterBarHTML();
      ED.i18n.apply(bar);
    }

    var payloads = document.getElementById('ed-payloads');
    if (payloads) {
      payloads.innerHTML = ED.data.payloads().map(function (p) {
        return ED.ui.productCard(p);
      }).join('');
      ED.i18n.apply(payloads);
    }

    apply();
    renderParts();
  }

  /* ------------------------------------------------------------ écoutes */
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;

    var c = e.target.closest('.chip[data-filter]');
    if (c) {
      state[c.getAttribute('data-filter')] = c.getAttribute('data-value');
      apply();
      return;
    }

    if (e.target.closest('[data-reset]')) {
      state.cat = 'all';
      state.sector = 'all';
      state.avail = 'all';
      apply();
      return;
    }

    var pt = e.target.closest('.chip[data-parts-type]');
    if (pt) {
      partsState.type = pt.getAttribute('data-parts-type');
      applyParts();
      return;
    }

    if (e.target.closest('[data-parts-reset]')) {
      partsState.type = 'all';
      partsState.drone = 'all';
      partsState.q = '';
      var s = document.getElementById('ed-parts-drone-select');
      if (s) s.value = 'all';
      var q = document.getElementById('ed-parts-search');
      if (q) q.value = '';
      applyParts();
      return;
    }

    var stepBtn = e.target.closest('[data-table-qty-step]');
    if (stepBtn) {
      var step = parseInt(stepBtn.getAttribute('data-table-qty-step'), 10) || 0;
      var targetId = stepBtn.getAttribute('data-target');
      var input = document.querySelector('[data-qty-for="' + targetId + '"]');
      if (input) {
        var cur = parseInt(input.value, 10) || 1;
        input.value = Math.max(1, Math.min(999, cur + step));
      }
      return;
    }
  });

  document.addEventListener('ed:ready', render);
  document.addEventListener('ed:langchange', render);
})();
