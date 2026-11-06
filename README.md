# goprOS — Gopinath R

The portfolio of **Gopinath R**: full-stack developer and AI engineer from Chennai, co-founder of [LoopFound](https://loopfound.in), and Tech Lead at Redrox Industries.

**Live:** [gopinath.loopfound.in](https://gopinath.loopfound.in)

The site is built as a small desktop OS, inspired by my own desktop apps [Islet](https://github.com/goprocker/Islet) and [Orbi](https://github.com/goprocker/Orbi):

- **Boot intro:** a beam of light becomes the notch and says hello in Tamil, Hindi and English
- **Islet-style notch:** live status, clock, quick launcher and light/dark theme
- **Dock** navigation, draggable desktop widgets, and every section as an app window
- **Live from GitHub:** what I'm building now, the bench, project push times and the contribution graph
- **Terminal** at [`/terminal`](https://gopinath.loopfound.in/terminal): the whole portfolio from a command line

## Stack

Astro 7 · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

`npm run check` type-checks the project and `npm run build` creates the production build in `dist/`.

## Editing content

Everything shown on the site lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): projects, roles, organizations, events, stack and principles. Events are sorted by date automatically, and roles with `status: "COMPLETED"` move to "Past roles".

## License

[MIT](LICENSE) © 2026 Gopinath R
