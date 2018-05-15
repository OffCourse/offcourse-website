module.exports = {
  siteMetadata: {
    title: 'Offcourse Marketing website',
  },
  pathPrefix: '/offcourse-website',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-plugin-react-next',
    'gatsby-plugin-tracking',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
          },
        },
        'gatsby-remark-copy-linked-files',
      ],
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
