const config = require('./src/config/index');

module.exports = {

    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescription,
        author: config.author,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
                name: `content`,
            },
        },
    ],
}
