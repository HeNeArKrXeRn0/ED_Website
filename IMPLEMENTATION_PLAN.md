# Equip Drones — Final Website Implementation Plan

**Prepared:** 2026-08-13  
**Working principle:** keep the existing lightweight static front end where it is useful; add a small, secure server-side form layer only for RFQ delivery and spam protection.

## 1. Goal

Deliver a production-ready Equip Drones website that establishes the company as a trusted DJI partner in Algeria, puts DJI Agriculture first, and gives visitors a clear route from learning about a model to sending a reliable request for quotation (RFQ).

The finished site will:

- lead with Equip Drones' mission, approved DJI relationship, and agriculture drone expertise;
- explain the full operating cycle of a heavy DJI Agras spraying/spreading drone using owned/licensed imagery and approved YouTube videos;
- clearly distinguish **Agriculture: full sales and support** from **DJI Enterprise: sales only** and **DJI Camera: sales only**;
- let visitors browse models, key specifications, compatible accessories/spare parts, compare appropriate models, and request a quote for multiple items;
- add credible case studies and a small road-show/news area;
- securely deliver RFQs to the company email, while resisting automated abuse;
- meet launch requirements for mobile use and SEO basics.

No prices will be published unless the business changes that policy.

## 2. Starting point: what is already in place

| Area | Existing implementation | Work required for the final version |
|---|---|---|
| Company / DJI story | Home and About pages already describe the company, partnership, accreditation, and agriculture role. | None |
| DJI Agriculture | Agriculture models, application content, services, product detail pages, comparison, and local product images exist. | Make Agriculture the explicit primary navigation path; add the dedicated operating-cycle experience |
| Model browsing | Catalogue filters, product template, specifications, compatible payloads, and a model comparator are implemented. | Extend the data model for Camera and sales-only segments; show accessories and spare parts cleanly.|
| RFQ | A local quote cart builds a WhatsApp/mail-client message. It does not submit or retain a lead. | Replace the primary handoff with a secure server-side RFQ form that emails the company and returns a clear confirmation. |
| Services | Sales/advice, training, maintenance/repair, and parts have detailed editorial sections. | Add accessories explicitly and reorganize as one agriculture service offer with unambiguous support boundaries. |
| Case studies / news | Not implemented. | Add content-managed static sections and templates for future items. |
| Enterprise / Camera retail | Enterprise models and payloads exist in the shared catalogue, but not as a distinct sales-only area. Camera drones are not present. | Create separate, sales-only areas and catalogue data for aircraft, accessories, and spare parts. |
| Security / launch compliance | Client-side validation and basic safe rendering exist. Legal pages, server-side validation, spam controls, security headers, and production verification are missing. | Implement all launch controls in Phases 5, 8, and 9. |

### Shared interface asset library

- Add reusable SVG interface icons to [`assets/img/svg_icons/`](assets/img/svg_icons/). The catalogue’s model-spec cards currently use `payload.svg`, `full_battery.svg`, and `spray_nozzle.svg`; keep future approved spec icons in this same directory for shared use.

## 3. Proposed information architecture

Agriculture is the default commercial path. Enterprise and Camera are deliberately separate so visitors do not assume that they include the agricultural training/SAV package.

```text
Home
├─ DJI Agriculture
│  ├─ Agricultural models and comparison
│  ├─ Operating cycle: heavy spraying / spreading
│  ├─ Agriculture services
│  └─ Agricultural case studies
├─ DJI Enterprise — sales only
│  ├─ Enterprise drones
│  ├─ Accessories and spare parts
│  └─ RFQ
├─ DJI Camera — sales only
│  ├─ Camera drones
│  ├─ Accessories and spare parts
│  └─ RFQ
├─ Road shows & news
├─ About Equip Drones
├─ Contact
└─ RFQ cart and secure form
```

Suggested pages, retaining useful existing pages where possible:

