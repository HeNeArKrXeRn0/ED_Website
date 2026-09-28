# Equip Drones Website — Copilot Instructions

Static site: vanilla HTML, CSS, and JavaScript. No build step, bundler, framework, package manager, or CMS. Do not introduce one unless the requested work explicitly changes this constraint.

Single source of truth: [`MASTER_PLAN.md`](../MASTER_PLAN.md) — product and service scope, catalogue inventory and data rules (§5), roadmap, and change checklist. Read it before changing the site. This file covers only the runtime contract below; do not duplicate inventory or roadmap content here.

For every change involving visitor-facing copy, apply [the bilingual copy skill](../.agents/skills/ed-website-bilingual-copy/SKILL.md) in the same task (see `AGENTS.md`). Run `node --test tests/i18n.test.cjs` and `git diff --check` before finishing.

## Runtime contract

The site exports `window.ED` from `assets/js/app.js` — page scripts must consume it, not replace it.

```js
ED.data     // products, filters, helpers: aircraft(), payloads(), bySector()
ED.cart     // items, count, add, setQty, remove, clear, and change listener
ED.i18n     // t(), L() bilingual resolver, lang, setLang, apply()
ED.ui       // header, footer, productCard, badge, img, toast, esc, qs, el helpers
ED.contact  // company/social data
ED.wilayas  // 58 wilayas for quote form
```

### Script load order (critical)

Every page must load scripts in this order or features will break:

1. `assets/js/theme-config.js` — design tokens, must come first
2. `assets/js/data.js` — catalogue, contacts, photos
3. `assets/js/i18n.js` — translation dictionary
4. `assets/js/app.js` — shared chrome, runtime, event delegation
5. Page-specific script (e.g. `assets/js/produit.js`, `catalogue.js`) and inline page script (if needed)
6. `assets/js/motion.js` — scroll reveals, counters, parallax

### Key events and storage

- `ed:ready` — fires after shared chrome and initial translations are mounted
- `ed:langchange` — fires after FR/EN toggle; page scripts should rerender dynamic content
- `ed:cartchange` — fires after any cart write
- `localStorage` keys: `ed_lang` and `ed_cart` only

## Do not

- Introduce a build step, bundler, package manager, or framework
- Break the script load order on any page
- Add a product `id` more than once in `data.js`
- Invent new `availability` values without updating `i18n.js` (`avail.*`), `app.js` (badge and quote rule), and `site.css` (badge style) first
- Put styling outside `assets/css/site.css`
- Use `localStorage` keys other than `ed_lang` and `ed_cart`
- Auto-translate French editorial prose; add intentional bilingual keys instead
