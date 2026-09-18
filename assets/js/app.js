/* ==========================================================================
   EQUIP DRONES — Runtime partagé
   Charge APRÈS data.js et i18n.js.
   Expose window.ED : data, i18n, cart, ui, contact, wilayas.
   Les scripts de page consomment ce contrat — ils ne le modifient pas.
   ========================================================================== */
(function () {
  'use strict';

  var LS_LANG = 'ed_lang';
  var LS_CART = 'ed_cart';

  var PRODUCTS = window.ED_PRODUCTS || [];
  var STRINGS  = window.ED_STRINGS  || {};

  var CONTACT = window.ED_CONTACT || {
    phone:      '+213661936666',
    phoneLabel: '+213 661 93 66 66',
    whatsapp:   '213661936666',
    email:      'info@equipdrones.com',
    company:    'SARL Equip Drones',
    instagram:  'https://www.instagram.com/equip_drones/',
    facebook:   'https://www.facebook.com/profile.php?id=61571771371833',
    linkedin:   'https://www.linkedin.com/company/equip-drones/',
    youtube:    'https://www.youtube.com/@equip_drones_algeria',
    logo:       'assets/img/svg/Logo.svg',
    djiLogo:    'assets/img/photos/DJI_logo_white.png'
  };

  /* ---------------------------------------------------------------- utils */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* ------------------------------------------------------------------ i18n */
  var currentLang = 'fr';
  try {
    var saved = localStorage.getItem(LS_LANG);
    if (saved === 'fr' || saved === 'en') currentLang = saved;
  } catch (e) { /* stockage indisponible : on reste en FR */ }

  function t(key) {
    var entry = STRINGS[key];
    if (!entry) return key;
    return entry[currentLang] || entry.fr || key;
  }

  /* Résout un champ bilingue {fr, en} issu de data.js */
  function L(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[currentLang] || value.fr || '';
  }

  function applyI18n(root) {
    var scope = root || document;

    scope.querySelectorAll('[data-i18n]').forEach(function (node) {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function (node) {
      node.innerHTML = t(node.getAttribute('data-i18n-html'));
    });
    /* data-i18n-attr="placeholder:quote.messagePh, aria-label:nav.menu" */
    scope.querySelectorAll('[data-i18n-attr]').forEach(function (node) {
      node.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2) {
          node.setAttribute(bits[0].trim(), t(bits[1].trim()));
        }
      });
    });

    document.documentElement.lang = currentLang;
  }

  function setLang(lang) {
    if (lang !== 'fr' && lang !== 'en') return;
    currentLang = lang;
    try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
    applyI18n(document);
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.dispatchEvent(new CustomEvent('ed:langchange', { detail: { lang: lang } }));
  }

  /* ------------------------------------------------------------------ data */
  var byIdMap = {};
  PRODUCTS.forEach(function (p) { byIdMap[p.id] = p; });

  var data = {
    products: PRODUCTS,
    byId: function (id) { return byIdMap[id] || null; },
    byCategory: function (cat) {
      return PRODUCTS.filter(function (p) { return p.category === cat; });
    },
    aircraft: function () {
      return PRODUCTS.filter(function (p) { return p.type === 'aircraft'; });
    },
    payloads: function () {
      return PRODUCTS.filter(function (p) { return p.type === 'payload'; });
    },
    bySector: function (sector) {
      return PRODUCTS.filter(function (p) {
        return (p.useCases || []).indexOf(sector) !== -1;
      });
    },
    sectors: function () {
      var seen = [];
      PRODUCTS.forEach(function (p) {
        (p.useCases || []).forEach(function (s) {
          if (seen.indexOf(s) === -1) seen.push(s);
        });
      });
      return seen;
    }
  };

  /* ------------------------------------------------------------------ cart */
  var listeners = [];

  function readCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(LS_CART) || '[]');
      if (!Array.isArray(raw)) return [];
      /* On ne garde que les lignes dont le produit existe encore et n'est pas discontinué */
      return raw
        .filter(function (l) { return l && byIdMap[l.id] && byIdMap[l.id].availability !== 'discontinued'; })
        .map(function (l) {
          return { id: l.id, qty: Math.max(1, Math.min(999, parseInt(l.qty, 10) || 1)) };
        });
    } catch (e) { return []; }
  }

  function writeCart(lines) {
    try { localStorage.setItem(LS_CART, JSON.stringify(lines)); } catch (e) {}
    listeners.forEach(function (fn) { try { fn(lines); } catch (e) {} });
    paintCartBadge();
    document.dispatchEvent(new CustomEvent('ed:cartchange', { detail: { items: lines } }));
  }

  var cart = {
    items: readCart,
    count: function () {
      return readCart().reduce(function (n, l) { return n + l.qty; }, 0);
    },
    lines: function () { return readCart().length; },
    has: function (id) {
      return readCart().some(function (l) { return l.id === id; });
    },
    add: function (id, qty) {
      if (!byIdMap[id] || byIdMap[id].availability === 'discontinued') return;
      var n = Math.max(1, parseInt(qty, 10) || 1);
      var lines = readCart();
      var found = lines.filter(function (l) { return l.id === id; })[0];
      if (found) { found.qty = Math.min(999, found.qty + n); }
      else { lines.push({ id: id, qty: n }); }
      writeCart(lines);
    },
    setQty: function (id, qty) {
      var n = parseInt(qty, 10) || 0;
      var lines = readCart();
      if (n <= 0) {
        writeCart(lines.filter(function (l) { return l.id !== id; }));
        return;
      }
      lines.forEach(function (l) { if (l.id === id) l.qty = Math.min(999, n); });
      writeCart(lines);
    },
    remove: function (id) {
      writeCart(readCart().filter(function (l) { return l.id !== id; }));
    },
    clear: function () { writeCart([]); },
    on: function (fn) { if (typeof fn === 'function') listeners.push(fn); }
  };

  function paintCartBadge() {
    var n = cart.count();
    document.querySelectorAll('.cart-count').forEach(function (b) {
      b.textContent = n;
      b.setAttribute('data-empty', String(n === 0));
    });
  }

  /* -------------------------------------------------------------------- ui */
  var NAV = [
    { key: 'home',         href: 'index.html',        i18n: 'nav.home' },
    { key: 'agriculture',  href: 'agriculture.html',  i18n: 'nav.agriculture' },
    { key: 'enterprise',   href: 'enterprise.html',   i18n: 'nav.enterprise' },
    { key: 'camera',       href: 'camera.html',       i18n: 'nav.camera' },
    { key: 'compare',      href: 'comparateur.html',  i18n: 'nav.compare' },
    { key: 'applications', href: 'applications.html', i18n: 'nav.applications' },
    { key: 'services',     href: 'services.html',     i18n: 'nav.services' },
    { key: 'about',        href: 'a-propos.html',     i18n: 'nav.about' }
  ];

  var ICONS = {
    instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
    facebook:  'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    linkedin:  'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    youtube:   'M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z',
    whatsapp:  'M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.16 8.16 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z'
  };

  function socialIcon(name, href, label) {
    return '<a class="social" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(label) + '">' +
           '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICONS[name] + '"/></svg></a>';
  }

  function headerHTML(active) {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '" data-i18n="' + n.i18n + '"' +
             (n.key === active ? ' aria-current="page"' : '') + '>' + t(n.i18n) + '</a>';
    }).join('');

    return '' +
      '<a class="skip-link" href="#main" data-i18n="nav.skip">' + t('nav.skip') + '</a>' +
      '<header class="site-header">' +
        '<div class="wrap">' +
          '<a class="brand" href="index.html" aria-label="' + esc(CONTACT.company) + '">' +
            '<img class="brand-logo" src="' + esc(CONTACT.logo) + '" alt="' + esc(CONTACT.company) + '" ' +
                 'onerror="this.onerror=null;this.style.display=\'none\'">' +
            '<span class="brand-text">Equip Drones</span>' +
            (CONTACT.djiLogo ? '<span class="brand-divider" aria-hidden="true"></span>' +
            '<img class="brand-dji" src="' + esc(CONTACT.djiLogo) + '" alt="DJI" ' +
                 'onerror="this.onerror=null;this.style.display=\'none\'">' : '') +
          '</a>' +
          '<nav class="nav" id="ed-nav">' + links + '</nav>' +
          '<div class="header-actions">' +
            '<div class="lang-toggle" role="group" aria-label="Langue / Language">' +
              '<button type="button" data-lang="fr" aria-pressed="' + (currentLang === 'fr') + '">FR</button>' +
              '<button type="button" data-lang="en" aria-pressed="' + (currentLang === 'en') + '">EN</button>' +
            '</div>' +
            '<a class="btn btn-primary btn-sm cart-link" href="devis.html">' +
              '<span data-i18n="nav.quote">' + t('nav.quote') + '</span>' +
              '<span class="cart-count" data-empty="true">0</span>' +
            '</a>' +
            '<button type="button" class="nav-toggle" id="ed-nav-toggle" ' +
                    'aria-expanded="false" aria-controls="ed-nav" ' +
                    'data-i18n-attr="aria-label:nav.menu" aria-label="' + t('nav.menu') + '">' +
              '<span></span></button>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  function footerHTML() {
    var navLinks = NAV.map(function (n) {
      return '<a href="' + n.href + '" data-i18n="' + n.i18n + '">' + t(n.i18n) + '</a>';
    }).join('');

    var year = new Date().getFullYear();

    return '' +
      '<footer class="site-footer">' +
        '<div class="wrap">' +
          '<div class="footer-grid">' +
            '<div>' +
              '<div class="brand mb-4">' +
                '<img class="brand-logo" src="' + esc(CONTACT.logo) + '" alt="" onerror="this.onerror=null;this.style.display=\'none\'">' +
                '<span class="brand-text">Equip Drones</span>' +
                (CONTACT.djiLogo ? '<span class="brand-divider" aria-hidden="true"></span>' +
                '<img class="brand-dji" src="' + esc(CONTACT.djiLogo) + '" alt="DJI" onerror="this.onerror=null;this.style.display=\'none\'">' : '') +
              '</div>' +
              '<p class="small measure" data-i18n="foot.tagline">' + t('foot.tagline') + '</p>' +
              '<div class="socials mt-5">' +
                socialIcon('instagram', CONTACT.instagram, 'Instagram') +
                socialIcon('facebook',  CONTACT.facebook,  'Facebook') +
                socialIcon('linkedin',  CONTACT.linkedin,  'LinkedIn') +
                socialIcon('youtube',   CONTACT.youtube,   'YouTube') +
                socialIcon('whatsapp',  'https://wa.me/' + CONTACT.whatsapp, 'WhatsApp') +
              '</div>' +
            '</div>' +
            '<div>' +
              '<div class="footer-title" data-i18n="foot.nav">' + t('foot.nav') + '</div>' +
              '<div class="footer-list">' + navLinks + '</div>' +
            '</div>' +
            '<div>' +
              '<div class="footer-title" data-i18n="foot.products">' + t('foot.products') + '</div>' +
              '<div class="footer-list">' +
                '<a href="catalogue.html?cat=agriculture" data-i18n="cat.agriculture">' + t('cat.agriculture') + '</a>' +
                '<a href="catalogue.html?cat=enterprise" data-i18n="cat.enterprise">' + t('cat.enterprise') + '</a>' +
                '<a href="comparateur.html" data-i18n="nav.compare">' + t('nav.compare') + '</a>' +
                '<a href="devis.html" data-i18n="cta.quote">' + t('cta.quote') + '</a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<div class="footer-title" data-i18n="foot.contact">' + t('foot.contact') + '</div>' +
              '<div class="footer-list">' +
                '<a href="tel:' + esc(CONTACT.phone) + '">' + esc(CONTACT.phoneLabel) + '</a>' +
                '<a href="https://wa.me/' + esc(CONTACT.whatsapp) + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>' +
                '<a href="mailto:' + esc(CONTACT.email) + '">' + esc(CONTACT.email) + '</a>' +
                '<span>' + esc(CONTACT.company) + '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© ' + year + ' ' + esc(CONTACT.company) + '. <span data-i18n="foot.rights">' + t('foot.rights') + '</span></span>' +
            '<span data-i18n="foot.disclaimer">' + t('foot.disclaimer') + '</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* Image produit avec repli SVG automatique */
  function productImg(p, cls) {
    var fallback = p.imageFallback || 'assets/img/svg/agras-t.svg';
    var src = p.image || fallback;
    return '<img src="' + esc(src) + '" alt="' + esc(p.name) + '" loading="lazy" ' +
           (cls ? 'class="' + esc(cls) + '" ' : '') +
           'onerror="this.onerror=null;this.src=\'' + esc(fallback) + '\'">';
  }

  function badgeHTML(availability) {
    var key = 'avail.' + availability;
    return '<span class="badge badge-' + esc(availability) + '" data-i18n="' + key + '">' + t(key) + '</span>';
  }

  /* Spécifications compactes réservées aux cartes des modèles dans le
     catalogue. Elles restent liées aux données vérifiées de `specs` afin
     d'éviter une seconde source de vérité pour les chiffres publiés. */
  var CATALOGUE_SPECS = [
    {
      key: 'payload',
      icon: 'assets/img/svg_icons/payload.svg',
      label: { fr: 'Charge utile', en: 'Payload' },
      labels: [/^Charge utile de la cuve de pulvérisation$/, /^Charge utile max\./, /^Capacité d’emport$/],
      format: formatWeight
    },
    {
      key: 'flight-time',
      icon: 'assets/img/svg_icons/full_battery.svg',
      label: { fr: 'Autonomie', en: 'Flight time' },
      labels: [/^Autonomie de vol max\./],
      format: formatMinutes
    },
    {
      key: 'spray-radius',
      icon: 'assets/img/svg_icons/spray_nozzle.svg',
      label: { fr: 'Rayon de pulvérisation', en: 'Spraying radius' },
      labels: [/^Largeur de travail en pulvérisation$/],
      format: formatSprayRadius
    }
  ];

  function formatWeight(value) {
    var text = String(value || '').trim();
    var kg = text.match(/^([\d.,]+)\s*kg\b/i);
    var grams = text.match(/^([\d.,]+)\s*g\b/i);

    if (/^—/.test(text) || !text) return '—';
    if (kg) return kg[1] + ' kg';
    if (grams) return String(Number(grams[1].replace(',', '.')) / 1000) + ' kg';
    return '—';
  }

  function formatMinutes(value) {
    var text = String(value || '').trim();
    var minutes = text.match(/^(\d+(?:[.,]\d+)?)\s*(?:min(?:utes?)?)/i);

    if (/^—/.test(text) || !text) return '—';
    return minutes ? minutes[1] + ' min' : '—';
  }

  function formatSprayRadius(value) {
    var text = String(value || '').trim();
    var range = text.match(/^(\d+(?:[.,]\d+)?)\s*(?:-|–)\s*(\d+(?:[.,]\d+)?)\s*m\b/i);

    if (/^—/.test(text) || !text) return '—';
    return range ? range[1] + '–' + range[2] + ' m' : '—';
  }

  function catalogueHighlights(p) {
    if (p.highlights && p.highlights.length > 0) return p.highlights;
    if (p.type !== 'aircraft') return [];

    var rows = (p.specs || []).reduce(function (all, group) {
      return all.concat(group.rows || []);
    }, []);

    return CATALOGUE_SPECS.map(function (spec) {
      var row = rows.find(function (item) {
        var label = item && item.label && item.label.fr;
        return spec.labels.some(function (pattern) { return pattern.test(label || ''); });
      });

      return {
        label: spec.label,
        value: spec.format(row && row.value),
        icon: spec.icon,
        key: spec.key
      };
    });
  }

  function getSpecIcon(label) {
    if (!label) return 'assets/img/svg_icons/payload.svg';
    var l = String(label).toLowerCase();

    // 1. Décollage & Altitude
    if (l.indexOf('altitude max. au décollage') !== -1 || l.indexOf('altitude max. de décollage') !== -1 || l.indexOf('takeoff altitude') !== -1 || l.indexOf('take-off altitude') !== -1) {
      return 'assets/img/svg_icons/max_takeoff_altitude.svg';
    }
    if (l.indexOf('altitude') !== -1 || l.indexOf('plafond') !== -1) {
      return 'assets/img/svg_icons/max_flight_altitude.svg';
    }

    // 2. Masse & Poids
    if (l.indexOf('masse max. au décollage') !== -1 || l.indexOf('masse max. décollage') !== -1 || l.indexOf('masse max') !== -1 || l.indexOf('max takeoff weight') !== -1 || l.indexOf('mtow') !== -1) {
      return 'assets/img/svg_icons/max_takeoff_weight.svg';
    }
    if (l.indexOf('charge') !== -1 || l.indexOf('payload') !== -1 || l.indexOf('cuve') !== -1 || l.indexOf('tank') !== -1 || l.indexOf('masse') !== -1 || l.indexOf('poids') !== -1 || l.indexOf('emport') !== -1 || l.indexOf('weight') !== -1) {
      return 'assets/img/svg_icons/payload.svg';
    }

    // 3. Autonomie & Batterie
    if (l.indexOf('autonomie') !== -1 || l.indexOf('flight time') !== -1 || l.indexOf('hover time') !== -1 || l.indexOf('autonomy') !== -1 || l.indexOf('batterie') !== -1 || l.indexOf('battery') !== -1 || l.indexOf('operating time') !== -1) {
      return 'assets/img/svg_icons/full_battery.svg';
    }

    // 4. Pulvérisation & Épandage
    if (l.indexOf('largeur') !== -1 || l.indexOf('spray width') !== -1 || l.indexOf('width') !== -1) {
      return 'assets/img/svg_icons/spray_width_1.svg';
    }
    if (l.indexOf('débit') !== -1 || l.indexOf('spray rate') !== -1 || l.indexOf('flow rate') !== -1 || l.indexOf('buse') !== -1 || l.indexOf('nozzle') !== -1 || l.indexOf('rendement') !== -1 || l.indexOf('trémie') !== -1 || l.indexOf('spreader') !== -1) {
      return 'assets/img/svg_icons/spray_nozzle.svg';
    }

    // 5. Vent & Vitesse
    if (l.indexOf('vent') !== -1 || l.indexOf('wind') !== -1) {
      return 'assets/img/svg_icons/wind_resistance.svg';
    }
    if (l.indexOf('vitesse') !== -1 || l.indexOf('speed') !== -1) {
      return 'assets/img/svg_icons/speed.svg';
    }

    // 6. Navigation, RTK & GNSS
    if (l.indexOf('rtk') !== -1 || l.indexOf('d-rtk') !== -1) {
      return 'assets/img/svg_icons/rtk_antenna.svg';
    }
    if (l.indexOf('gnss') !== -1 || l.indexOf('satellite') !== -1 || l.indexOf('positionnement') !== -1 || l.indexOf('positioning') !== -1) {
      return 'assets/img/svg_icons/sattelite.svg';
    }

    // 7. Radar & LiDAR
    if (l.indexOf('lidar') !== -1) {
      return 'assets/img/svg_icons/lidar.svg';
    }
    if (l.indexOf('radar') !== -1 || l.indexOf('aesa') !== -1) {
      return 'assets/img/svg_icons/radar.svg';
    }
    if (l.indexOf('rayon') !== -1 || l.indexOf('radius') !== -1 || l.indexOf('portée de vol') !== -1 || l.indexOf('flight radius') !== -1 || l.indexOf('flight distance') !== -1 || l.indexOf('flight range') !== -1) {
      return 'assets/img/svg_icons/radar.svg';
    }

    // 8. Télémètre laser
    if (l.indexOf('télémètre') !== -1 || l.indexOf('rangefinder') !== -1 || l.indexOf('laser') !== -1) {
      return 'assets/img/svg_icons/laser_rangefinder.svg';
    }

    // 9. Éclairage, Projecteur & Haut-parleur
    if (l.indexOf('projecteur') !== -1 || l.indexOf('spotlight') !== -1 || l.indexOf('éclairage') !== -1 || l.indexOf('light') !== -1) {
      return 'assets/img/svg_icons/spotlight.svg';
    }
    if (l.indexOf('haut-parleur') !== -1 || l.indexOf('speaker') !== -1 || l.indexOf('loudspeaker') !== -1) {
      return 'assets/img/svg_icons/loudspeaker.svg';
    }

    // 10. Caméras spécifiques
    if (l.indexOf('fpv') !== -1) {
      return 'assets/img/svg_icons/fpv_camera.svg';
    }
    if (l.indexOf('thermique') !== -1 || l.indexOf('thermal') !== -1 || l.indexOf('infrarouge') !== -1 || l.indexOf('infrared') !== -1) {
      return 'assets/img/svg_icons/thermal_camera.svg';
    }
    if (l.indexOf('grand-angle') !== -1 || l.indexOf('wide camera') !== -1 || l.indexOf('wide-angle') !== -1) {
      return 'assets/img/svg_icons/wide_camera.svg';
    }
    if (l.indexOf('téléobjectif') !== -1 || l.indexOf('telephoto') !== -1 || l.indexOf('zoom') !== -1 || l.indexOf('tele camera') !== -1) {
      return 'assets/img/svg_icons/telephoto_camera.svg';
    }

    // 11. Sécurité, Vision & Protection
    if (l.indexOf('détection') !== -1 || l.indexOf('sécurité') !== -1 || l.indexOf('obstacle') !== -1 || l.indexOf('safety') !== -1 || l.indexOf('protection') !== -1 || l.indexOf('immersion') !== -1 || l.indexOf('vision') !== -1 || l.indexOf('évitement') !== -1 || l.indexOf('avoidance') !== -1 || l.indexOf('ip rating') !== -1 || l.indexOf('indice de protection') !== -1) {
      return 'assets/img/svg_icons/shield.svg';
    }

    // 12. Radiocommande & Transmission
    if (l.indexOf('radiocommande') !== -1 || l.indexOf('transmission') !== -1 || l.indexOf('relais') !== -1 || l.indexOf('remote controller') !== -1) {
      return 'assets/img/svg_icons/radio_tower.svg';
    }

    // 13. Autres caméras / capteurs génériques
    if (l.indexOf('capteur') !== -1 || l.indexOf('optique') !== -1 || l.indexOf('caméra') !== -1 || l.indexOf('camera') !== -1 || l.indexOf('vidéo') !== -1 || l.indexOf('photo') !== -1 || l.indexOf('résolution') !== -1 || l.indexOf('multispectral') !== -1 || l.indexOf('nacelle') !== -1 || l.indexOf('gimbal') !== -1) {
      return 'assets/img/svg_icons/simple_camera.svg';
    }

    return 'assets/img/svg_icons/payload.svg';
  }

  function productCardHTML(p) {
    var highlights = catalogueHighlights(p).slice(0, 4).map(function (h) {
      var icon = h.icon || getSpecIcon(L(h.label));
      var hasIcon = Boolean(icon);
      return '<div class="p-card-spec' + (hasIcon ? '' : ' p-card-spec--plain') + '"' +
             (h.key ? ' data-card-spec="' + esc(h.key) + '"' : '') + '>' +
             (hasIcon
               ? '<img class="p-card-spec-icon" src="' + esc(icon) + '" alt="" aria-hidden="true">'
               : '') +
             '<div><div class="p-card-spec-v">' + esc(h.value) + '</div>' +
             '<div class="p-card-spec-l">' + esc(L(h.label)) + '</div></div></div>';
    }).join('');

    var soon = p.availability === 'coming_soon';
    var discontinued = p.availability === 'discontinued';

    var actionBtn = discontinued
      ? '<button type="button" class="btn btn-sm" disabled data-i18n="cta.discontinued">' + t('cta.discontinued') + '</button>'
      : (soon
        ? '<button type="button" class="btn btn-sm" disabled data-i18n="cta.notify">' + t('cta.notify') + '</button>'
        : '<button type="button" class="btn btn-sm btn-primary" data-add="' + esc(p.id) + '" data-i18n="cta.addQuote">' + t('cta.addQuote') + '</button>');

    return '' +
      '<article class="p-card" data-id="' + esc(p.id) + '">' +
        '<a class="p-card-media" href="produit.html?id=' + encodeURIComponent(p.id) + '" tabindex="-1" aria-hidden="true">' +
          productImg(p) +
        '</a>' +
        '<div class="p-card-body">' +
          '<div class="row-between">' +
            '<span class="p-card-cat" data-i18n="cat.' + esc(p.category) + '">' + t('cat.' + p.category) + '</span>' +
            badgeHTML(p.availability) +
          '</div>' +
          '<h3 class="p-card-title">' +
            '<a href="produit.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + '</a>' +
          '</h3>' +
          '<p class="p-card-tagline">' + esc(L(p.tagline)) + '</p>' +
          (highlights ? '<div class="p-card-specs">' + highlights + '</div>' : '') +
          '<div class="p-card-actions">' +
            '<a class="btn btn-sm" href="produit.html?id=' + encodeURIComponent(p.id) + '" data-i18n="cta.details">' + t('cta.details') + '</a>' +
            actionBtn +
          '</div>' +
        '</div>' +
      '</article>';
  }

  var toastTimer = null;
  function toast(msg) {
    var node = document.querySelector('.toast');
    if (!node) {
      node = el('<div class="toast" role="status" aria-live="polite"></div>');
      document.body.appendChild(node);
    }
    node.textContent = msg;
    requestAnimationFrame(function () { node.setAttribute('data-show', 'true'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { node.setAttribute('data-show', 'false'); }, 2600);
  }

  /* 58 wilayas — référence pour le formulaire de devis */
  var WILAYAS = ['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar',
    'Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa',
    'Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa',
    'Mostaganem','M’Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj',
    'Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila',
    'Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar',
    'Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El M’Ghair','El Meniaa'];

  /* ------------------------------------------------------------------ init */
  function mountChrome() {
    var h = document.querySelector('[data-header]');
    if (h) h.innerHTML = headerHTML(h.getAttribute('data-header') || '');

    var f = document.querySelector('[data-footer]');
    if (f) f.innerHTML = footerHTML();

    /* Bascule de langue */
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });

    /* Menu mobile */
    var toggle = document.getElementById('ed-nav-toggle');
    var nav = document.getElementById('ed-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.getAttribute('data-open') === 'true';
        nav.setAttribute('data-open', String(!open));
        toggle.setAttribute('aria-expanded', String(!open));
      });
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          nav.setAttribute('data-open', 'false');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    paintCartBadge();
  }

  /* Délégation globale : tout bouton [data-add] ajoute au devis */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-add]');
    if (!btn) return;
    var id = btn.getAttribute('data-add');
    var p = data.byId(id);
    if (!p || p.availability === 'discontinued') return;
    var qtyInput = document.querySelector('[data-qty-for="' + id + '"]');
    var qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
    cart.add(id, qty);
    toast(t('cta.added') + ' — ' + p.name);
  });

  function boot() {
    mountChrome();
    applyI18n(document);
    document.dispatchEvent(new CustomEvent('ed:ready'));
  }

  /* Re-traduit le chrome à chaque changement de langue */
  document.addEventListener('ed:langchange', function () {
    var h = document.querySelector('[data-header]');
    if (h) h.innerHTML = headerHTML(h.getAttribute('data-header') || '');
    var f = document.querySelector('[data-footer]');
    if (f) f.innerHTML = footerHTML();
    mountChrome();
    applyI18n(document);
  });

  /* ------------------------------------------------------------- export */
  window.ED = {
    data: data,
    cart: cart,
    contact: CONTACT,
    wilayas: WILAYAS,
    i18n: {
      t: t,
      L: L,
      lang: function () { return currentLang; },
      setLang: setLang,
      apply: applyI18n
    },
    ui: {
      header: headerHTML,
      footer: footerHTML,
      productCard: productCardHTML,
      badge: badgeHTML,
      img: productImg,
      getSpecIcon: getSpecIcon,
      toast: toast,
      esc: esc,
      qs: qs,
      el: el
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
