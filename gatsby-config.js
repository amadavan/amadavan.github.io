/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/PersonalWebsite',
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src//scss"],
      },
    },
  ],
};
