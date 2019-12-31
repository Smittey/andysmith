require('dotenv').config({
  path: `.env`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    name: `Andy Smith`,
    title: `Andy Smith`,
    location: `London, UK`,
    description: `Personal website of Andy Smith, software engineer based in London, UK`,
    author: `@smittey`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        icon: `src/assets/images/a-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}



// module.exports = {
//   siteMetadata: {
//     title: 'Gatsby Contentful starter',
//   },
//   pathPrefix: '/gatsby-contentful-starter',
//   plugins: [
//     'gatsby-transformer-remark',
//     'gatsby-transformer-sharp',
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-sharp',
//     {
//       resolve: 'gatsby-source-contentful',
//       options: contentfulConfig,
//     }
//   ],
// }