| Route / file | Purpose |
|---|---|
| `index.html` | Agriculture-led home page, partnership proof, featured models, services, case-study and road-show previews. |
| `agriculture.html` | Agriculture hub linking to models, applications, the operating cycle, support services, and case studies. |
| `cycle-operationnel-agras.html` | Dedicated heavy sprayer/spreader operation-cycle page. |
| `catalogue.html` and `produit.html?id=…` | Shared model browsing and model detail system, with segment-aware filters. |
| `comparateur.html` | Comparison restricted to compatible aircraft within a selected segment. |
| `services.html` | Agriculture-only full-service offer: sale, consulting, training, accessories, original spare parts, maintenance and after-sales service. |
| `enterprise.html` | DJI Enterprise retail catalogue; clearly labelled “sales only”. |
| `camera.html` | DJI Camera retail catalogue; clearly labelled “sales only”. |
| `etudes-de-cas.html` | Case-study index and detail template/content blocks. |
| `actualites.html` | Small road-show/news listing, with featured upcoming event(s). |
| `devis.html` | Persistent RFQ cart plus secure form submission and confirmation. |
| `mentions-legales.html`, `confidentialite.html` | Required business information, privacy terms, RFQ data handling, and cookie/analytics position. |

Existing `applications.html` and `a-propos.html` remain useful and should be tightened rather than rebuilt without need.

## 4. Decisions and inputs needed before production content is published

These are approval gates, not reasons to delay foundation work.

1. **Content assets:** licensed/owned field photos, a selected heavy Agras model (for example T100 or T70P) to illustrate, official YouTube URLs approved for embedding, and image/video credits.
2. **Catalogue scope:** confirmed DJI Enterprise and DJI Camera models, accessories, spare-part families, compatibility, official product URLs, and whether each item is RFQ eligible.
3. **Stock policy:** owner-approved availability values and an owner responsible for updating them. The present values are explicitly demo data and must not launch as fact.
4. **Road shows:** dates, cities, venue/contact details, registration link if applicable, status (upcoming/past/cancelled), and accountable editor.


## 5. Implementation sequence

### Day 1 — Scope lock, content audit, and architecture foundation

**Outcome:** an approved content inventory and a data structure that can support the three commercial segments without duplicating code.


3. Freeze the navigation labels and user journeys from Section 3, with Agriculture first and “sales only” visible for Enterprise and Camera.
4. Extend `assets/js/data.js` conceptually before adding products. Each item should contain, at minimum:

   ```js
   {
     id, name,
     marketSegment: 'agriculture' | 'enterprise' | 'camera',
     productGroup: 'aircraft' | 'accessory' | 'spare_part' | 'payload',
     serviceLevel: 'full_support' | 'sales_only',
     quoteEligible: true,
     availability, availabilityVerifiedAt,
     image, imageFallback, djiUrl,
     highlights, specs, compatibleProducts
   }
   ```

5. Keep published specifications traceable to DJI or mark them `—`; add the source/verification date to the internal content register.
6. Create a single editorial data source for news and case studies so future updates do not require editing page markup in several places.
7. List legacy inline scripts and inline event attributes that must be moved to named JavaScript files before enforcing a strict Content Security Policy.

**Approval gate:** business signs off on menu structure, product segments, and the nominated content owner.

**Acceptance check:** the data model can filter Agriculture, Enterprise, and Camera; it can distinguish aircraft, accessories, spare parts, and payloads; none of the existing Agriculture/Enterprise functionality regresses.

### Day 2 — Agriculture-led positioning and shared navigation

**Outcome:** the primary experience immediately explains who Equip Drones is, why DJI Agriculture is the focus, and where a visitor should go next.

1. Rework the home-page hierarchy: agriculture mission, heavy-drone capability, featured agriculture models, and the complete agriculture service offer come before secondary retail segments.
2. Add an Agriculture hub (`agriculture.html`) that connects applications, models, the operation cycle, services, cases, and RFQ.
3. Update shared header/footer navigation and mobile navigation. Include concise labels for “DJI Enterprise — sales only” and “DJI Camera — sales only”.
4. Make support scope visible on every relevant card and product page:
   - Agriculture: sale, consultation, training, accessories, original parts, maintenance, and after-sales support.
   - Enterprise/Camera: product/accessory/spare-part sale only; no implied training, repair, operational support, or mission service.
5. Update titles, descriptions, canonical URL plan, headings, link text, and image alt text for the new hierarchy.
6. Complete French editorial content first. Either fully translate editorial pages into English or temporarily scope the language toggle to the parts that are truly translated.

**Acceptance check:** from the home page, a first-time visitor can reach the Agriculture hub, a model, the operating cycle, agriculture services, Enterprise retail, Camera retail, and the RFQ cart in one or two intentional actions.

### Day 3 — Heavy spraying/spreading operation-cycle page

**Outcome:** a visual, credible explanation of how a heavy DJI Agras operation works.

