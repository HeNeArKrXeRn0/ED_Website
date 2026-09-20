---
name: ed-website-bilingual-copy
description: Keep French and English website copy synchronized when changing the Equip Drones ED_Website repository. Use automatically for website edits that add, change, remove, or expose visitor-facing text, including product data, forms, metadata and accessible labels. Translate the counterpart language in the same change and verify the language switcher. Skip translation for changes with no visitor-facing copy.
---

# Equip Drones bilingual copy

Maintain equivalent, accurate French and English copy as part of the website change the user requested. Do not wait for a separate translation request. Buyers should understand the same offer and complete an RFQ in either language; the observable signal is matching meaning and a working language round-trip without lost entries. This supports fewer abandoned or unclear RFQs; do not claim a measured conversion increase.

## Identify the copy affected

Work in the active ED_Website checkout, using its `MASTER_PLAN.md` for the service scope. Inspect the requested changes and final diff, including newly added files. Include text introduced through HTML, JavaScript, catalogue data, CSS-generated content and images—not just changes to the dictionary.

Visitor-facing copy includes headings, paragraphs, links, buttons, product descriptions, specification labels and language-dependent values, filters, counts, empty states, validation, toasts, prepared RFQ/contact messages, email subjects, titles, metadata descriptions, alt text and accessible names.

If the change contains none of these, finish the user's task without translation edits. Do not translate internal comments, agent instructions, development documentation, identifiers, routes or test fixtures solely because they contain words.

## Translate in the same change

1. Treat the user's intended new wording as the source, whether written in French or English. Review the other language and update it wherever the meaning changed. A spelling or punctuation correction may leave an already-correct counterpart unchanged. If both versions changed, reconcile them against the user's request rather than silently preferring French.
2. Write natural professional French for the Algerian audience and clear English consistent with nearby copy. Preserve meaning, qualifications, units, figures and service boundaries. Agriculture includes support; Enterprise and Camera are sales-only unless the business scope has explicitly changed. Do not introduce new promises, certification claims or specifications while translating.
3. Reuse a dictionary key only when the meaning is shared across every use. Search its references before changing it. Give context-specific wording its own stable key. Remove obsolete copy only after checking its remaining references.
4. Keep brand/model names, official proper names, URLs, contact details, product IDs, technical acronyms and language-neutral units unchanged. Preserve visitor-entered text exactly. Do not translate form option values, routing values, interpolation tokens or selectors.
5. Inspect any modified image that carries words. Keep visitor-facing labels in translatable HTML when practical; otherwise provide genuinely equivalent localized assets and select the correct one. Translating alt text alone does not translate labels embedded in an image.

## Use this repository's translation contract

- Interface/editorial entries live in `assets/js/i18n.js` as `key: { fr, en }`.
- Text nodes use `data-i18n="key"`; attributes use `data-i18n-attr="placeholder:key, aria-label:otherKey"`. Keep the initial French HTML text and attribute values synchronized with the French entry.
- Use `data-i18n-html` only for trusted, repository-owned markup. Preserve links, emphasis and semantic structure; never interpolate visitor input into translated HTML.
- Product prose, labels and language-dependent specification/highlight values live in `assets/js/data.js` as `{ fr, en }`; neutral values may remain strings. Render them through `ED.i18n.L(value)`.
- JavaScript-generated interface text uses `ED.i18n.t(key)`. The language accessor is `ED.i18n.lang()`—it is a function.
- Page renderers respond to `ed:langchange`. Translate existing errors, visible prepared messages and messaging links as well as the initial view. Preserve field values, product quantities, selected filters, comparison state, focus and menu state. Do not rebuild the shared header just to translate it.
- Keep select option values stable and localize only their labels. Generated messages translate the site's labels and selected activity label, never the visitor's free text.

Example of one semantic change:

```js
'cta.quote': {
  fr: 'Demander un devis personnalisé',
  en: 'Request a tailored quote'
}
```

Update any French HTML fallback for this key too. Do not change unrelated calls to action merely to match the example.

## Verify and finish

From the repository root, run:

```sh
node --test tests/i18n.test.cjs
git diff --check
```

Inspect the final copy diff for omissions and semantic mismatches. The tests catch missing declared translations and broken references; they cannot prove translation quality, catch every unmarked hard-coded sentence, or detect every stale counterpart. Do that review explicitly.

For changed website copy, preview the affected page or component and switch FR → EN → FR. Check changed text, attributes, errors or message previews as applicable. If layout or controls changed, also check a narrow viewport and that switching preserves the relevant visitor state. Do not send real RFQs during testing.

Update `MASTER_PLAN.md` with meaningful changes and the verification performed. In the task closeout, state that both languages were reviewed and identify any unverified behavior. Do not claim completion if a requested translation is still missing. Existing user instructions determine whether to commit, push or deploy; this skill does not authorize additional publishing.

## Activation and limits

The repository's `AGENTS.md` and Copilot instructions route copy edits here, and implicit skill invocation is enabled. The skill runs when a supporting coding agent handles a change; it is not a background file watcher or an automatic translation service for edits made without an agent.

`.github/workflows/bilingual-copy.yml` runs the regression checks on pushes and pull requests once published to GitHub. It validates changes without creating translations, sending copy to an external API, or committing edits. Making the check mandatory for merging requires repository branch-protection configuration; do not claim that configuration exists merely because the workflow file is present.
