/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components', 
      {
       resolve: `gatsby-source-contentful`,
       options: {
         spaceId: process.env.CONTENTFUL_SPACE_ID,
         accessToken: process.env.CONTENTFUL_TOKEN, 
       },
     },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `400`, `600`]
          }
        ],
      },
    }],
}

// 'gatsby-transformer-sharp', 
// 'gatsby-plugin-sharp',
// 'gatsby-image',
// {
//   resolve: 'gatsby-source-filesystem',
//   options: {
//     name: 'images',
//     path: path.join(__dirname, 'src', 'assets', 'images'),
//   },
// },