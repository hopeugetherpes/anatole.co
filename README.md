# Anatole

Source code for [anatole.co](https://anatole.co), built with Next.js App Router,
React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 24.x (also specified in `.nvmrc`)
- npm

## Local development

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Production build

```sh
npm run build
npm start
```

The standard Next.js build is written to `.next/`.

## Verification

```sh
npm test
npm run lint
```

`npm test` builds the production application, starts it on an available local
port, and checks that the homepage and its local resources can be served.
The server is stopped after the test.

## Deploy to Vercel

Import this GitHub repository into Vercel, using the repository root as the Root
Directory. `vercel.json` selects Next.js, installs dependencies with `npm ci`,
runs `npm run build`, and uses the standard `.next` output.

With Vercel's GitHub integration enabled, pushes to the configured production
branch (`main`) trigger production deployments. Other branches produce previews.

This public personal site requires no application environment variables,
database, Cloudflare bindings, or ChatGPT sign-in service. Its background audio
is loaded from the existing external URL in `app/page.tsx`.

## Project layout

- `app/page.tsx`: page content and browser interactions
- `app/layout.tsx`: root layout, font, and metadata
- `app/globals.css`: shared styles
- `public/`: images and other static assets
- `tests/rendered-html.test.mjs`: production HTTP smoke test

The repository uses conventional Next.js build and hosting commands. The former
Sites/Vinext/Cloudflare starter configuration has been removed.

## License

See [LICENSE](LICENSE).
