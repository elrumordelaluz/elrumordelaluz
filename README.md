<img src="idea-design-code.jpg" width="300" />

### Hola. My name is Lionel Tzatzkin.

I'm a **full-stack and AI engineer** who builds AI-native products end to end — the architecture, the data model, the API, the deploy, and the thing still running in production years later.

I'm CTO and lead full-stack engineer at **Pixeden LLC**, where I've built and kept alive platforms like Pixeden and Lingrem. I got here from design rather than a computer science degree — I worked as a graphic designer and art director before I started writing code to finish what I was designing instead of handing it off. None of it got replaced; it stacked. It's an accumulation, not a pivot.

> I reach for the architecture before I reach for the prompt.

## My portfolio is an agent

**→ [lionelt.dev](https://www.lionelt.dev)**

Rather than read about how I work, ask it. A narrator answers in my voice, grounded in a curated knowledge base, and every answer shows the loop that produced it — reason → retrieve → observe — plus the KB passages it actually used. Retrieval is cosine over a committed JSON index; there's no vector database, on purpose.

The same knowledge base is also a **public read-only [MCP server](https://www.lionelt.dev/how-it-works)** at `lionelt.dev/api/mcp`, so you can connect an MCP client and read the curated source the site is generated from instead of scraping the rendered HTML.

There's a one-page CV at **[lionelt.dev/cv](https://www.lionelt.dev/cv)** if you'd rather skim than ask.

## Open source

A decade of libraries, most of which started as a specific need inside a bigger project and then got finished into something reusable.

- **[CSShake](https://elrumordelaluz.github.io/csshake/)** · 4.9k&nbsp;★ — Sass library of CSS shake animations, still shipped from cdnjs a decade later
- **[Reactour](https://reactour.dev)** · 4.1k&nbsp;★ — React guided tours, a maintained `@reactour/*` monorepo, grown out of onboarding users into Orion
- **[svgson](https://github.com/elrumordelaluz/svgson)** · 473&nbsp;★ — SVG parsed into a JSON AST, and back; the SVG-as-data core extracted from Orion's engine

Plus a belt of single-purpose SVG tools, most also shipped as a CLI and a hosted endpoint — [svg-outline-stroke](https://github.com/elrumordelaluz/outline-stroke), [svgsprit.es](https://svgsprit.es), [element-to-path](https://github.com/elrumordelaluz/element-to-path), [path-that-svg](https://github.com/elrumordelaluz/path-that-svg), [scale-that-svg](https://github.com/elrumordelaluz/scale-that-svg), [svg-path-tools](https://github.com/elrumordelaluz/svg-path-tools).

## Selected work

**At [Pixeden LLC](https://www.pixeden.com) as CTO and lead full-stack engineer** — I own the architecture, the technical direction and the full-stack build; the products belong to the company.

- **[Pixeden](https://www.pixeden.com)** — design-assets subscription marketplace, ~15k visitors/day, close to a decade live and rewritten underneath itself: a monolith into Node microservices for auth, payments and downloads behind a Next.js BFF, Mongo + Redis, self-hosted. The migration carried a live Joomla/MySQL user base into Mongo lazily — old passwords kept working on first login.
- **[Lingrem](https://www.lingrem.com)** — spaced-repetition language platform, web + iOS from one Next.js/Capacitor codebase. A model generates learning content into Zod-validated structured formats; the SM-2 scheduling stays deterministic behind a separate GraphQL API.
- **[Orion Icon Library](https://www.orioniconlibrary.com)** — real-time SVG icon customization: recolor named layers live, export SVG, sprite, icon-font or PDF. Its parser became svgson. No AI.
- **[Floweden](https://www.floweden.com)** — a config-driven full-stack framework. Declare the data model once as typed kinds; get the GraphQL server, the client operations and a kind-parameterized admin dashboard. Published as `@floweden/*` and powering real client sites — [Lu Photos](https://lu-photos.com/), [i-NEEA](https://www.i-neea.ch/), [Neocorner](https://www.neocorner.fr/), [The Collection Paris](https://www.thecollectionparis.com/).

**My own**

- **[Tipoff](https://tipoff.insideframe.it)** — a basketball live-stats and digital scoresheet app for a coach or statistician working a real game single-handed: a fixed landscape canvas that scale-to-fits any tablet, Vite/React with offline-first CRDT sync (Y.js + y-partykit, one Durable Object per game). Single-device scoring is locked; the multi-writer slice is open work.
- **[InsideFood](https://food.insideframe.it)** — a local-first PWA to track what you eat and when, with a photo and notes. No accounts and no server: everything stays on-device via Dexie/IndexedDB, installable to the Home Screen, with Backup as a first-class action.
- **[Spik](https://spik.club)** — photo-plus-voice-note capture: shoot a photo, record a narration over it, tag location, then keep it locally or share via encrypted ephemeral links. Web and iOS from one Next.js/Capacitor codebase; on the App Store.

**In progress**

- **[Mockupccino](https://app.mockupccino.app)** — a Python engine that decodes Photoshop smart-object perspective and mesh warps and composites artwork near-interactively, behind FastAPI and a Next.js editor. A working MVP, built by pairing with AI, where the render engine stays deliberately deterministic.
- **[Aperture](https://studio.aperture.pictures)** — multi-tenant SaaS letting photographers run branded photo-selling stores: Next.js, tRPC, Postgres with row-level security, Stripe Connect.

## Stack

TypeScript · React · Next.js · Node · GraphQL · tRPC · Python · FastAPI · MongoDB · Postgres · Redis · Stripe · Capacitor · three.js · Tailwind · Docker · self-hosted & Vercel

## Elsewhere

[LinkedIn](https://www.linkedin.com/in/lioneltz) · [Mastodon](https://mastodon.uno/@elrumordelaluz) · [Codepen](https://codepen.io/elrumordelaluz/) · [Dribbble](https://dribbble.com/elrumordelaluz/) · [Behance](https://www.behance.net/elrumordelaluz) · [Email](mailto:me@lionelt.dev)

<sub>Argentinean, based in a small hamlet in Italy near a lake. Mate drinker, pandeiro player, deep-sky observer.</sub>
