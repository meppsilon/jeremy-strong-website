const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const postCssPlugins = require('./postcss.config.js').plugins;

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              section
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const { id, frontmatter: { section, templateKey }, fields: { slug } } = edge.node;
      if (templateKey) {
        createPage({
          path: slug,
          component: path.resolve(
            `src/templates/${String(templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            section
          },
        });
      }
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.modifyWebpackConfig = ({ config }) => {

  config.merge({
    postcss() {
      return postCssPlugins;
    }
  });

  return config;
}
