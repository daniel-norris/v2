const config = require('./src/config/index');

module.exports = {

    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescription,
        author: config.author,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
    ],
}
