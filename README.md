# exbound.github.io

The [Exbound](https://github.com/exbound) website — the public front door:
mission, the twelve reconstruction targets, research discovery, and contributor
onboarding.

Built with [Astro](https://astro.build) and deployed to GitHub Pages. Static,
no server, no tracking.

## Develop

```sh
just setup   # install pinned dependencies (npm ci)
just dev     # local dev server with live reload
just check   # type-check the site
just build   # produce the static build in dist/
```

(Or use `npm` directly: `npm install`, `npm run dev`, `npm run check`,
`npm run build`.)

## Structure

- `src/data/targets.ts` — the static target registry; mirrors the
  [research target inventory](https://github.com/exbound/research/blob/main/dossiers/README.md).
  The homepage, the projects directory, and each per-target page are generated
  from it.
- `src/layouts/Base.astro` — page shell: head, metadata, navigation, footer.
- `src/components/ProjectCard.astro` — the target card.
- `src/pages/` — `index`, `projects/`, `projects/[slug]`, `research`,
  `contribute`, `about`.
- `src/styles/global.css` — the design system (draft tokens in the org
  `branding/` notes).
- `.github/workflows/deploy.yml` — build and deploy to Pages on push to `main`.

## Status and progress

Target status is honest: only targets with real findings are marked *research
in progress*. The site shows no fabricated completion percentages; progress is
expressed through the research capability model.
