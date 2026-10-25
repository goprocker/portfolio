# Issue report

## Build fails during Astro content sync

- Status: Resolved
- Severity: High
- Reproduction: `npm run build`
- Observed error: `require is not defined`
- Failure location: `node_modules/picomatch/index.js:6:14`
- Astro reports the failure while generating content collection types from `src/content.config.ts`.

Astro's temporary content-sync environment disables automatic dependency discovery. Its content pipeline imports the CommonJS packages `picomatch` and `yaml`, so Vite evaluated their raw `require()` calls as ESM.

The Astro environment now explicitly prebundles both packages through `optimizeDeps.include`. TypeScript was also restored to the supported 6.x range required by `@astrojs/check`. A production build and Astro check now verify the resolution.
