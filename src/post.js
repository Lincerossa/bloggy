import React from "react"

export default (props) => {
  const {pageContext} = props
  console.log(pageContext.node.frontmatter)
  return <div>
    <h1>{pageContext.node.frontmatter.title}</h1>
    <h2>{pageContext.node.frontmatter.date}</h2>
    <img src={pageContext.node.frontmatter.featuredImage} />
    
  </div>
}

