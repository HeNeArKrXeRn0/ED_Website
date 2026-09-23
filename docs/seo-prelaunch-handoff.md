# Equip Drones — Pre-launch SEO Handoff Plan

**Created:** 2026-09-22  
**Status:** Planning only — no SEO implementation has been applied by this plan.  
**Audience:** A coding agent continuing work in this repository before the public launch.

## 1. Objective

Prepare the static Equip Drones website for indexable, shareable, measurable French and English search visibility without changing the project's architecture (vanilla HTML/CSS/JavaScript; no framework, package manager, or runtime server).

The implementation must be ready for production while keeping all domain-dependent values and external-account actions deferred until the owner provides the final public domain, host, and confirmed company details.

## 2. Current verified state

Audit performed locally on 2026-09-22:

- The working tree was clean and synchronized with `origin/main` at `40e91b5`.
- `node --test tests/i18n.test.cjs` passed all 7 tests.
- Core public pages have French default `<title>`, an `<h1>`, and most have a bilingual meta description.
- `produit.html` and `comparateur.html` have titles but no meta descriptions.
- No canonical links, Open Graph/Twitter metadata, JSON-LD, `robots.txt`, `sitemap.xml`, or hosting-header configuration were found.
- Product details use one JavaScript template, `produit.html?id=<id>`. The current catalogue source contains 38 product records in `assets/js/data.js`.
- French/English switching is client-side and persisted in `localStorage`; there are no language-specific URLs or `hreflang` annotations.
- The RFQ experience remains client-side WhatsApp/email handoff. Secure server-side submission is separately planned and remains a launch blocker.
- Case studies, news, legal notices, and privacy pages remain unimplemented.

The repository's authoritative product and service boundaries are in [`MASTER_PLAN.md`](../../MASTER_PLAN.md). Read it and [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md) before editing code.

## 3. Scope and guardrails

### In scope

- Technical SEO markup and static SEO files.
- Metadata, social-sharing metadata, and structured data built from verified repository content.
- Internal-link and indexability policy.
- A future-safe language URL strategy.
- Content specifications and QA documentation for pages that are still pending.

### Out of scope unless expressly authorized

- Choosing or buying a domain, changing DNS, deploying the site, or accessing third-party accounts.
- Inventing legal/business identifiers, physical addresses, social profiles, client results, product prices, ratings, stock claims, or distributor credentials.
- Adding a framework, package manager, CMS, server, or mandatory build step.
- Making secure RFQ submission appear complete. That work needs its own server-side/security implementation.

### Required rules

- Preserve the static architecture and the page script order documented in `MASTER_PLAN.md`.
- Apply the repository bilingual-copy skill whenever public FR/EN wording is edited, and run `node --test tests/i18n.test.cjs`.
- Do not expose secrets, tracking IDs, mail credentials, or production-only values in committed source.
- Keep all external-source product claims traceable to official DJI documentation or owner-provided proof.

## 4. Decisions required from the owner

Do not block the local, domain-independent work below. Before finalizing production metadata, request these values in one consolidated question:

1. **Canonical public domain:** e.g. `https://www.example.com`, and whether the `www` hostname redirects to the non-`www` hostname or vice versa.
2. **Hosting target:** GitHub Pages, Cloudflare Pages, Netlify, a conventional web host, or another provider. This decides how headers, redirects, and rewrites are configured.
3. **Launch indexation state:** whether the staging preview must remain private/noindex and the exact launch date or release approval condition.
4. **Verified organization data:** legal business name, legal address or policy for displaying one, phone/email, country/service area, logo source, official social-profile URLs, and proof/approved wording for DJI-distributor status.
5. **Language SEO policy:** Is English intended to attract organic traffic independently, or is it a convenience translation for the same Algerian audience? The recommended default is indexable FR and EN equivalents at separate stable URLs.
6. **Analytics and consent choice:** the approved privacy-conscious analytics product, consent policy, and measurement owner.

Record the answers in `MASTER_PLAN.md` or a dated launch-decision document before substituting production values.

## 5. Recommended implementation sequence

### Phase A — Pre-launch foundations (safe to start now)

**Goal:** Establish a single reusable metadata model and eliminate gaps without committing an unverified production URL.

1. Audit all root HTML pages for exactly one title, description, primary H1, meaningful internal links, and one descriptive image alternative where relevant.
2. Add missing bilingual description support for `produit.html` and `comparateur.html`. Product-page titles/descriptions must be computed from the actual product data and gracefully render a translated not-found state.
3. Add a small, documented site-configuration source for values that may vary by environment, such as `siteUrl`, site name, default sharing image, and robots mode. It must have safe local defaults and must not introduce a build requirement.
4. Add reusable helpers to set the document title, description, canonical, Open Graph, and Twitter-card fields after dynamic product content is resolved. Use `document.head` safely, without duplicate tags.
5. Prepare a branded 1200 x 630 social image from existing approved brand/product artwork or an owner-approved new asset. Include its final absolute URL only once the canonical domain is known.
6. Define and document query-parameter policy:
   - `catalogue.html?cat=…`, `?secteur=…`, and `?dispo=…` are visitor tools, not standalone search landing pages. Canonicalize them to `catalogue.html` unless approved, purpose-written landing pages exist.
   - Comparison selections (`comparateur.html?ids=…`) should not create infinite indexable variations; canonicalize to the base comparator or use `noindex,follow`.
   - Valid product records need exactly one indexable canonical URL each; unknown product IDs must be `noindex` and show the existing translated not-found state.
