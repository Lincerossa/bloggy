import React from "react"

export default (props) => {
  const {pageContext} = props



  return <div>
    <h1>{pageContext.node.frontmatter.title}</h1>
    <h2>{pageContext.node.frontmatter.date}</h2>
  </div>
}

