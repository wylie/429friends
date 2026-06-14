# 429 Friends

Project documentation for the 429 Friends website. This README replaces the default Astro starter content and uses [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md) as the source of truth for project decisions.

## Project Overview

429 Friends is a simple website for a monthly outdoor Meeting for Worship held in a private backyard in Hendersonville, North Carolina.

The site exists to:

- Explain what the meeting is
- Help first-time visitors feel comfortable
- Share practical arrival details
- Publish upcoming meeting dates
- Provide contact information
- Support a welcoming local community

The audience includes Quakers, non-Quakers, atheists, agnostics, spiritual seekers, and curious neighbors. The site is intentionally informational and largely static. It is rooted in the Quaker tradition of unprogrammed Meeting for Worship, but it is designed to feel more like a neighborhood gathering than a formal religious institution.

## Technology

The project follows the technology direction defined in [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md):

- `Astro` for static site generation
- `Astro Islands` where interactive behavior is needed
- `HTML` for semantic page structure
- `CSS` for styling
- `Vanilla JavaScript` for lightweight client behavior
- `GitHub Pages` as the hosting target

The site intentionally avoids React, Vue, Tailwind, Bootstrap, databases, authentication, and CMS platforms. The goal is a lightweight, maintainable static site that can be deployed without extra infrastructure.

## Local Development

### Requirements

- Node.js `>=22.12.0`
- npm

### Install dependencies

```sh
npm install
```

### Start the development server

Uses the project script in [`package.json`](/Users/wylie/Repos/429friends/package.json):

```sh
npm run dev
```

Astro will start the local site, typically at `http://localhost:4321`.

### Build the site

```sh
npm run build
```

This generates the production-ready static site in `dist/`.

### Preview the production build

```sh
npm run preview
```

Use preview after building when you want to inspect the generated output locally.

## Project Structure

Major directories and configuration files:

- [`src/pages`](/Users/wylie/Repos/429friends/src/pages) contains route-level Astro pages such as the home page, schedule, visit guide, resources, and contact page.
- [`src/components`](/Users/wylie/Repos/429friends/src/components) contains reusable UI building blocks such as hero sections, cards, callouts, galleries, FAQs, and schedule displays.
- [`src/layouts`](/Users/wylie/Repos/429friends/src/layouts) contains shared page wrappers, including the global document shell and site chrome.
- [`src/content`](/Users/wylie/Repos/429friends/src/content) contains structured content collections. Meeting schedule entries live here as JSON files.
- [`src/assets`](/Users/wylie/Repos/429friends/src/assets) contains source images processed by Astro's asset pipeline.
- [`src/data`](/Users/wylie/Repos/429friends/src/data) contains shared data modules, including photo exports used across pages.
- [`src/config`](/Users/wylie/Repos/429friends/src/config) contains centralized site configuration such as the name, contact info, navigation, meeting details, and SEO defaults.
- [`src/lib`](/Users/wylie/Repos/429friends/src/lib) contains helper functions for working with shared data, especially the meeting schedule.
- [`src/styles`](/Users/wylie/Repos/429friends/src/styles) contains global CSS.
- [`public`](/Users/wylie/Repos/429friends/public) contains static public assets that are copied through without Astro image processing.
- [`src/content.config.ts`](/Users/wylie/Repos/429friends/src/content.config.ts) defines the Astro Content Collections schema for meeting entries.
- [`astro.config.mjs`](/Users/wylie/Repos/429friends/astro.config.mjs) contains Astro configuration, including the production site URL.
- [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md) is the source of truth for architecture, content, design, and workflow decisions.

## Content Management

This project is structured so non-experts can update common content in one place rather than editing multiple pages.

### Update meeting dates

Meeting schedule data is stored in [`src/content/meetings`](/Users/wylie/Repos/429friends/src/content/meetings).

Each meeting is a JSON file validated by the Astro Content Collections schema in [`src/content.config.ts`](/Users/wylie/Repos/429friends/src/content.config.ts). The schema currently requires:

- `date`
- `time`
- `startsAt`
- `status`
- `notes`

The schedule UI reads these entries through [`src/lib/meetings.ts`](/Users/wylie/Repos/429friends/src/lib/meetings.ts), sorts them by date, and reuses them across the site.

To add a future meeting:

1. Create a new JSON file in `src/content/meetings`.
2. Use the meeting date as the filename, for example `2027-02-14.json`.
3. Match the existing field structure exactly.
4. Set `startsAt` to a valid ISO date-time with timezone offset so sorting and formatting stay correct.
5. Run `npm run build` to confirm the content passes schema validation.

Example:

```json
{
  "date": "February 14, 2027",
  "time": "10:30 AM",
  "startsAt": "2027-02-14T10:30:00-05:00",
  "status": "scheduled",
  "notes": "Outdoor meeting in the backyard, followed by informal conversation."
}
```

Valid `status` values are:

- `scheduled`
- `weather-watch`
- `canceled`

### Update contact information

Edit [`src/config/site.ts`](/Users/wylie/Repos/429friends/src/config/site.ts).

This file centralizes:

- Site name
- Tagline
- Domain
- Contact email
- Public location text
- Address note
- Meeting details
- Social links
- Navigation
- Default SEO values

If contact information, meeting description, or navigation changes, update `siteConfig` first before editing page copy.

### Add photographs

