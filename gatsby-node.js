const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              path
              date(formatString: "DD MMMM, YYYY")
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
      const id = edge.node.id
      console.log(edge.node.frontmatter)
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `./src/post.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

 
  })
}