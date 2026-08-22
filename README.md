# Gopinath — AI & ML Engineer Portfolio

A retro terminal-style portfolio for **Gopinath**, a CSE (AI) student, Co-Founder at LoopFound, and founder of the AI Foundry '29 student community.

Built with Astro, Tailwind CSS, and TypeScript.

## Highlights

- Interactive CLI terminal with command history and autocomplete
- Visual TUI dashboard with project, experience, internship, ambassador, and events sections
- Visitor-name greeting at the start of each page load
- CRT scanlines, Matrix rain, sound effects, and switchable terminal themes
- Contact form, social links, and mobile-friendly dashboard mode

## Portfolio content

The profile includes:

- AI/ML and full-stack projects, including ResponSync, HabitLoop, and Digital Horizon Conclave 2026
- Leadership, community, internship, and campus ambassador experience
- Speaking, organizing, and participation history for technical events

All portfolio content is managed in [src/data/portfolio.ts](src/data/portfolio.ts).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

To create a production build:

```bash
npm run build
```

## Terminal commands

| Command | Description |
| --- | --- |
| `help` | List all commands |
| `about` | View profile summary |
| `skills` | View technical skills |
| `projects` | View selected projects |
| `experience` | View leadership, community, and technical roles |
| `internships` | View internship experience |
| `ambassadors` | View campus ambassador roles |
| `events` | View speaking, organizing, and event participation history |
| `companies` | List organizations, clubs, companies, and colleges worked with |
| `neofetch` | View the terminal profile card |
| `contact` | View contact information |
| `links` | View GitHub and LinkedIn links |
| `theme green` | Switch the terminal theme (`green`, `amber`, `cyan`, `dracula`, `mono`) |
| `gui` / `cli` | Switch between dashboard and terminal modes |
| `matrix`, `crt`, `sfx`, `clear` | Toggle effects or clear the terminal |

## Deployment

The project outputs a static site and can be deployed on Vercel, Netlify, or Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`

## Credits

The terminal UI began from the MIT-licensed [astro-tui-portfolio](https://github.com/nivinvysakh/astro-tui-portfolio) template and has been extensively customized for this portfolio.

## License

MIT. See [LICENSE.MD](LICENSE.MD).