Add source images to [`src/assets`](/Users/wylie/Repos/429friends/src/assets), then register them in [`src/data/photos.ts`](/Users/wylie/Repos/429friends/src/data/photos.ts).

That file controls:

- Gallery image imports
- Alt text
- Captions
- Hero image assignments
- Shared photo groupings used across pages

Adding a file to `src/assets` alone is not enough. Pages render photos from the exports in `photos.ts`.

### Modify resources

The current resources list is defined directly in [`src/pages/resources.astro`](/Users/wylie/Repos/429friends/src/pages/resources.astro).

To update resources:

1. Edit the `resources` array in that page.
2. Update each item's `title`, `description`, `href`, and optional `label`.
3. Run the build to verify the page still renders correctly.

If the resources list grows substantially, consider moving it into a shared data file, but keep the change aligned with [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md) and avoid unnecessary abstraction.

### Update site configuration

Use [`src/config/site.ts`](/Users/wylie/Repos/429friends/src/config/site.ts) for any site-wide change that should stay consistent across multiple pages. This is the main shared source for branding, contact details, meeting copy, navigation, and SEO defaults.

## Meeting Schedule

Meeting schedule data is stored in the Astro Content Collection at [`src/content/meetings`](/Users/wylie/Repos/429friends/src/content/meetings).

Astro Content Collections are being used here so meeting entries are:

- Stored as individual structured files
- Validated against a schema during builds
- Loaded through `astro:content`
- Reused in multiple components without duplicating data

The workflow is:

1. Add or edit a JSON file in `src/content/meetings`.
2. Astro validates the file against [`src/content.config.ts`](/Users/wylie/Repos/429friends/src/content.config.ts).
3. [`src/lib/meetings.ts`](/Users/wylie/Repos/429friends/src/lib/meetings.ts) loads, sorts, and formats the entries.
4. Components such as [`src/components/ScheduleDisplay.astro`](/Users/wylie/Repos/429friends/src/components/ScheduleDisplay.astro) and [`src/components/NextMeetingDisplay.astro`](/Users/wylie/Repos/429friends/src/components/NextMeetingDisplay.astro) render the updated schedule automatically.

For future meetings, prefer adding a new entry rather than hardcoding a date into a page.

## Photography

Photography is a core part of the visual design. The project direction in [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md) prioritizes authentic images of the actual meeting location over stock photography.

### Storage

- Store source photos in [`src/assets`](/Users/wylie/Repos/429friends/src/assets).
- Keep favicon and other pass-through public assets in [`public`](/Users/wylie/Repos/429friends/public) only when they do not need Astro image processing.

### Preferred formats

- Prefer `JPEG` for photographs.
- Use `PNG` only when transparency or lossless export is required.
- Avoid oversized originals when a well-compressed image will do.

### Optimization workflow

The site uses Astro's asset pipeline and the `Image` component in [`src/components/Gallery.astro`](/Users/wylie/Repos/429friends/src/components/Gallery.astro).

Current behavior includes:

- Astro-managed image imports from `src/assets`
- Responsive widths
- `webp` output for gallery rendering
- Lazy loading for non-primary images

Recommended workflow:

1. Start with a reasonably sized source image.
2. Add the file to `src/assets`.
3. Import it in `src/data/photos.ts`.
4. Write accurate alt text and caption text.
5. Use the exported photo in a gallery or hero slot.
6. Run `npm run build` and visually verify the result.

### Recommended dimensions

There is no single enforced size in code, but the current gallery renders up to `1400px` wide variants. For new photography:

- Aim for source images at roughly `1600px` to `2400px` on the long edge.
- Keep aspect ratios visually consistent within a gallery when possible.
- Prefer landscape images for hero and gallery use unless a specific design calls for portrait cropping.

## Deployment

The deployment target is GitHub Pages, and the site is built as a static Astro project with no server dependencies.

Important deployment details:

- Production build command: `npm run build`
- Build output directory: `dist/`
- Site URL is configured in [`astro.config.mjs`](/Users/wylie/Repos/429friends/astro.config.mjs) as `https://429friends.org`
- The project must remain statically deployable with no database, authentication, or server runtime

The repository does not currently include a committed GitHub Actions workflow for Pages deployment. That means the expected process is:

1. Build the site locally or in CI with `npm run build`.
2. Publish the generated `dist/` output through the GitHub Pages setup used by the repository.
3. Ensure any deployment configuration keeps the site fully static.

If a GitHub Actions workflow is added later, keep it aligned with this static build model and avoid introducing server-only features.

## Design Philosophy

Per [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md), the site should feel warm, calm, welcoming, community-oriented, and nature-centered.

Key principles:

- Nature-centered design: Use real backyard and garden imagery, natural textures, and an outdoor gathering sensibility.
- Community-oriented design: Present the meeting as a local shared practice rather than an institution.
- Accessibility goals: Maintain semantic HTML, keyboard access, visible focus states, sufficient contrast, alt text, and WCAG AA-minded decisions.
- Welcoming first-time visitors: Reduce uncertainty, avoid insider language, and explain Quaker terms in plainspoken language.

## Contributing

When making changes:

- Run `npm run build` before committing.
- Verify responsive layouts, especially after content or image changes.
- Preserve accessibility standards and semantic structure.
- Follow [`agent-instructions.md`](/Users/wylie/Repos/429friends/agent-instructions.md) for project decisions, tone, architecture, and design direction.

This repository currently has no separate automated test suite, so a successful production build is the primary verification step.