7. Add a source-of-truth metadata field per product only if it avoids duplicating already-verifiable `name`, `tagline`, `usage`, image, availability, and DJI source URL in `assets/js/data.js`.

**Acceptance criteria:** no duplicate head tags, translated metadata updates when the language changes, valid not-found behavior, no invented company/product claims, and all bilingual regression tests pass.

### Phase B — Durable product and language URLs (make the explicit design decision)

**Goal:** Give every indexable language/page combination a stable address that a crawler can fetch and a visitor can share.

The preferred outcome is static, language-specific URLs, for example:

```text
/fr/produits/dji-agras-t55.html
/en/products/dji-agras-t55.html
```

This is stronger than relying on the current `produit.html?id=t55` plus a `localStorage` language preference because each language then has a fetchable document, its own canonical metadata, and a reciprocal `hreflang` relationship.

Before implementation, choose one of these approaches and document the decision:

| Option | Recommendation | Trade-off |
|---|---|---|
| Hand-authored static aliases/redirects per product | Use only for a small, stable high-priority product set | Easy to understand, but duplicative for 38 products and fragile as inventory changes. |
| A development-only static-page generator checked into the repository | Recommended if all 38 products and both languages will be search targets | Generates committed static HTML output; does not add a production runtime/build dependency, but needs careful maintenance and CI validation. |
| Keep query-string product pages | Acceptable as an interim state only | Lowest effort, but weaker guarantees for unique crawler metadata and language alternates. |

Do not implement a redirect, rewrite, or generator until the hosting choice and URL convention are known. Whichever route is chosen must retain the existing `produit.html?id=` links or add safe redirects so bookmarked links continue to work.

For bilingual URLs:

- Set `<html lang>` to the actual rendered language.
- Add reciprocal `hreflang="fr"`, `hreflang="en"`, and `hreflang="x-default"` links with absolute final URLs.
- Use a language switcher that navigates to the language-equivalent URL while preserving the product, filter/comparison selection, cart, and form state.
- Do not label English as a country-specific variant unless the owner establishes a separate market/site policy.

**Acceptance criteria:** each planned indexable URL renders correct server-delivered or static HTML metadata, has one canonical, has the reciprocal alternate, works without `localStorage`, and preserves existing user workflow state after language switching.

### Phase C — Structured data

**Goal:** Help search engines identify the company, services, product entities, and site hierarchy without misleading rich-result markup.

Implement JSON-LD only from confirmed data:

1. **Organization** (or `LocalBusiness` only if an address/category is confirmed): legal name, URL, logo, contact data, service area, and approved social `sameAs` URLs.
2. **WebSite:** homepage URL and site name. Do not declare a `SearchAction` because this static site has no site-search endpoint.
3. **Product:** name, image, brand `DJI`, model identifier where confirmed, description, URL, and product availability. Do not provide `Offer`, price, condition, shipping, aggregate-rating, or review fields unless the required facts are real and publicly intended.
4. **Service:** agriculture sales/sizing, consultation, training, maintenance/SAV, and parts only as described in the approved service boundaries. Enterprise and Camera remain sales-only; do not imply agricultural support.
5. **BreadcrumbList:** only after breadcrumb navigation exists visibly and semantically on indexable product pages.

Validate the final public URLs with Google's Rich Results Test after deployment. Treat passing structured-data syntax as quality assurance, not a promise of rich-result display.

### Phase D — Crawl directives, sitemap, and social sharing

**Goal:** Give search engines a clean, controlled inventory at launch.

