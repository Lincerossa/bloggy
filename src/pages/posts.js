import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import ImageDistorsion from "../../components/ImageDistorsion";

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges


  return (
    <>
    {
      posts.map(post => <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>)  
    }
      
    </>
  )
}

export const query = graphql`
query Posts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
}

`