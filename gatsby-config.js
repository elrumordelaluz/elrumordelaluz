module.exports = {
  siteMetadata: {
    title: 'elrumordelaluz | Lionel Tzatzkin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-21983425-1`,
      },
    },
  ],
}