1. Build `cycle-operationnel-agras.html` with a clear table of contents and a progress/stepper component.
2. Tell the cycle in six operational stages:
   1. field assessment, crop/prescription and regulatory preparation;
   2. equipment selection, inspection and battery/charging setup;
   3. mixing/loading and operator safety controls;
   4. route planning, calibration and pre-flight checks;
   5. autonomous/supervised spraying or spreading and replenishment cycle;
   6. cleaning, maintenance, records, and next-operation preparation.
3. For each stage, add: one useful image/diagram, what the operator does, the supporting drone technology, safety/regulatory note, and relevant Equip Drones service.
4. Add two or three approved YouTube embeds using the privacy-enhanced `youtube-nocookie.com` host, descriptive titles, consent-aware lazy loading, a clickable thumbnail/fallback link, and captions/transcript links where available.
5. Add a technology-advantages section focused on concrete, supportable benefits: operator distance from application, repeatable route execution, treatment-window responsiveness, terrain access, and digital traceability.
6. Link to suited Agras models, training, maintenance, case studies, and the RFQ flow.
7. Apply `prefers-reduced-motion`, keyboard navigation, image alt text, embed titles, and mobile-first layout checks.

**Content approval gate:** field operation wording, safety statements, visual licensing, and video selection are signed off by an agriculture/operations owner.

**Acceptance check:** the page loads quickly with video embeds deferred, remains understandable with JavaScript disabled, and offers a useful action at every stage without overstating regulatory or agronomic advice.

### Day 4 — Services, catalogue taxonomy, and model discovery

**Outcome:** the full agriculture offer is easy to understand, while all three segments can be browsed without mixing their service promises.

1. Reframe `services.html` as the Agriculture service package with seven visible cards/anchors:
   - sale and project sizing;
   - agriculture-drone consulting;
   - pilot training;
   - accessories;
   - original spare parts;
   - preventative maintenance and repair;
   - after-sales support.
2. Ensure each service states the customer outcome, process, exclusions/conditions, and matching RFQ/contact action.
3. Upgrade catalogue filters for segment, product group, application/use case, availability, and model name. Keep the default view Agriculture-first.
4. Render spare parts as clearly defined categories/families until individual part numbers and compatibility are confirmed; do not fabricate individual stock or compatibility.
5. Add service boundary badges and copy to retail-only items and model pages.
6. Update comparison logic so it compares like with like, warns when unrelated aircraft are selected, and remains accessible on mobile.

**Acceptance check:** a visitor can find an agricultural sprayer, an Enterprise aircraft/accessory, or a Camera drone/accessory/spare part, understand the service level, see key specs, and add any eligible item to the RFQ cart.

### Day 5 — Secure RFQ delivery and anti-spam controls

**Outcome:** an RFQ is actually submitted to the company email without exposing secrets in the browser, and automated abuse is substantially reduced.

1. Choose and configure a server-side endpoint on the production host (for example a serverless function) or a vetted form service. The browser must never contain mail-provider credentials or private API keys.
2. Preserve the current multi-item cart, but change `devis.html` so its primary action `POST`s structured RFQ data to the endpoint instead of opening a mail client. WhatsApp may remain an explicitly optional secondary contact route.
3. Include server-side validation for required identity/contact fields, item IDs/quantities, length limits, invalid Unicode/control characters, and a strict allow-list of products obtained from the authoritative catalogue.
4. Add Cloudflare Turnstile or an equivalent privacy-conscious CAPTCHA, plus a hidden honeypot field, short minimum completion time, and server-side rate limiting by IP/token. CAPTCHA verification must happen on the server.
5. Validate request origin, restrict CORS to the production domain, sanitise every value used in the email, log only safe operational metadata, and return generic errors that do not reveal internal configuration.
6. Send a formatted RFQ email to `info@equipdrones.com` (or the approved sales inbox) with a clear subject, client contact block, itemised selection, consent timestamp, and a unique non-guessable reference ID. Configure SPF, DKIM, and DMARC for the sender domain.
7. Show an accessible success/error state. State that the company received the request only after the email provider confirms acceptance; offer a retry path that preserves the cart/form values.
8. Decide and document lead retention, access, deletion, and notification workflow. Do not store RFQs longer than the approved retention period.

**Security acceptance check:** direct requests with missing/invalid CAPTCHA, malformed products, oversized payloads, rate-limit breaches, wrong origin, and honeypot values are rejected; a valid test RFQ reaches the approved inbox once and no secret appears in page source or browser network logs.

### Day 6 — Case studies and road-show/news system

