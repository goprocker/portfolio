# GOPINATH — AI & ML Engineer Portfolio

Retro terminal-style portfolio for GOPINATH: CSE (AI) student, Co-Founder at LoopFound, founder of the AI Foundry '29 student community, and active AI/frontend intern.

Built with Astro 7, Tailwind CSS 4, and TypeScript 6.

## Current roles

- **AI Engineer Intern** — Redrox Industries PVT Limited (August 2026 – Present)
- **Frontend/UI Developer Intern** — SynosAI (2026 – Present)
- **Co-Founder & CMO** — LoopFound (August 2025 – Present)
- **Founder & Lead** — AI Foundry '29 (2025 – Present)

Recent ambassador work includes serving as an **IIT Delhi Rendezvous Campus Ambassador** from August 2026 to October 2026.

## Features

- Interactive terminal and GUI dashboard modes
- Projects, experience, internships, ambassador work, and events
- GitHub contribution graph and visitor-name greeting
- CRT effects, Matrix rain, sound effects, and terminal themes
- Responsive mobile dashboard and contact form

## Development

```bash
npm install
npm run astro -- dev --background
```

Manage the background server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

Production checks:

```bash
npm run build
npm run check
```

## Content

Portfolio roles, internships, projects, events, and profile details are managed in [src/data/portfolio.ts](src/data/portfolio.ts). Project case studies live in `src/content/projects/`.

## Credits

Based on the MIT-licensed [astro-tui-portfolio](https://github.com/nivinvysakh/astro-tui-portfolio) template and extensively customized for this portfolio.

## License

MIT. See [LICENSE.MD](LICENSE.MD).
