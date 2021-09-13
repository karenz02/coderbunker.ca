module.exports = {
  pathPrefix: "/coderbunker.ca",
  siteMetadata: {
    title: `Coderbunker Canada`,
    author: `@Carms-dev`,
    description: `Coderbunker est une communauté internationale de passionnés de développement logiciel. Nous fonctionnons sur une base de budget d'ingénierie mensuels prépayés sur lesquels nous recrutons des équipes formées de talents flexibles qui participent activement dans la construction d'une communauté qui les rends heureux.`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/content`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/assets/images/coderbunker-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://coderbunker.ca/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: []
      }
    }
  ],
}
