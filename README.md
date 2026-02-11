# ONENEX — Next.js Assignment

Minimal Next.js app with component-driven UI, route-based theming, and a contact form.

## 🚀 Installation
1. Clone the repo: `git clone https://github.com/KyawMinAungm/onenex-assignment.git`
2. Install dependencies: `npm install`
3. add .env: change filename .env.exmaple to .env
4. Run locally: `npm run dev`

## Quick start

Install and run the dev server:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm start
```

See [package.json](package.json) for available scripts.


# ✨ Key Features
- **Stacking Sticky Scroll:** Recreated the premium image stacking effect seen on professional agency sites.
- **Dynamic Typewriter:** An advanced typing/deleting effect for the hero headline.
- **TMDB API Integration:** Fetches real-time movie data with year-based filtering.
- **Responsive Design:** Fully optimized for all screen sizes.

## 🛠️ Technical Decisions
- **Framer Motion:** Chosen for its declarative approach to complex scroll-linked animations.
- **App Router:** Utilized Next.js 14's App Router for efficient routing and server-side optimization.
- **State Management:** Used React's `useMemo` and `useState` for optimized filtering logic without unnecessary re-renders.

## Project structure

- [src/app](src/app) — Next.js app routes
  - Contact page: [`ContactPage`](src/app/contact-us/page.tsx) / [`contactSchema`](src/app/contact-us/page.tsx)
- [src/components](src/components) — UI components
  - [`FloatingInput`](src/components/FloatingInput.tsx) — floating label input used on the contact form
  - [`Button`](src/components/Button.tsx)
  - [`Navbar`](src/components/Navbar.tsx)
  - [`Footer`](src/components/Footer.tsx)
  - [`ThemeProvider`](src/components/ThemeProvider.tsx) — route-aware theme applier; see [`findThemeForPath`](src/components/ThemeProvider.tsx)
- [src/constants/theme.ts](src/constants/theme.ts) — [`routeThemes`](src/constants/theme.ts) route theme map
- [public](public) — static assets

Config and tooling:
- [next.config.ts](next.config.ts)
- [postcss.config.mjs](postcss.config.mjs)
- [eslint.config.mjs](eslint.config.mjs)
- [tsconfig.json](tsconfig.json)
- [.env](.env)

## Theming

This app applies per-route CSS variables via [`ThemeProvider`](src/components/ThemeProvider.tsx). Route definitions live in [`routeThemes`](src/constants/theme.ts). Update those to change default colors.

## Forms & validation

Contact form uses React Hook Form + Zod. See [`ContactPage`](src/app/contact-us/page.tsx) and the schema [`contactSchema`](src/app/contact-us/page.tsx).

## Components

- [`FloatingInput`](src/components/FloatingInput.tsx) — accessible input with floating label and field error handling.
- [`Button`](src/components/Button.tsx) — simple button variant used across the site.
- [`Navbar`](src/components/Navbar.tsx) / [`Footer`](src/components/Footer.tsx) — layout chrome and mobile menu.

## Deployment

Deploy to Vercel (recommended). See Next.js docs for deployment: https://nextjs.org/docs/app/building-your-application/deploying

## Contributing

1. Fork
2. Create a branch
3. Run lint and tests (if any)
4. Open PR

## License

Project README — adjust license as needed.