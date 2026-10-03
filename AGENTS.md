# Codex Commit Messages

For every commit authored during a Codex session:

1. Use a concise Conventional Commit subject that describes the change.
2. Add a short, commit-specific body explaining what changed and why. Write it from the actual diff; never reuse generic wording or invent context.
3. Leave a blank line between the subject, body, and trailers.
4. Append this trailer unless the repository defines a different required Codex attribution:

```text
Co-authored-by: Jarvis <technicalmanjash@gmail.com>
```

Never add a Claude attribution or Claude session URL to work performed by Codex. Do not fabricate a Codex session URL when none is available.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
