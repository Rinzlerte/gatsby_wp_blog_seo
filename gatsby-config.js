/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Tesejz Gatsby-Site",
    description : "This is description of our website",
    keywords : "gatsby, gatsbyjs project, gatsby bootstrap",
    image : '/static/gatsby-cheers.jpg',
    url : 'https://www.gatsbyjs.org/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tesejz Gatsby-Site`,
        short_name: `Tesejz Gatsby-Site`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ]
}