1. Add a `robots.txt` policy for the production root. Before launch, it must prevent accidental public indexing using the host's authentication/noindex controls where possible; do not rely on `robots.txt` alone for confidentiality.
2. At launch, permit the intended indexable pages and reference the exact canonical sitemap URL.
3. Generate or maintain `sitemap.xml` with only canonical, indexable final URLs. Exclude query permutations, staging URLs, discontinued models that should not attract new leads, `devis.html` if the owner wants it conversion-only, invalid product routes, and internal/doc pages.
4. Add `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `twitter:card`, and appropriate Twitter/X equivalents. The source must be bilingual and reflect the individual product when applicable.
5. Add canonical tags only after the final HTTPS hostname is set. Never publish `localhost`, a filesystem path, or a placeholder domain as canonical.

**Acceptance criteria:** XML is well-formed; every sitemap URL responds with a successful final page once deployed; no sitemap URL redirects; directives agree with canonicals; link-preview debuggers show the intended image/title/description.

### Phase E — Content readiness and on-page authority

**Goal:** Turn existing expertise into credible search-entry pages, rather than publishing thin keyword pages.

1. Build the planned legal and privacy pages before public lead capture. Obtain confirmed legal wording; a coding agent must not author legal claims without owner/legal approval.
2. Build case-study pages only from documented field interventions. Each should name the context, method/equipment, constraints, measured outcome/source, date, and an honest limitation. Do not imply a result is guaranteed.
3. Build news/road-show pages from confirmed event data; keep expired events visible only when clearly archived or remove them from the sitemap.
4. Expand the highest-value French search journeys with useful, evidence-backed answers:
   - selecting an Agras model by crop/plot/workflow;
   - spraying/spreading preparation and operator training;
   - maintenance, parts, and support process;
   - mapping, inspection, thermal, and enterprise sales-only use cases.
5. Link every article/application page to the relevant supported products, service boundaries, and RFQ action. Do not target a product that is discontinued/not available as the primary conversion route; offer the relevant current alternative.

The bilingual-copy skill is required for every public-copy modification in this phase.

### Phase F — Performance, accessibility, and local QA

**Goal:** Protect usability and Core Web Vitals before adding traffic.

1. Run a local HTTP preview, then test representative homepage, catalogue, product, service, quote, and not-found routes at 360px, 768px, and 1440px.
2. Audit image dimensions, file sizes, lazy-loading, explicit width/height or aspect-ratio reservation, and above-the-fold hero loading. Optimize only with retained visual quality and truthful alt text.
3. Inspect navigation, keyboard focus, contrast, headings, live regions, labels, and reduced-motion behavior.
4. Check JavaScript console output, network failures, malformed/missing outbound DJI/contact/social links, canonical generation, and language round trips.
5. Run `node --test tests/i18n.test.cjs` and `git diff --check` after each public-copy or markup batch.
6. Use an HTML validator and local Lighthouse-style audit as diagnostics; record the date, sampled routes, and material results in the handoff/change log. Do not chase synthetic scores at the expense of useful content or accessibility.

## 6. Launch-day and post-launch checklist

Only perform these after the owner authorizes deployment and supplies the final domain/host configuration:

- [ ] Configure a single HTTPS canonical hostname and permanent redirects from alternatives.
- [ ] Apply production headers: HTTPS enforcement, CSP compatible with local/site scripts and YouTube nocookie, anti-clickjacking, `nosniff`, referrer policy, and HSTS only after HTTPS is proven stable.
- [ ] Replace temporary/noindex configuration with the approved production indexation policy.
- [ ] Publish final canonical tags, `hreflang`, robots file, and sitemap URLs.
- [ ] Verify response status, redirects, canonical headers/markup, and rendered metadata on live pages.
- [ ] Validate representative Organization/Product/Service structured data using public tooling.
- [ ] Verify site ownership; submit sitemap in Google Search Console and Bing Webmaster Tools.
- [ ] Configure approved analytics/consent and verify the RFQ-intent events without sending customer messages.
- [ ] Set up/verify Google Business Profile and consistent NAP/contact data across approved business citations.
- [ ] Record the release version, deployment URL, and verification results in `MASTER_PLAN.md`.

## 7. Suggested work packages for a continuation agent

Keep commits cohesive and make each one independently reviewable:

1. **SEO audit and metadata infrastructure:** head-tag helper/configuration; missing dynamic descriptions; no final domain values.
2. **SEO route architecture:** approved product and FR/EN static URL strategy, migration compatibility, canonical/alternate handling.
3. **Schema and social metadata:** only after company facts and URL policy are approved.
4. **Crawl files and host configuration:** only once the production host/domain are known.
5. **Content and legal pages:** owner-approved factual source material; bilingual implementation and i18n validation.
6. **Release QA:** audit report and fixes, with no unauthorised deployment or external account changes.

## 8. Definition of ready for launch

SEO readiness is achieved when:

- Every desired public page has an intentional index/noindex decision, a unique title/description, one canonical final URL, and no duplicate metadata.
- Every indexable FR page has a deliberate EN equivalent or a recorded decision that it does not need one; language alternates are valid.
- Product, company, service, availability, and support claims are verified and accurately scoped.
- Sitemap, robots, Open Graph metadata, structured data, links, responsive behavior, and bilingual interactions have passed local and production verification.
- Secure RFQ, legal/privacy content, HTTPS/header configuration, and monitoring are completed or deliberately withheld from launch.
- Search-console submission and analytics verification are completed after publication.

## 9. Handoff reporting format

At the end of each work package, report:

1. Files changed and the user-visible outcome.
2. Tests/audits run and their result.
3. The exact unresolved owner decision, if any.
4. Whether `MASTER_PLAN.md` was updated and why.
5. Any production-only value intentionally left unset.

