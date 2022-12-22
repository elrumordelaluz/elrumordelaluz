import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import * as styles from './blog.module.css'

function BlogPage({ data }) {
  return (
    <Layout>
      <div className={styles.list}>
        <h1 className={styles.title}>
          Thoughts, <br />
          Ideas, <br />
          Snippets
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <Link to={node.frontmatter.path} className={styles.post}>
              <h3 className={styles.subtitle}>{node.frontmatter.title}</h3>
            </Link>
            <p className={styles.date}>{node.frontmatter.date}</p>
            <p className={styles.excerpt}>{node.excerpt}</p>
          </Fragment>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
          }
          excerpt
        }
      }
    }
  }
`
