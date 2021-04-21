# coderbunker.ca
Coderbunker Canada landing page

Brief: https://docs.google.com/document/d/1xpbedH1DP_uP1s9IhstSerLtQEcD-CYtuRYbqVcE-C8/edit#

Production: [coderbunker.ca](https://coderbunker.ca/)

Staging: [coderbunker-staging.netlify.app](https://coderbunker-staging.netlify.app/)

## Framework

* [Gatsby](https://www.gatsbyjs.com/)
* [i18next](https://github.com/microapps/gatsby-plugin-react-i18next)
* [Tailwind CSS](https://tailwindcss.com/)
* [styled-components](https://styled-components.com/)
* [Netlify](https://www.netlify.com/)

## What was completed?

* Wireframe (Phase 1): [figma](https://www.figma.com/proto/v1GDDcPMpdDOgRBmwTnDQo/CoderBunker?node-id=419%3A47&scaling=min-zoom&page-id=201%3A1183)
* One-pager (Phase 1): [Pull Request](https://github.com/coderbunker/coderbunker.ca/pull/2)

## What still needs to be done?

* Refer to this [issue](https://github.com/coderbunker/coderbunker.ca/issues/1)
* Phase 2: To be envisioned

## How to deploy? 

### Production (Netlify)

Continuous Deployment on Netlify of the main branch of this repo (i.e. everytime code got merged onto the **main** branch, it will trigger a rebuild on Netlify. 

Changes can be seen 👉 [coderbunker.ca](https://coderbunker.ca/)

To be added to Netlify, contact carms.ng@technolibre.ca

### Staging (Netlify)

Continuous Deployment of the staging branch on Netlify (similar to above, but with the **staging** branch) 

Changes can be seen 👉 [coderbunker-staging.netlify.app](https://coderbunker-staging.netlify.app/)

### Pre-staging (gh-pages)

Note that Netlify has limits on build minutes.  Go with gh-pages first.

Changes can be seen 👉 [coderbunker.github.io/coderbunker.ca](https://coderbunker.github.io/coderbunker.ca/)


```
gatsby clean
npm run deploy
```
or
```
gatsby clean
gatsby build --prefix-paths && gh-pages -d public -r git@github.com:coderbunker/coderbunker.ca.git
```

### Build
```
npm run build
```
or
```
gatsby build
```

## Structure of code



```
coderbunker
├── locales 
│   ├── en
│   │   └── translation.json // 👈 add EN string here
│   └── fr
│       └── translation.json // 👈 add FR string here
├── src
│   ├── assets
│   │   ├── content
│   │   │   └── team.json // 👈 add team member info here
│   │   ├── fonts
│   │   ├── images
│   │   │   └── team // 👈 add team member image here
│   │   │       ├── 001_ricky_ng_adam.jpg
│   │   │       └── 002_etc...
│   │   └── pdfs // 👈 add the Retainer Agreement here
│   ├── components
│   │   ├── button.js
│   │   └── // reusable components, etc...
│   ├── pages
│   │   ├── 404.js
│   │   └── index.js
│   ├── pdfs
│   │   └── placeholder.pdf
│   └── styles
└── gatsby-browser.js

```

## Team Content


## Translation
