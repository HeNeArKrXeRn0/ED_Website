/* ==========================================================================
   EQUIP DRONES — Motion au défilement
   --------------------------------------------------------------------------
   Trois règles non négociables :
   1. On ne détourne JAMAIS le défilement (pas de scroll-jacking). Un acheteur
      qui parcourt un tableau de spécifications doit garder la main.
   2. Le contenu ne dépend jamais d'une animation pour être lisible. Sans JS,
      la classe `.motion` n'est pas posée et tout s'affiche normalement.
   3. `prefers-reduced-motion: reduce` désactive tout, sans exception.

   Les cibles sont trouvées par sélecteur, pas par attribut écrit à la main :
   les fiches produit injectées dynamiquement sont donc animées elles aussi.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce && reduce.matches) return;          // règle 3 : on n'active rien

  var root = document.documentElement;
  root.classList.add('motion');                  // règle 2 : opt-in par JS

  /* Si la préférence système change en cours de route, on rend tout visible. */
  if (reduce && reduce.addEventListener) {
    reduce.addEventListener('change', function (e) {
      if (e.matches) {
        root.classList.remove('motion');
        document.querySelectorAll('[data-reveal]').forEach(clear);
      }
    });
  }

  var NARROW = function () { return window.innerWidth < 900; };

  /* ------------------------------------------------------------ 1. reveal */
  /* effect: '' (bas) | 'fade' | 'left' | 'right' | 'scale'
     stagger: décalage entre frères, en ms (0 = simultané)          */
  var TARGETS = [
    { sel: '.hero-grid > *',                   stagger: 110, dur: 700 },
    { sel: '.page-head > *',                   stagger: 70,  dur: 560 },
    { sel: '.section-head',                    dur: 620 },
    { sel: '.stat-strip .stat',                stagger: 80,  dur: 560 },
    { sel: '.p-card',        effect: 'scale',  stagger: 55,  dur: 480 },
    { sel: '.card, .feature',                  stagger: 60,  dur: 520 },
    { sel: '.callout',       effect: 'left',   dur: 620 },
    { sel: '.notice',        effect: 'left',   dur: 520 },
    { sel: '.cta-band',      effect: 'scale',  dur: 640 },
    { sel: '.spec-group',                      stagger: 50,  dur: 520 },
    { sel: '.table-scroll',  effect: 'fade',   dur: 620 },
    { sel: '.socials',                         dur: 520 }
  ];

  var STAGGER_CAP = 320;   /* au-delà, l'attente devient perceptible */

  /* Marge basse en pixels, pas en pourcentage : un `-6%` crée une zone morte
     en bas du document, et le contenu du pied de page ne croise alors jamais
     l'observateur une fois le défilement arrivé en butée. */
  var io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(onIntersect, { rootMargin: '0px 0px -40px 0px', threshold: 0.04 })
    : null;

  function onIntersect(entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      io.unobserve(el);
      el.classList.add('is-in');

      /* On nettoie une fois l'animation finie : sinon la règle de reveal
         (spécificité 0,3,0) continue d'écraser `.p-card:hover` (0,2,0) et
         le survol des cartes ne soulève plus rien. */
      var total = (parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0)
                + (parseInt(el.style.getPropertyValue('--reveal-dur'), 10) || 560);
      setTimeout(function () { clear(el); }, total + 120);
    });
  }

  function clear(el) {
    el.removeAttribute('data-reveal');
    el.classList.remove('is-in');
    el.style.removeProperty('--reveal-delay');
    el.style.removeProperty('--reveal-dur');
    el.style.willChange = '';
  }

  function markable(el) {
    if (el.hasAttribute('data-reveal') || el.dataset.revealDone) return false;

    /* Un élément en `display:none` (panneau de confirmation du devis, état vide
       du catalogue…) ne croisera JAMAIS l'observateur : le masquer reviendrait
       à le rendre définitivement invisible le jour où le code l'affiche. On ne
       l'anime donc pas du tout — il apparaîtra normalement. */
    if (!el.offsetWidth && !el.offsetHeight && !el.getClientRects().length) {
      el.dataset.revealDone = '1';
      return false;
    }

    /* Pas d'animation imbriquée : un enfant d'un élément déjà animé suivrait
       son parent et donnerait un double mouvement. */
    return !el.parentElement || !el.parentElement.closest('[data-reveal]');
  }

  function scan(scope) {
    if (!io) return;
    var ctx = scope && scope.querySelectorAll ? scope : document;

    TARGETS.forEach(function (t) {
      var nodes = [];
      try { nodes = Array.prototype.slice.call(ctx.querySelectorAll(t.sel)); }
      catch (e) { return; }

      /* index par parent, pour un décalage en cascade au sein d'une grille */
      var seen = [];
      nodes.forEach(function (el) {
        if (!markable(el)) return;

        var i = 0;
        if (t.stagger) {
          var p = el.parentElement;
          var slot = null;
          for (var k = 0; k < seen.length; k++) { if (seen[k].p === p) { slot = seen[k]; break; } }
          if (!slot) { slot = { p: p, n: 0 }; seen.push(slot); }
          i = slot.n++;
        }

        el.dataset.revealDone = '1';
        el.setAttribute('data-reveal', t.effect || '');
        if (t.dur) el.style.setProperty('--reveal-dur', t.dur + 'ms');
        if (t.stagger) {
          el.style.setProperty('--reveal-delay',
            Math.min(i * t.stagger, STAGGER_CAP) + 'ms');
        }
        io.observe(el);
      });
    });
  }

  /* Filet de sécurité — c'est la règle 2 rendue exécutoire.
     Un élément peut ne jamais croiser l'observateur : injecté au-dessus du point
     de défilement courant, ré-affiché après coup, ou coincé dans l'angle mort du
     bas de document. On balaie donc ce qui reste en attente : tout ce qui est à
     l'écran ou déjà dépassé est révélé sans condition. */
  function sweep() {
    var nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;
    var vh = window.innerHeight;

    Array.prototype.forEach.call(nodes, function (el) {
      if (el.classList.contains('is-in')) return;
      var r = el.getBoundingClientRect();

      if (!r.width && !r.height) { clear(el); return; }   /* devenu display:none */

      if (r.top < vh) {                                   /* visible, ou dépassé */
        if (io) io.unobserve(el);
        el.classList.add('is-in');
        setTimeout(function () { clear(el); }, 800);
      }
    });
  }
  setInterval(sweep, 1200);

  /* --------------------------------------------------- 2. compteurs chiffrés */
  /* On n'anime QUE des nombres propres. Une plage ("4–11 m"), une résolution
     ("640×512") ou un texte ("Plein format") est laissée intacte.            */
  function parseStat(raw) {
    var m = raw.match(/^([^\d]*)(\d[\d\s  .,]*?)([^\d]*)$/);
    if (!m) return null;
    var prefix = m[1], numStr = m[2], suffix = m[3];

    if (/[\w]/.test(prefix)) return null;        // "IP56" → on ne touche pas
    if (/\d/.test(suffix)) return null;          // "4–11 m", "640×512" → non

    var groupSep = (numStr.match(/\d([\s  ])\d/) || [])[1] || '';
    var cleaned = numStr.replace(/[\s  ]/g, '');
    var dec = cleaned.match(/[.,](\d{1,2})$/);
    var value, decimals = 0, decSep = ',';

    if (dec) {
      decimals = dec[1].length;
      decSep = dec[0].charAt(0);
      value = parseFloat(cleaned.slice(0, -dec[0].length).replace(/[.,]/g, '') + '.' + dec[1]);
    } else {
      value = parseFloat(cleaned.replace(/[.,]/g, ''));
    }
    if (!isFinite(value) || value <= 0) return null;

    return { prefix: prefix, suffix: suffix, value: value,
             decimals: decimals, decSep: decSep, groupSep: groupSep };
  }

  function formatStat(v, s) {
    var out = v.toFixed(s.decimals);
    var parts = out.split('.');
    if (s.groupSep) parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, s.groupSep);
    return s.prefix + (parts[1] ? parts[0] + s.decSep + parts[1] : parts[0]) + s.suffix;
  }

  var counterIO = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          counterIO.unobserve(e.target);
          runCount(e.target);
        });
      }, { threshold: 0.5 })
    : null;

  function runCount(el) {
    var s = el._stat;
    if (!s) return;
    var t0 = null, DUR = 1150;

    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / DUR);
      var eased = 1 - Math.pow(2, -10 * p);          // easeOutExpo
      if (p >= 1) eased = 1;
      el.textContent = formatStat(s.value * eased, s);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = s.original;              // valeur exacte à la fin
    }
    requestAnimationFrame(step);
  }

  function scanCounters(scope) {
    if (!counterIO) return;
    var ctx = scope && scope.querySelectorAll ? scope : document;
    var nodes = ctx.querySelectorAll('.stat-value');
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.dataset.counted) return;
      var raw = (el.textContent || '').trim();
      var s = parseStat(raw);
      el.dataset.counted = '1';
      if (!s) return;                                // texte : on n'y touche pas
      s.original = raw;
      el._stat = s;
      el.textContent = formatStat(0, s);
      counterIO.observe(el);
    });
  }

  /* -------------------------------------- 3. barre de progression + en-tête */
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  var header = null, hero = null, heroMedia = null, ticking = false;

  function recache() {
    header = document.querySelector('.site-header');
    hero = document.querySelector('.hero');
    heroMedia = document.querySelector('.hero-media');
  }
  recache();

  function frame() {
    ticking = false;
    var y = window.pageYOffset || root.scrollTop || 0;

    var max = root.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0) + ')';

    if (header) {
      if (y > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }

    /* Parallaxe : desktop uniquement, et seulement tant que le héros est à
       l'écran — inutile de déplacer des pixels qu'on ne voit plus.          */
    if (!NARROW() && hero) {
      var h = hero.offsetHeight || 0;
      if (y < h + 200) {
        if (heroMedia) heroMedia.style.transform = 'translate3d(0,' + (y * -0.075).toFixed(2) + 'px,0)';
        hero.style.setProperty('--hero-shift', (y * 0.16).toFixed(2) + 'px');
      }
    } else if (heroMedia) {
      heroMedia.style.transform = '';
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---------------------------------------------------------- 4. cycle de vie */
  function refresh(scope) {
    recache();
    scan(scope);
    scanCounters(scope);
    onScroll();
  }

  /* Le contenu piloté par les données arrive après le boot d'app.js, et
     l'en-tête est reconstruit à chaque changement de langue. */
  document.addEventListener('ed:ready', function () { refresh(); });
  document.addEventListener('ed:langchange', function () {
    /* Les compteurs ont été réécrits : on autorise un nouveau passage. */
    document.querySelectorAll('.stat-value').forEach(function (el) {
      delete el.dataset.counted; el._stat = null;
    });
    setTimeout(function () { refresh(); }, 30);
  });

  /* Filtres du catalogue, lignes du devis, colonnes du comparateur : tout ce
     qui est ré-injecté dans #main doit pouvoir s'animer à son tour. */
  var pending = false;
  if ('MutationObserver' in window) {
    var mo = new MutationObserver(function (records) {
      var added = false;
      for (var i = 0; i < records.length; i++) {
        if (records[i].addedNodes && records[i].addedNodes.length) { added = true; break; }
      }
      if (!added || pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; refresh(); });
    });
    var main = document.getElementById('main');
    if (main) mo.observe(main, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { refresh(); });
  } else {
    refresh();
  }
})();
