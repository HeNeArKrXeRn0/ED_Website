# Equip Drones — Site Redesign (v0)

**Date:** 2026-08-06
**Status:** Approved for implementation
**Replaces:** https://equipdrones.carrd.co/

---

## 1. Context

SARL Equip Drones is the official, exclusive DJI distributor in Algeria, focused on
agricultural drones. Their current site is a single-scroll Carrd page with generic copy,
no product listings, no specifications, and no way to request a quote beyond a phone
number.

The business already holds two strong trust signals that the current site buries:

- Official, exclusive DJI distributor for Algeria.
- *"Première compagnie algérienne en partenariat avec DJI et agréée par le Centre
  National des Systèmes d'Aéronefs Sans Pilote à bord."*

Both belong near the top of the homepage.

### Goal

A multi-page site that presents a real DJI industrial drone catalogue with published
specifications, explains what each aircraft is used for, shows stock availability, and
lets a buyer assemble and submit a quote request for specific models and quantities.

### Non-goals for v0

- No prices anywhere. The entire commercial flow is quote-only.
- No real database. Availability is hardcoded and clearly marked fake.
- No server, no build step, no package manager, no accounts.
- No CMS. Product data is edited by hand in one JavaScript file.

---

## 2. Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Stack | Static HTML + CSS + vanilla JS, zero build step | Owner can edit and host anywhere; no Node required |
| Language | French primary, EN toggle | French is the business language in Algeria |
| Catalogue scope | Agriculture + Enterprise aircraft; payloads as add-ons | Matches what the distributor actually sells |
| Quote submission | WhatsApp deep link + `mailto:` fallback | Works day one, no signup, matches local business practice |
| Product imagery | Hotlink DJI CDN, SVG fallback | Proof-of-concept decision by the owner; see §9 |
| Visual direction | Dark technical premium | Reads as industrial equipment, not a hobby shop |

---

## 3. Architecture

```
C:\Users\cyril\equipedrones\
  index.html            Accueil
  catalogue.html        Grille filtrable
  produit.html          Fiche produit (template, ?id=t50)
  comparateur.html      Comparaison 2 à 4 modèles
  applications.html     Secteurs d'application
  services.html         Formation / SAV / pièces / conseil
  a-propos.html         Société, accréditations, contact
  devis.html            Panier + formulaire de devis
  assets/
    css/site.css        Design system + all page styles
    js/data.js          SOURCE OF TRUTH: products, specs, availability, images
    js/i18n.js          FR/EN dictionary
    js/app.js           Shared: header/footer render, lang toggle, quote cart
    js/catalogue.js     Catalogue filtering + rendering
    js/produit.js       Product detail rendering
    js/comparateur.js   Comparison table
    js/devis.js         Quote cart + form + WhatsApp/mailto submission
    img/                Logo, generated SVG fallbacks, favicon
  docs/superpowers/
    specs/  plans/
```

### Data flow

```
data.js  ──►  catalogue.js  ──►  catalogue.html   (grid, filters)
   │
   ├────────► produit.js    ──►  produit.html     (?id= lookup)
   ├────────► comparateur.js──►  comparateur.html (?ids=t50,t70p)
   └────────► devis.js      ──►  devis.html       (cart lines)

app.js  ──► localStorage: `ed_cart` (quote lines), `ed_lang` (fr|en)
```

Every page loads, in order: `data.js`, `i18n.js`, `app.js`, then its own page script.
No module system, no bundler — plain `<script>` tags and global namespaces
(`window.ED.data`, `window.ED.i18n`, `window.ED.cart`).

### Why a single `produit.html` template

Fourteen hand-maintained product pages would drift apart within a month. One template
reading `?id=` from `data.js` means adding a product is a single object literal.

Known tradeoff: query-string pages index worse than real paths. Acceptable for v0. The
migration path is a static-generation step later, and the data model does not change.

---

## 4. Product catalogue

### 4.1 Agriculture (7 aircraft)