**Outcome:** genuine proof of experience and a small update channel that staff can maintain safely.

1. Create a reusable case-study record: title, sector/crop, location at an approved level of detail, client permission status, operational problem, equipment/services used, process, verified outcomes, quotation/testimonial approval, images, and publication date.
2. Build `etudes-de-cas.html` with cards, filters by sector, and a concise detail view/template. Begin with two or three approved cases; show a restrained “coming soon” state rather than invented work.
3. Create a small `actualites.html` data-driven listing with date, city, venue, event status, short description, CTA/registration link, feature image, and expiry/archiving date.
4. Add a home-page preview that automatically prioritises the next upcoming road show, then recent news. Past events should move to an archive rather than continue to look upcoming.
5. Provide a two-minute editorial checklist for each item: owner, factual proof, visual rights, CTA target, date/time zone, accessibility text, and expiry review.

**Acceptance check:** an editor can add a road show or case study by updating one documented data record; an expired event cannot appear in the “upcoming” slot; no case result appears without an associated source/approval.

### Day 7 — Enterprise and DJI Camera retail-only areas

**Outcome:** the two retail segments are commercially useful but never overpromise agriculture-style support.

1. Create `enterprise.html` and `camera.html` from shared catalogue components rather than duplicated product-card code.
2. Add only confirmed models, accessories, and spare-part categories to each segment. Every card displays “Sales only” before the RFQ action.
3. Add a short explanatory banner near the top and just before checkout/RFQ: Equip Drones supplies these products and parts; training, maintenance, repair, integration, and operational support are not included unless separately approved in writing.
4. Link relevant DJI official documentation and individual detail pages; distinguish payload/accessory compatibility from spare-part availability.
5. Ensure the RFQ email includes the segment and service level so sales staff can route it correctly.
6. Cross-link sparingly: Enterprise/Camera pages should not displace Agriculture in primary navigation or turn into broad service claims.

**Acceptance check:** a visitor selecting a Camera or Enterprise product can see key specifications and request a quote, while the page makes the sales-only limitation unmissable at the decision point.

### Day 8 — Production hardening, legal, analytics, and SEO

**Outcome:** the site has the technical and legal baseline expected of a public lead-generation site.

1. Move remaining inline page scripts and event handlers into external JavaScript files so the production host can use a strict Content Security Policy without `unsafe-inline`.
2. Configure HTTPS-only hosting and response headers:
   - Content Security Policy with an explicit `frame-src` allow-list for privacy-enhanced YouTube embeds;
   - `Strict-Transport-Security` after HTTPS is confirmed;
   - `X-Content-Type-Options: nosniff`;
   - `Referrer-Policy: strict-origin-when-cross-origin`;
   - `Permissions-Policy` limited to features genuinely needed;
   - `frame-ancestors 'self'` (or equivalent anti-clickjacking policy).
3. Add `mentions-legales.html` and `confidentialite.html`: company identifiers, contact, host, copyright, RFQ purpose/legal basis, data recipients, retention period, rights/contact route, CAPTCHA provider notice, and the analytics/cookie decision.
4. If analytics are enabled, choose a privacy approach, configure consent before non-essential tracking, document it in the privacy policy, and verify that analytics does not fire before consent where required.
5. Add sitemap, robots rules, canonical URLs, social cards, unique titles/descriptions, structured Organization/LocalBusiness/Product/Service/Event data only for approved facts, and meaningful internal links.
6. Add a custom 404 page/hosting fallback and test deep links including `produit.html?id=…`.

**Acceptance check:** an external header scan reports the intended headers; browser console has no CSP violations during standard journeys; legal/privacy pages link from every footer; crawlers can find all approved public pages.

### Day 9 — Full QA, content review, and launch rehearsal

**Outcome:** a verified release candidate and a rollback-ready deployment.

1. Test at 360 px, 768 px, 1024 px, and 1440 px in current Chromium, Firefox, and Safari where available.
2. Test keyboard-only navigation, focus visibility, screen-reader labels, contrast, form errors/success announcements, mobile menu, reduced motion, and no-JavaScript content fallback.
3. Perform the complete catalogue path: browse/filter, open every product, compare 2/3/4 compatible aircraft, add/remove/adjust RFQ items, refresh, and submit one controlled valid RFQ.
4. Test every spam/security failure condition from Day 5 and inspect endpoint/email logs without exposing personal test data.
5. Check all outbound links, YouTube fallback links, email/phone/WhatsApp links, social cards, image fallbacks, and legal links.
6. Validate French copy line by line; validate English only to the declared scope. Verify dates, stock labels, road-show status, legal data, and all business claims one final time.
7. Deploy to a staging URL, run the same checks under HTTPS, obtain business sign-off, back up the current public release, then deploy production.

