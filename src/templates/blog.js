import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../pages/blog/blog.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={styles.list}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
