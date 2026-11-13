# imomaikel.dev

Personal site. Next.js (static export) + React + Tailwind CSS. EN / PL.

The previous version lives on branch `legacy/v1` (tag `v1-final`).

## Scripts

```bash
pnpm dev     # dev server
pnpm build   # static export to ./out
pnpm lint
pnpm format        # prettier --write .
pnpm format:check  # CI-style check
```

## Structure

```
src/
  app/                 Routes only. Thin files that call into features/.
    (en)/              English root layout, served at /
    (pl)/pl/           Polish root layout, served at /pl/
    global-not-found.tsx  English 404 (static hosts serve one 404 file); Polish one is at /pl/404/
    globals.css        Tailwind import + design tokens (@theme)
  features/<page>/     Everything one page needs (sections, page component, helpers)
  components/
    ui/                Generic primitives: Button, Panel, Container, typography
    layout/            Site chrome: root document, header, footer, language switch, page shell
  config/
    site.ts            Name, URL, profiles
    routes.ts          Route and home-section registry
  i18n/
    config.ts          Locales, localizedPath(), hreflang helpers
    dictionaries/
      en/, pl/         One file per namespace (common, not-found, ...)
      types.ts         Dictionary type, derived from en
  lib/                 Small helpers (cx, pageMetadata)
```

Imports use the `@/` alias for `src/` (for example `@/components/ui/button`).

Adding a page: register it in `config/routes.ts`, add a namespace to both
dictionaries, build it in `features/<page>/`, then add a thin `page.tsx` in
`app/(en)` and `app/(pl)/pl` that calls `pageMetadata()` and renders it.
