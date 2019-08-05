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
    'gatsby-plugin-svgr',
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
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: process.env.HJ_ID,
        sv: process.env.HJ_SV,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium Web:200,400,600,700'],
        },
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
