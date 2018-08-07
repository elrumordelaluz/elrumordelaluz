import React from 'react'
import { /*Link,*/ graphql } from 'gatsby'
import cn from 'classnames'
import Layout from '../../components/Layout'
import styles from '../index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <h1 className={cn(styles.title, 'title')}>
        Blog
        <br />
        <small>{/*data.allMarkdownRemark.totalCount*/} working on it…</small>
      </h1>

      {/*data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))*/}
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
