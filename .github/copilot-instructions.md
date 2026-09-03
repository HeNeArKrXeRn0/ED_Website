# Equip Drones Website — Copilot Instructions

This is a **static website** for Equip Drones (DJI's official distributor in Algeria). There is no build step, framework, package manager, or CMS. The stack is vanilla HTML, CSS, and JavaScript running on every page.

Read the authoritative [MASTER_PLAN.md](../MASTER_PLAN.md) before making changes to understand the product model, inventory, and quality checklist.

## Quick Start

```bash
python -m http.server 8000
# Open http://localhost:8000
```

Opening `index.html` directly also works; URL parameters gracefully degrade on `file://` protocol.

**Do not introduce a build step, bundler, or framework** unless the requested work explicitly changes this constraint.

## Architecture & Shared Runtime

The site exports `window.ED` from `app.js` — all page scripts must consume it, not replace it.

```js
ED.data     // products, filters, helpers: aircraft(), payloads(), bySector()
ED.cart     // items, count, add, setQty, remove, clear, and change listener
ED.i18n     // t(), L() bilingual resolver, lang, setLang, apply()
ED.ui       // header, footer, productCard, badge, img, toast, esc, qs, el helpers
ED.contact  // company/social data
ED.wilayas  // 58 wilayas for quote form
```

### Script Load Order (Critical)

Every page must load scripts in this order or features will break:

1. `assets/js/data.js` — catalogue, contacts, photos
2. `assets/js/i18n.js` — translation dictionary
3. `assets/js/app.js` — shared chrome, runtime, event delegation
4. Page-specific script (e.g., `assets/js/produit.js`, `catalogue.js`)
5. Inline page script (if needed)
6. `assets/js/motion.js` — scroll reveals, counters, parallax

### Key Events

- `ed:ready` — fires after shared chrome and initial translations are mounted
- `ed:langchange` — fires after FR/EN toggle; page scripts should rerender dynamic content
- `ed:cartchange` — fires after any cart write; cart persists to `localStorage` as `ed_cart`

## Data: Products & Catalogue

**Single source of truth:** `assets/js/data.js`

### Product Shape

```js
{
  id,                           // unique once per product, never reused
  name,                         // model name
  category,                     // "Agriculture" | "Enterprise"
  type,                         // "aircraft" | "payload"
  tagline: { fr, en },         // short description
  usage: { fr, en },           // how it's used
  useCases: [],                // array of sector IDs
  highlights: [],              // key features
  specs: [{
    group: { fr, en },
    rows: [{ label: { fr, en }, value: "spec value or —" }]
  }],
  compatiblePayloads: [],      // array of payload IDs
  availability,                // "in_stock" | "on_order" | "coming_soon"
  image,                       // local PNG path
  imageFallback,               // local SVG fallback
  djiUrl                       // official DJI link
}
```

**Rules:**
- Specification values must be from published DJI documentation or `—` (not inferred/rounded)
- Use `id` exactly once in `data.js`, then reference it everywhere (featured lists, recommended, compatibility)
- Products with `availability: "coming_soon"` must never render an enabled add-to-quote button
- Accepted availability values: `in_stock`, `on_order`, `coming_soon` — others will break UI and must be added to `i18n.js` and `app.js` first

### Current Inventory

- **Aircraft** (14): T55, T100, T70P, T50, T25P, T25, Mavic 3 Multispectral, Matrice 400, Matrice 4E/4T, Matrice 350 RTK, Mavic 3E/3T, Dock 3
- **Payloads** (5): Zenmuse H30T, H20N, L2, P1; D-RTK 3
- Aircraft appear in catalogue, comparator, and featured lists; payloads appear only in payloads grid and compatible accessories sections

## Translation & UI Text

### Adding UI Text

1. Add an FR/EN entry to `assets/js/i18n.js`
2. Apply it with `data-i18n="key"` (for text) or `data-i18n-attr="attr:key"` (for attributes)
3. The translation system will apply automatically after `ed:ready` and on `ed:langchange`

### Editorial Content

Long-form HTML on home, services, applications, and about pages is currently French-only (not auto-translated). Complete English coverage is a P1 feature. Product prose like `tagline`, `usage`, and spec labels must be bilingual.

## Common Tasks

### Add a New Product

1. Add an object to `ED_PRODUCTS` in `assets/js/data.js` with a unique `id`
2. Add product image PNG to `assets/img/products/`
3. Add fallback SVG to `assets/img/svg/`
4. If it has new use cases or sectors, add i18n keys to `assets/js/i18n.js`
5. Update compatibility on related products (e.g., `compatiblePayloads` for aircraft)
6. If it's featured, add its `id` to the home page inline script
7. If it's newly recommended, update the `PREFERRED` object in `applications.html`

### Update Availability

Edit `availability` in `assets/js/data.js` for an existing product. No other changes needed for status changes.

### Add a New Translation Key

1. Add `key: { fr: "Français", en: "English" }` to the dictionary in `assets/js/i18n.js`
2. Apply it with `data-i18n="key"` in your HTML

### Add a New Page

1. Create `page-name.html` with the standard structure:
   - Include all scripts in the correct load order
   - Add `data-header="page-name"` and `data-footer` to mount shared chrome
   - Add page-specific script if needed
2. Create `assets/js/page-name.js` if it needs interactive behavior
3. Update navigation in `app.js` if the page should appear in the main nav
4. Update MASTER_PLAN.md site map

## Styling & Theme Configuration

All styles live in **one file:** `assets/css/site.css`

The design system uses:
- Responsive grid breakpoints at 1200 px, 900 px, 640 px
- Dark technical visual style
- `prefers-reduced-motion` and print-friendly rules
- Reusable component classes

### Customizing Colors & Visual Parameters

**Theme parameters are configured in `assets/js/theme-config.js`** — edit this file to change the color palette, spacing, typography, shadows, and transitions site-wide without touching CSS.

```js
// In theme-config.js, edit the THEME object:
const THEME = {
  colors: {
    primary: '#0A0B0D',     // Main background
    accent: '#00E08A',      // Highlights, CTAs
    text: '#F2F4F7',        // Primary text
    error: '#FF5A5A',       // Error states
    // ... add more as needed
  },
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    // ... more sizes
  },
  // typography, shadows, radius, transitions, etc.
};
```

Changes in `theme-config.js` propagate to CSS custom properties and apply across the entire site. The variables are mapped to `:root` in `site.css`, so CSS can reference them:

```css
button { background: var(--color-accent); }
```

Before adding new CSS:
1. Check if an existing class or theme variable solves it (scan `site.css`)
2. If genuinely new, add it coherently in `site.css` and document it here
3. Do not scatter inline styles or page-specific `<style>` blocks
4. For new semantic values (e.g., a new status color), add them to `theme-config.js` first

## Quality Checklist

Before calling work done:

1. **No console errors** on any of the eight main pages
2. **Product details** — load all 14 aircraft + 5 payloads + an invalid ID (should show safe not-found)
3. **Cart persistence** — add items from different pages, change qty, reload browser; items should persist
4. **Deep links** — test `?cat=`, `?secteur=`, `?dispo=` on catalogue and `?ids=` on comparator
5. **Forms** — quote cart form and about-page contact form; valid/invalid states; generated WhatsApp/mailto URLs
6. **Language toggle** — FR/EN across pages with dynamic content; document any intentional French-only sections
7. **Responsive** — test at 360 px, 768 px, 1440 px widths; keyboard navigation; reduced-motion preference
8. **Outbound links** — spot-check DJI, WhatsApp, social, phone, and email links are valid

## After You Change Things

Update **MASTER_PLAN.md** with:

- Affected sections (e.g., if you added a product, update section 5; if you changed styling, update section 6)
- Change log entry (date, summary, notes)
- Any implications for the backlog

This keeps the handoff accurate for the next agent.

## Do Not

- Introduce a build step, bundler, package manager, or framework
- Break the script load order on any page
- Add a product `id` more than once in `data.js`
- Invent new `availability` values without updating `i18n.js` and `app.js`
- Put styling outside `assets/css/site.css`
- Use `localStorage` keys other than `ed_lang` and `ed_cart`
- Auto-translate French editorial prose; add intentional bilingual keys instead

## Key Paths

| Path | Purpose |
|---|---|
| `assets/js/data.js` | Catalogue & contacts; source of truth. Contains `ED_CONTACT` (logo, email, phone, social) and `ED_PHOTOS` (ambient images) |
| `assets/js/theme-config.js` | Theme configuration; colors, spacing, typography, shadows, transitions |
| `assets/js/app.js` | Shared chrome, runtime, `window.ED`, event delegation |
| `assets/js/i18n.js` | FR/EN translation dictionary |
| `assets/js/motion.js` | Scroll reveals, parallax, animations |
| `assets/css/site.css` | All styling; design system |
| `*.html` | One per page; include all scripts in order |
| `assets/img/svg/` | Logo and SVG fallbacks; Logo.svg is the company logo used site-wide |
| `assets/img/products/` | Product PNGs |
| `assets/img/photos/` | Ambient/editorial photos |
| `assets/img/svg/` | SVG fallbacks and icons |
| `MASTER_PLAN.md` | Living handoff; inventory, rules, backlog, changelog |

## Reference

- **MASTER_PLAN.md** — authoritative inventory, quality checks, backlog, and change-management checklist
- **IMPLEMENTATION_PLAN.md** — historical future plans (not current state)
- **Design docs** — `docs/superpowers/specs/` and `docs/superpowers/plans/` (design rationale only; resolve conflicts in favor of current implementation)
