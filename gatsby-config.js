module.exports = {
  siteMetadata: {
    title: 'elrumordelaluz | Lionel Tzatzkin',
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
