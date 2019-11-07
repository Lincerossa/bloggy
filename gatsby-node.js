const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              location
              date(formatString: "DD MMMM, YYYY")
              featuredImage
              slider {
                image
              }
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
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `./src/post.js`
        ),
        context: edge
      })
    })
  })
}

