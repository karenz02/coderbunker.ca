# coderbunker.ca
Coderbunker Canada landing page

Brief: https://docs.google.com/document/d/1xpbedH1DP_uP1s9IhstSerLtQEcD-CYtuRYbqVcE-C8/edit#

Production: [coderbunker.ca](https://coderbunker.ca/)

Staging: [coderbunker-staging.netlify.app](https://coderbunker-staging.netlify.app/)

## Framework

* [Gatsby.js](https://www.gatsbyjs.com/)
* [i18next](https://github.com/microapps/gatsby-plugin-react-i18next)
* [Tailwind CSS](https://tailwindcss.com/)
* [styled-components](https://styled-components.com/)
* [Netlify](https://www.netlify.com/)

## What was completed?


## What still needs to be done?


## Documentation

### Production

Continuous Deployment on Netlify of the main branch of this repo (i.e. everytime code got merged onto the **main** branch, it will trigger a rebuild on Netlify. Changes can be seen at [coderbunker.ca](https://coderbunker.ca/)
To be added to Netlify, contact carmenhyng89@gmail.com

### Staging

Continuous Deployment of the staging branch on Netlify (similar to above with the **staging** branch) Changes can be seen at [coderbunker-staging.netlify.app](https://coderbunker-staging.netlify.app/)

### Build
```
npm run build
```
or
```
gatsby build
```
### Deploy to gh-pages
```
npm run deploy
```
or
```
gatsby build --prefix-paths && gh-pages -d public -r git@github.com:coderbunker/coderbunker.ca.git
```
