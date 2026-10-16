# Snip 2 Curl

Website for Snip 2 Curl, a curly hair salon and precision cutting studio in San Francisco.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Build

```sh
npm run build
npm run preview
```

The production-ready static site is written to `dist/`. The site has no server-side
runtime or environment-variable requirements; the built files can be served by any
static web host.

## Deploy

Use the following settings with a static hosting provider:

- Build command: `npm run build`
- Publish/output directory: `dist`
- Node.js version: 20.19+ or 22.12+

Because the app uses client-side routes such as `/contact`, configure the host to
serve `index.html` for routes that do not match a file. This is commonly called an
SPA fallback or rewrite. The included `_redirects` file configures this for
Netlify and Cloudflare Pages; use the equivalent rewrite setting on other hosts.
Deploy the contents of `dist/` at the host's site root.