| id | Product | Role |
|---|---|---|
| `t55` | DJI Agras T55 | Flagship high-capacity spraying/spreading |
| `t100` | DJI Agras T100 | Heavy-lift spraying, spreading and transport |
| `t70p` | DJI Agras T70P | High-throughput spraying |
| `t50` | DJI Agras T50 | Workhorse mid-large operations |
| `t25p` | DJI Agras T25P | Compact, orchards and small plots |
| `t25` | DJI Agras T25 | Entry compact sprayer |
| `mavic-3m` | DJI Mavic 3 Multispectral | Crop mapping, NDVI, prescription maps |

### 4.2 Enterprise (7 aircraft)

| id | Product | Role |
|---|---|---|
| `matrice-400` | DJI Matrice 400 | Long-endurance heavy-payload platform |
| `matrice-4e` | DJI Matrice 4E | Survey and mapping |
| `matrice-4t` | DJI Matrice 4T | Thermal inspection and public safety |
| `matrice-350-rtk` | DJI Matrice 350 RTK | Multi-payload industrial workhorse |
| `mavic-3e` | DJI Mavic 3E | Compact photogrammetry |
| `mavic-3t` | DJI Mavic 3T | Compact thermal |
| `dock-3` | DJI Dock 3 | Automated, unattended recurring missions |

### 4.3 Payloads (add-ons, not standalone cards)

`zenmuse-h30t`, `zenmuse-h20n`, `zenmuse-l2`, `zenmuse-p1`, `d-rtk-3`.

These render as a selectable "Accessoires et charges utiles compatibles" block on
compatible enterprise product pages, and can be added to the quote cart with a quantity.
They do not appear in the main catalogue grid and are excluded from the comparator.

### 4.4 Product data model

```js
{
  id: 't50',
  name: 'DJI Agras T50',
  category: 'agriculture',            // 'agriculture' | 'enterprise'
  type: 'aircraft',                   // 'aircraft' | 'payload'
  tagline: { fr: '...', en: '...' },  // one line, under the name
  usage:   { fr: '...', en: '...' },  // ~60 words: what it is actually used for
  useCases: ['cereales', 'vergers'],  // keys into the applications page
  highlights: [                       // 3-4 headline figures for the card
    { label: {fr,en}, value: '40 L' }
  ],
  specs: [                            // full table, DJI's published figures
    { group: {fr,en}, rows: [ { label:{fr,en}, value:'...' } ] }
  ],
  compatiblePayloads: ['zenmuse-h30t'],
  availability: 'in_stock',           // FAKE — see §6
  image: 'https://...',               // DJI CDN URL
  imageFallback: 'assets/img/svg/agras-t.svg',
  djiUrl: 'https://ag.dji.com/t50'
}
```

**Specification integrity rule:** every value in `specs` is copied from DJI's own
published specification tables. Where DJI publishes no figure, the value is the literal
string `"—"`. Estimating or inferring a specification is prohibited — a wrong payload
capacity in a quote request is a commercial problem, not a cosmetic one.

---

## 5. Pages

### 5.1 `index.html` — Accueil

1. **Hero** — dark, oversized headline, thin mono eyebrow `DISTRIBUTEUR OFFICIEL DJI —
   ALGÉRIE`, two CTAs (`Demander un devis`, `Voir le catalogue`), drone image.
2. **Trust bar** — 4 hard figures in a bordered strip (accreditation, exclusive
   distributor, 500M ha treated worldwide, ~300 000 units operating).
3. **Accreditation callout** — the CNSASPB line, given real weight.
4. **Catalogue teaser** — 6 featured products as cards, link to full catalogue.
5. **Applications** — 4-6 sector tiles linking into `applications.html`.
6. **Services** — the four services with one line each, linking to `services.html`.
7. **CTA band** — quote + WhatsApp.
8. **Footer** — socials, contact, legal.

### 5.2 `catalogue.html`

Responsive card grid. Filters (client-side, no reload): category (Agriculture /
Enterprise / Tout), application sector, availability. Sort by name. Each card shows
image, name, tagline, 3 highlight figures, availability badge, `Détails` and
`+ Devis`. Empty-state message when filters match nothing.

