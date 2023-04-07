# Nextjs-DAPP-Starter

## Features

- ⛓️ ethereum hooks

  `useAccountBalance`, `useNetworkColor`

- ✔️ toolings for linting, formatting, and conventions configured

  `eslint`, `prettier`, `husky`, `lint-staged`, `commitlint`, `commitizen`, and `standard-version`

- 📱 PWA-ready

  `next-pwa` configured, disabled by default, just enable it through `next.config.js`

- 🔎 SEO optimization configured

  with `next-seo` and `next-sitemap`. you'll need to reconfigure or tinker with it to get it right according to your needs, but it's there if you need it.

- 🎨 basic responsive layout configured

## Getting Started

```bash
git clone https://github.com/occupy5/next-dapp-starter
pnpm install
pnpm dev
```

## How to Run e2e Test (in local machine)

1. Build production with `pnpm build`, then run the production build using `pnpm start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `pnpm test:e2e`.

References:

- [nextarter-chakra](https://github.com/sozonome/nextarter-chakra)
- [se-2](https://github.com/scaffold-eth/se-2)
