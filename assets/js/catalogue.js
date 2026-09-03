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
  var AVAIL = ['in_stock', 'on_order', 'coming_soon', 'not_available'];

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
    }
  });

  document.addEventListener('ed:ready', render);
  document.addEventListener('ed:langchange', render);
})();
