---
name: ai-nav-product
description: Maintain product positioning, page architecture, and feature boundaries for the AI tools directory site. Use when planning or changing the site strategy, homepage sections, navigation structure, category model, tool-detail scope, tutorial/ranking boundaries, submission/cooperation flows, or any decision that affects what the AI navigation product should or should not do.
---

# AI Nav Product

Use this skill for product-level decisions in `ai-tools-directory`, an AI tools navigation and tutorial site.

## Responsibilities

- Keep the site positioned as a practical AI tools directory plus tutorial and ranking hub.
- Define what belongs on the homepage, tool pages, category pages, tutorials, rankings, submission, and cooperation pages.
- Protect feature boundaries: do not turn the site into a generic blog, SaaS dashboard, marketplace, or unrelated portal unless the user explicitly changes the product direction.
- Prefer structures that help visitors discover, compare, learn, and decide quickly.

## Product Rules

- Homepage should show the core value immediately: find AI tools, compare choices, and read practical guides.
- Navigation should stay shallow and predictable: tools, rankings, tutorials, submit/cooperation, and category entry points.
- Tool detail pages should prioritize use case, pricing model, strengths, limitations, alternatives, and practical next steps.
- Tutorial pages should solve concrete workflows, not generic AI commentary.
- Ranking pages should explain ranking criteria and keep list logic transparent.
- Submission/cooperation pages should collect only information needed to evaluate tools and partnerships.

## Before Changing Product Structure

1. Inspect current pages under `src/pages`, layouts under `src/layouts`, and data models under `src/data`.
2. Check whether the requested change belongs to product structure, UI presentation, SEO expansion, content template, or engineering execution.
3. Preserve existing Astro/Vue architecture unless the product need clearly requires a deeper change.
4. If adding a new page type, define its purpose, audience, entry point, data source, and internal links.

## Output Expectations

- State the product decision in plain terms.
- Name affected routes or page types.
- Keep scope tight and avoid unrelated redesign or content expansion.
