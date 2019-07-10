module.exports = {
    metadata: {
        title:"Robert Lovin",
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
    },
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-sharp`,
    'gatsby-image',
    'gatsby-plugin-emotion',
    {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: "src/utils/typography",
            },
        },
    ],
}