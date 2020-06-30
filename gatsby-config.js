module.exports = {
  siteMetadata: {
    title: `Ernest Oliver Casanes Official Github`,
    description: `This is my official Github page in which I will present my most recent projects and links to my resume and email. Be sure to follow me at @ecasanes on twitter.`,
    author: `@ecasanes`,
    keywords: `Ernest, Casanes, Ernest Oliver, resume, react-developer, react, frontend, backend, fullstack, software engineer`,
    url: `http://ecasanes.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Muli\:300,400,500,700,800,900`
          //`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ernest-mobile.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
