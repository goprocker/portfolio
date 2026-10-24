# Issue report

## Build fails during Astro content sync

- Status: Open
- Severity: High
- Reproduction: `npm run build`
- Observed error: `require is not defined`
- Failure location: `node_modules/picomatch/index.js:6:14`
- Astro reports the failure while generating content collection types from `src/content.config.ts`.

The site does not produce a verified production build until the Astro, Vite, and picomatch dependency interaction is resolved. This report records the blocker without changing dependency versions or application behavior.
