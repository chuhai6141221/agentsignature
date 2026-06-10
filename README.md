# AgentSignature - Real Estate Email Signature Generator

A professional email signature generator tailored for real estate agents, brokers, and property managers. 

## Features
- First-screen usability (No login required)
- Real-time preview
- Table-based inline CSS rendering (Gmail/Outlook compatible)
- One-click Copy Rich Text & HTML
- Built-in SEO pages & dynamic routing

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vitest

## Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Testing

\`\`\`bash
npm run test
\`\`\`

## Cloudflare Pages Deployment
This project is configured for a static Next.js export, which can be deployed directly to Cloudflare Pages.

Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run pages:build`
- Build output directory: `out`
- Node.js version: `20`

The same output directory is also declared in `wrangler.toml` through `pages_build_output_dir = "out"`.

## Cloudflare Workers Static Assets
If your Cloudflare project runs a deploy command such as `npx wrangler deploy`, this repository also declares the exported static assets directory in `wrangler.toml`:

\`\`\`toml
[assets]
directory = "./out"
\`\`\`

Use these Cloudflare build settings:

- Build command: `npm run pages:build`
- Deploy command: `npx wrangler deploy`

For command-line Workers deployment:

\`\`\`bash
npx wrangler login
npm run deploy:cloudflare
\`\`\`

For command-line Pages deployment:

\`\`\`bash
npx wrangler login
npm run deploy:cloudflare:pages
\`\`\`

## Roadmap
- [ ] Integrate Stripe for Pro template unlocking
- [ ] Image upload via AWS S3 / Vercel Blob
- [ ] Team management features
- [ ] CSV bulk generation
