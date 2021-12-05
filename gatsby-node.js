const { createFilePath } = require(`gatsby-source-filesystem`)
const { resolve } = require('path')

/**
 * Modify webpack config; resolve src-folder as root
 * TL;DR https://www.gatsbyjs.org/docs/add-custom-webpack-config/
 */
module.exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

/**
 * Add filename as slug to each markdown object
 */
// module.exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  // if (node.internal.type === 'MarkdownRemark') {
  //   createNodeField({
  //     node,
  //     name: 'slug',
  //     value: createFilePath({ node, getNode, basePath: 'pages' }),
  //   })
  // }
// }

/**
 * Create all markdown pages by slug
 */
// module.exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const result = await graphql(`
//     {
//       allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
//         nodes {
//           id
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   /**
//    * Define pages array for easier handling
//    */
//   const pages = result.data.allMarkdownRemark.nodes
//   /**
//    * Loop through pages array and each page object
//    */
//   pages.forEach((page, index) => {
//     /**
//      * Define previous and next page id's for pagination
//      */
//     const previousId = pages[(index + pages.length - 1) % pages.length].id
//     const nextId = pages[(index + 1) % pages.length].id
//     /**
//      * Apply all above in order to actually create page object
//      */
//     createPage({
//       path: page.fields.slug,
//       component: resolve(
//         `${__dirname}/src/components/Page/Page.tsx`,
//       ),
//       context: {
//         id: page.id,
//         previousId,
//         nextId,
//       },
//     })
//   })
// }