**Release gate:** no P0 defect remains; RFQ reaches the designated inbox; approved claims and data are documented; the launch owner signs off on the production checklist.

### Day 10 — Post-launch monitoring and handoff

**Outcome:** the site stays maintainable after launch.

1. Monitor RFQ delivery, CAPTCHA/rate-limit errors, broken links, CSP reports, and server errors during the first business week.
2. Confirm at least one real test/controlled lead path with the sales team and document acknowledgement/response expectations.
3. Handover a concise editor guide covering catalogue updates, stock verification, case studies, road shows, video/embed approvals, image rights, and legal/privacy change triggers.
4. Schedule monthly checks for product specs, inventory labels, events, content claims, broken links, analytics consent, and security-dependency/host configuration changes.
5. Record all implementation changes and production settings in `MASTER_PLAN.md`, keeping secrets out of the repository.

## 6. Deliverables by workstream

| Workstream | Deliverables |
|---|---|
| Brand and content | Approved DJI/company language, mission copy, content register, licensed visuals, video list, case studies, road-show entries. |
| Agriculture experience | Agriculture hub, operation-cycle page, revised home page, seven-part services section, agriculture model path. |
| Commerce | Segment-aware catalogue/product views, comparison guardrails, persistent RFQ cart, secure confirmation workflow. |
| Retail-only segments | Separate Enterprise and Camera pages with models, accessories/spare-part categories, and explicit sales-only boundaries. |
| Trust and compliance | Legal/privacy pages, secure headers, HTTPS deployment configuration, anti-spam controls, email-authentication records. |
| Operations | Editorial guide, update ownership, launch checklist, monitoring and rollback notes. |

## 7. Definition of done

The final version is ready to launch only when all of the following are true:

- Agriculture is visually and structurally the primary offer, while DJI partnership wording is accurate and approved.
- The heavy spraying/spreading operation cycle has approved images, accessible/deferred video embeds, credible advantages, safety context, and clear paths to relevant services/models.
- Agriculture services explicitly cover sale, consulting, training, accessories, original spare parts, maintenance, and after-sales support.
- Visitors can browse confirmed models and key specifications, compare suitable aircraft, select multiple eligible items, and submit an RFQ that reaches the company inbox.
- Enterprise and Camera sections sell only the confirmed equipment/accessories/spare-part categories and clearly state their support limitation.
- Published case studies and news are real, approved, dated, and maintainable from a documented single source.
- RFQ submission is server-validated, CAPTCHA-protected, rate-limited, monitored, and free of exposed secrets; the site runs on HTTPS with the agreed security headers.
- Legal/privacy information, accessibility checks, responsive QA, link checks, and production verification are complete.
- A named owner can update catalogue availability, road shows, news, and content after launch.

## 8. Prioritisation if time or content is constrained

**Must launch first (P0):** confirmed catalogue/stock; Agriculture home/services/operation cycle; secure RFQ endpoint and anti-spam; legal/privacy; HTTPS/headers; functional mobile/accessibility QA.

**Launch when approved content is ready (P1):** Enterprise and Camera retail pages; two or more case studies; road-show/news system; complete English editorial content; SEO/structured-data expansion.

**Post-launch improvements (P2):** CMS integration, stock-system integration, CRM sync, RFQ dashboard, model-specific downloadable documents, advanced analytics, and a static/generated route per product for stronger search visibility.

## 9. Key risks and controls

| Risk | Control |
|---|---|
| RFQs lost in email/WhatsApp handoff | Make server-side email submission primary, include a reference ID, and monitor failed sends. |
| Spam or email abuse | CAPTCHA verification, honeypot, rate limiting, strict validation, origin/CORS checks, and email authentication. |
| Product imagery/video licensing issue | Use owned, licensed, or explicitly authorised assets; keep asset-credit records. |
| Retail pages imply unsupported services | Display “sales only” at page, card, product-detail, and RFQ stages. |
| Stale road-show/news content | Attach status and expiry dates to each entry; appoint an editor and monthly review. |
| Strict CSP breaks the current static site | Move inline scripts/handlers before enabling the policy, test in staging, and review browser CSP reports. |