### 5.3 `produit.html?id=<id>`

Two-column hero (image left, identity right: name, tagline, availability badge,
quantity + `Ajouter au devis`, `Fiche DJI officielle` outbound link). Below: the
~60-word usage paragraph, highlight figures, grouped specification table, compatible
payloads block, related products, CTA band.

Invalid or missing `?id=` renders a "produit introuvable" state with a link back to the
catalogue — it must not render a blank page or throw.

### 5.4 `comparateur.html`

Pick 2-4 aircraft from dropdowns (state in `?ids=`). Renders a transposed table: spec
labels down the left, one column per selected drone. Rows where all values are identical
are de-emphasised so differences stand out. `Ajouter au devis` under each column.

### 5.5 `applications.html`

Sector-by-sector: céréaliculture, palmeraies/vergers, viticulture, maraîchage sous
serre, inspection de réseaux et pipelines, topographie et cadastre. Each: what the
problem is, how a drone addresses it, and the recommended models linked by id.

### 5.6 `services.html`

Expands the four services the current site only name-drops: vente et conseil,
formation et certification de pilotes, SAV / maintenance / réparation, pièces
détachées. Each with real substance and a contact CTA.

### 5.7 `a-propos.html`

Company story, the DJI partnership and CNSASPB accreditation, contact block (phone,
WhatsApp, email, socials), and a contact form that uses the same WhatsApp/mailto
submission mechanism as the quote page.

### 5.8 `devis.html`

The quote cart and form. See §7.

---

## 6. Availability (faked)

Three states, one `availability` field per product:

| Value | FR label | Colour | Behaviour |
|---|---|---|---|
| `in_stock` | En stock | green | Quote enabled |
| `on_order` | Sur commande — 4 à 6 semaines | amber | Quote enabled |
| `coming_soon` | Bientôt disponible | grey | Add-to-quote disabled, `Me prévenir` instead |

All values are invented. The `availability` block in `data.js` carries a
`// FAKE DATA — replace with a real stock feed` comment. Labels come from `i18n.js`, so
swapping in a live source only changes the field values, never the rendering.

---

## 7. Quote flow

A persistent **quote cart**, not a single-shot form — the requirement is "which drones
they want and how many", which implies multiple line items.

1. `Ajouter au devis` on any product or payload writes `{id, qty}` into
   `localStorage.ed_cart`.
2. The header shows a live count badge.
3. `devis.html` lists each line with a thumbnail, name, availability, quantity stepper
   and remove control. Empty cart shows a prompt back to the catalogue — the form still
   works, since a buyer may want a general enquiry.
4. Contact fields: nom complet*, société / exploitation, email*, téléphone*, wilaya
   (select, 58 wilayas), type d'activité, superficie à traiter, message.
   Required fields marked `*`; HTML5 validation plus a JS guard.
5. Submit builds one formatted plain-text message containing the contact block and the
   itemised list, then offers:
   - **WhatsApp** (primary) — `https://wa.me/213661936666?text=<encoded>`
   - **Email** (fallback) — `mailto:info@equipdrones.com?subject=...&body=<encoded>`
6. A confirmation panel replaces the form, with a copy-to-clipboard of the message text
   so nothing is lost if the handoff fails.

No data leaves the browser except through the user's own WhatsApp or mail client. There
is no backend to secure, and no personal data is stored anywhere but the user's device.

---

## 8. Internationalisation

- Every translatable node carries `data-i18n="key"`; `i18n.js` holds `{ key: {fr, en} }`.
- Product `tagline`, `usage` and spec labels are bilingual in `data.js`; spec *values*
  (numbers and units) are language-neutral and not duplicated.
- Toggle in the header, persisted to `localStorage.ed_lang`, applied on `DOMContentLoaded`
  before first paint of dynamic content.
- French is both default and fallback: a missing `en` value renders the `fr` string
  rather than the raw key.
- `<html lang>` is updated on toggle.

