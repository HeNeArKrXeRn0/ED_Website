# Implementation Plan — Equip Drones v0

**Spec:** `docs/superpowers/specs/2026-08-06-equipdrones-site-design.md`
**Date:** 2026-08-06
**Execution model:** foundation built serially, then pages fanned out to parallel subagents.

---

## Why this order

Page-builder agents working in parallel will produce incoherent output unless the design
system, the data, and the shared runtime already exist and are frozen. So:

- **Phase 0-2 are serial and owned by the lead.** They define every CSS class, every
  data field and every global function the page agents are allowed to use.
- **Phase 3 is parallel.** Each agent owns a disjoint set of files and may not touch
  another agent's files, `site.css`, `data.js`, `i18n.js` or `app.js`.
- **Phase 4 is serial verification** by the lead.

File ownership is the concurrency control. There is no shared mutable state between
Phase 3 agents.

---

## Phase 0 — Research (parallel, running)

| Agent | Output | Purpose |
|---|---|---|
| DJI Agriculture | `scratchpad/dji-agriculture.json` | Specs + CDN image URLs, 7 aircraft |
| DJI Enterprise | `scratchpad/dji-enterprise.json` | Specs + CDN image URLs, 7 aircraft + 5 payloads |
| Carrd extraction | `scratchpad/carrd-assets.md` | Verbatim French copy, asset URLs, socials |

**Verify:** all three files exist and parse; every product has either a verified image
URL or an explicit `not-found`.

---

## Phase 1 — Design system (serial, lead)

**File:** `assets/css/site.css`

Complete token set and every component class the page agents will reference. This file
is written once and then treated as frozen — Phase 3 agents consume classes, they do not
add CSS.

Components: header/nav/lang-toggle/cart-badge, footer, buttons, eyebrow labels, hero,
stat strip, product card, availability badge, spec table, filter bar, forms, quantity
stepper, comparator table, section header, CTA band, utilities.

**Verify:** file loads standalone; no `@import`; no external font or asset requests;
`prefers-reduced-motion` block present; AA contrast on `--text`/`--muted` over `--bg`.

---

## Phase 2 — Data and runtime (serial, lead)

### 2a. `assets/js/data.js`

Built from the Phase 0 research. 14 aircraft + 5 payloads in the §4.4 schema. Carries
`window.ED.data.products` and lookup helpers.

**Rules:** every spec value traces to a DJI source or is `"—"`. Availability values
carry a `// FAKE DATA` comment. Every product has `image` and `imageFallback`.

**Verify:** loads with no error; `products.length === 19`; every `id` unique; every
`compatiblePayloads` entry resolves to a real payload id; no `undefined` in any spec.

### 2b. `assets/js/i18n.js`

FR/EN dictionary for all chrome, labels, section headings, form labels and error
messages. French is default and fallback.

**Verify:** every key has a `fr`; missing `en` falls back to `fr` rather than the key.

### 2c. `assets/js/app.js`

Shared runtime, exposing exactly this contract to page scripts:

```js
window.ED = {
  data:   { products, byId(id), byCategory(cat), aircraft(), payloads() },
  i18n:   { t(key), lang(), setLang(l), apply(root) },
  cart:   { items(), add(id, qty), setQty(id, qty), remove(id), clear(), count(), on(fn) },
  ui:     { header(active), footer(), productCard(p), badge(availability),
            img(product), money: null, qs(name) }
}
```

Also: renders shared header/footer into `[data-header]`/`[data-footer]`, wires the
language toggle, keeps the cart badge live, and installs the global `<img> onerror`
SVG-fallback handler.

**Verify:** cart round-trips through `localStorage.ed_cart`; language persists across a
reload; `ED.ui.header()` marks the correct nav item active.

### 2d. `assets/img/svg/*.svg`

Five silhouettes: `agras-t`, `matrice-quad`, `mavic-fold`, `dock`, `payload-gimbal`.
Monochrome, inherit `--muted`, viewBox-scaled.

---

## Phase 3 — Pages (parallel subagents, disjoint file ownership)

Every agent receives: the spec, the frozen `site.css` class list, the `ED` contract, and
a hard instruction not to modify shared files.

| # | Agent | Owns |
|---|---|---|
| 1 | Accueil | `index.html` |
| 2 | Catalogue | `catalogue.html`, `assets/js/catalogue.js` |
| 3 | Fiche produit | `produit.html`, `assets/js/produit.js` |
| 4 | Devis | `devis.html`, `assets/js/devis.js` |
| 5 | Comparateur | `comparateur.html`, `assets/js/comparateur.js` |
| 6 | Contenu éditorial | `applications.html`, `services.html`, `a-propos.html` |

**Per-agent verification:** page opens from the filesystem with zero console errors,
uses only existing `site.css` classes and the `ED` contract, all copy in French with
`data-i18n` keys, responsive at 360 / 768 / 1440.

---

## Phase 4 — Integration and verification (serial, lead)

Run the §11 checklist:

1. All 8 pages open with no console errors.
2. Every internal link resolves.
3. `produit.html?id=<id>` renders for all 14 aircraft ids; unknown id degrades cleanly.
4. Cart accumulates correctly from 3 different pages and survives reload.
5. WhatsApp and `mailto:` URLs contain the full itemised list, correctly encoded.
6. FR/EN toggle updates every visible string on every page and persists.
7. Comparator renders 2-4 columns with no mobile overflow.
8. Layout holds at 360 / 768 / 1440.
9. Every spec value traces to DJI or is `"—"`.

Then: `README.md` documenting how to edit products, change availability, swap images and
publish; and a build report listing which products fell back to SVG.

---

## Out of scope for v0

Prices, real stock feed, backend, CMS, analytics, cookie banner, legal pages,
server-side i18n, `/en/` static output.
