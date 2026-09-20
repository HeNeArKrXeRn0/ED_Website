# Equip Drones website instructions

Read `MASTER_PLAN.md` for the current product and service scope and `.github/copilot-instructions.md` for the static-site architecture.

## Automatic bilingual copy maintenance

For every website change, check whether it adds, edits, removes or exposes visitor-facing copy. If it does, read and apply [.agents/skills/ed-website-bilingual-copy/SKILL.md](.agents/skills/ed-website-bilingual-copy/SKILL.md) as part of the same task, without waiting for a separate translation request. Keep French and English equivalent, including metadata, accessible labels, product data, dynamic states and prepared messages. Review changed source wording even when both translation fields already exist.

If there is no visitor-facing copy change, skip translation work. Preserve unrelated user edits and the scope of the requested task.

Before completing a copy change, run `node --test tests/i18n.test.cjs`, review the affected FR/EN text and verify the relevant language-switch behavior. The skill explains the test limits and the state that must be preserved.