Known tradeoff: translation is client-side, so search engines index the French only.
Accepted for v0; the fix is `/en/` static output later, which does not change the data
model.

---

## 9. Assets carried over from the existing site

Reused verbatim, not reinvented:

- Logo: `https://equipdrones.carrd.co/assets/images/image04.png`
- Instagram `https://www.instagram.com/equip_drones/`
- Facebook `https://www.facebook.com/profile.php?id=61571771371833`
- LinkedIn `https://www.linkedin.com/company/equip-drones/`
- YouTube `https://www.youtube.com/@equip_drones_algeria`
- WhatsApp `https://wa.me/+213661936666`, phone `tel:+213661936666`
- Email `info@equipdrones.com` (decoded from the Cloudflare-obfuscated link)
- Existing French copy: the 500M-hectares statistic, the versatility paragraph, and the
  CNSASPB accreditation sentence.

### Product imagery

DJI CDN URLs are hotlinked, per an explicit proof-of-concept decision by the owner. This
is understood to be a temporary arrangement, not a shipping position:

- Every image is a single `image` field per product — replacing one with an owned photo
  is a one-line edit.
- Every product also carries `imageFallback`, a locally generated SVG silhouette by
  airframe family (T-series sprayer, quad Matrice, folding Mavic, dock, gimbal payload).
- `onerror` on every `<img>` swaps to the SVG, so a rotated or blocked DJI URL degrades
  to a clean illustration rather than a broken-image icon.
- Any product for which no clean CDN URL could be extracted ships with the SVG as its
  primary image, and is listed in the build report.

---

## 10. Visual design system

Dark technical premium.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0B0D` | Page |
| `--surface` | `#131519` | Cards |
| `--surface-2` | `#1C1F25` | Raised / hover |
| `--border` | `#2A2E36` | Hairlines |
| `--text` | `#F2F4F7` | Primary |
| `--muted` | `#8A93A3` | Secondary |
| `--accent` | `#00E08A` | CTAs, active states |
| `--warn` | `#FFB020` | On-order badge |
| `--ok` | `#00C46A` | In-stock badge |

- **Type:** system UI stack for body; a monospace stack for eyebrows, spec values and
  numeric data. Headline scale is fluid via `clamp()`.
- **Layout:** 1280px max width, 12-column CSS grid, 8px spacing scale.
- **Motif:** thin 1px hairline rules, mono uppercase micro-labels with letter-spacing,
  bordered spec strips, generous negative space, one accent colour used sparingly.
- **Motion:** transitions capped at 200ms; all animation disabled under
  `prefers-reduced-motion`.
- **Responsive:** single breakpoint set at 640 / 900 / 1200px. Mobile-first; the
  catalogue grid collapses 4 → 2 → 1.
- **Accessibility:** AA contrast on all text, visible focus rings, semantic landmarks,
  alt text on every image, keyboard-operable filters and quantity steppers, form labels
  bound to inputs.

---

## 11. Verification

The site is static and has no test runner. v0 is considered done when:

1. Every page opens directly from the filesystem in a browser with no console errors.
2. Every internal link resolves; no 404s between pages.
3. `produit.html` renders correctly for all 14 aircraft ids, and degrades gracefully for
   an unknown id.
4. Adding items from three different pages produces one correct, deduplicated cart that
   survives a reload.
5. The generated WhatsApp URL and `mailto:` URL both contain the full itemised list and
   all contact fields, correctly percent-encoded.
6. The FR/EN toggle updates every visible string on every page and persists across
   navigation.
7. The comparator renders 2, 3 and 4 columns without horizontal overflow on mobile.
8. Layout holds at 360px, 768px and 1440px widths.
9. Every specification value traces to a DJI source URL, or is `"—"`.

---

## 12. Known limitations of v0

- Availability data is fabricated.
- Quote submissions are not persisted anywhere — they depend on the user completing the
  WhatsApp or email handoff.
- English translation is client-side and therefore not indexed.
- Product images are hotlinked from DJI and are not licensed for redistribution.
- No analytics, no cookie banner, no legal or privacy pages.
