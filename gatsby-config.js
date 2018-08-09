module.exports = {
  siteMetadata: {
    title: 'Big +',
    desc: 'A new Blog'
  },
  plugins: ['gatsby-plugin-react-helmet', 
            'gatsby-plugin-styled-components', 
            {
            resolve: 'gatsby-source-filesystem', 
            options: {
                name: "img",
                path: `${__dirname}/src/images`
              }
            },
            {
            resolve: 'gatsby-source-filesystem', 
            options: {
                name: "img",
                path: `${__dirname}/static/assets`
              }
            },
            {
              resolve: 'gatsby-source-filesystem', 
              options: {
                name: "src",
                path: `${__dirname}/src/`
              }
            },
            {
              resolve: 'gatsby-transformer-remark', 
              options: {
                excerpt_separator: `<!-- end -->`
              }
            },
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-resolve-src',
            // {
            //   resolve: `gatsby-plugin-netlify-cms`,
            //   options: {
            //     // One convention is to place your Netlify CMS customization code in a
            //     // `src/cms` directory.
            //     modulePath: `${__dirname}/src/cms/cms.js`,
            //   }
            // }
            'gatsby-plugin-netlify-cms'
            
          ]
        }
        // pathPrefix:"/gatsby",
