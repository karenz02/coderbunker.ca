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
├── src
│   ├── assets
│   │   ├── content
│   │   ├── fonts
│   │   ├── images
│   │   │   └── portraits // 👈 add team member image here
│   │   └── pdfs // 👈 add the Retainer Agreement here
│   ├── components
│   │   ├── button.js
│   │   └── //  👈 add reusable components, etc...
│   ├── pages
│   │   ├── 404.js
│   │   └── index.js
│   ├── pdfs
│   │   └── placeholder.pdf
│   └── styles
├── gatsby-browser.js
├── gatsvy-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── postcss.config.js
└── tailwind.config.js

```

## Team Content

#### Add a team member

1. Add an image in the `team` folder. 

   - Name the images following the format starting with `002`
   - it will be displayed as part of the stacked avatar and the team carousel if included in the team.json.

```
├── src
    ├── assets
        ├── content
        │   └── team.json // 👈 add team member info here
        ├── images
            └── portraits // 👈 add team member image here
                ├── 001_ricky_ng_adam.jpg
                └── 002_etc...
```

2. Add a slide to the team carousel

```
{
  "content": [
    {
      "name": "Ricky Ng-Adam",
      "title": "Founder, CoderBunker",
      "linkedin": "https://www.linkedin.com/in/rngadam/",
      "github": "https://github.com/rngadam",
      "image": "001_ricky_ng_adam.jpg", // 👈 reference the image in the `team` folder
      "highlights": [ // 👈 optimal length <= 7
        "25 years experience in software development",
        "Architecture, design, R&D",
        "Team recruitment, building and coaching",
        "Javascript, Python, C/C++, bash, plpgsql",
        "API: REST, Websockets, GraphQL",
        "Deployment (Linux, Ansible, Cloud, Docker)",
        "Database (PostgreSQL)"
      ]
    },
    { ...next member }
  ]
}
```

## Translation

#### add/remove translation strings

```
├── locales 
    └── fr
        ├── team.json // 👈 add FR string specific to the team member info
        └── index.json // 👈 add the rest of the FR string
```
