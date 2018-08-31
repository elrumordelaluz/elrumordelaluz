module.exports = {
  siteMetadata: {
    title: 'Lionel Tzatzkin (elrumordelaluz)',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-21983425-1`,
      },
    },
  ],
}
