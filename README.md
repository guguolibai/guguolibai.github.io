# Yaoyuzhi Wang — Academic Homepage

An English-only academic homepage for Yaoyuzhi Wang at Sichuan University. Built with Vue 3 and Vite; deployed to GitHub Pages.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to create `dist/`, or `npm run preview` to inspect the production build.

## Edit content

All personal information, news, research interests, and publication entries are in `src/content.js`. The `news` array populates the What's New section immediately below the introduction. Use only confirmed dates, with the year alone when the month is unknown. Empty CV, Scholar, or email fields hide their links. Empty news or publications arrays hide the corresponding section and navigation link.

DUET is listed as **ACM MM 2026**. Its paper link is intentionally disabled (`paper: null`), and the manuscript PDF is excluded from the site and source package. Do not add a downloadable copy until the owner authorizes release. A null resource link renders as a disabled label; a URL enables the link.

Add a paper using this data shape, replacing every sample value with verified information:

```js
{
  title: 'Paper title',
  authors: ['Yaoyuzhi Wang', 'Coauthor name'],
  venue: 'Conference or journal',
  year: '2026',
  image: '/images/paper-figure.png', // Optional.
  imageAlt: 'Description of the figure',
  description: 'Brief summary.', // Optional.
  links: { paper: 'https://example.com/paper' },
}
```

Place images and a public CV in `public/`. The current avatar comes from the owner's public GitHub profile. Replace `public/images/avatar.jpg` with a preferred photo when available.

## Deployment

The existing `.github/workflows/deploy.yml` builds and publishes pushes to `main`. The repository should use **GitHub Actions** as the GitHub Pages source. The intended address remains `https://guguolibai.github.io/`.

## Visitor map

`SiteAnalytics.vue` integrates the same MapMyVisitors map used by the reference homepage. Create a free map widget for `https://guguolibai.github.io/` at https://mapmyvisitors.com/add, then copy the `d=` identifier from that site's embed code into `analytics.mapId` in `src/content.js`. Set `analytics.since` to the month when tracking actually begins. No password or account credential belongs in this configuration.

The map is centered at a maximum width of 400px and scales to the available width. Tracking runs only on `guguolibai.github.io`, not on local previews. Until a site-specific identifier is configured, development shows an empty preview area and production hides the section. Counts and locations always come from MapMyVisitors; no sample visits or historical counts are supplied. The provider receives visitor requests and displays approximate geolocation, rather than requesting the browser's precise location.

## Design

The page follows the EchoPickle/AcadHomepage reference with a plain white background, Trebuchet MS / Helvetica typography, 15px body text, 21px section headings, #494e52 body text, and #224b8d links. It uses a profile sidebar, simple content lists, and publication figures alongside text. The Vue components and CSS are written for this site. There are no language controls, background illustrations, gradients, or decorative cards.

Section markers reuse the reference page's emoji style. The sidebar icons use its Font Awesome Free 5.5.0 font files, distributed under SIL OFL 1.1; attribution and licensing are included in `THIRD_PARTY_NOTICES.md` and `public/licenses/font-awesome-LICENSE.txt`.
