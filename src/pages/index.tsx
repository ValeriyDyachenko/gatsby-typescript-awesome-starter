import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query query {
      markdownRemark(frontmatter: { title: { eq: "about" } }) {
        id
        html
      }
    }
  `)

  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
}
