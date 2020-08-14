const config = require('./src/config/index');

module.exports = {

    siteMetadata: {
        title: config.title,
        description: config.description,
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
