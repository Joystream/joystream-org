require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://joystream.org',
  },
  plugins: [
    'gatsby-plugin-polyfill-io',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylelint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        exclude: /(hydra-hero.svg)$/,
      },
    },
    'gatsby-plugin-anchor-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_ID,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/locales`,
        name: 'locale',
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to `gatsby-source-filesystem` plugin.
        languages: ['en', 'ru', 'zh', 'es', 'fr'],
        defaultLanguage: 'en',
        siteUrl: 'https://www.joystream.org/',
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/',
            languages: ['en', 'ru', 'zh', 'es', 'fr'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appNF9hNyOvfP5lvG',
            tableName: 'BountyLabel',
          },
          {
            baseId: 'appNF9hNyOvfP5lvG',
            tableName: 'Integrator',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
