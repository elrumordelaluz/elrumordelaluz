import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <h1 className={cn(styles.title, 'title')}>
      Lionel Tzatzkin<br />
      <small>{`[ elrumordelaluz ]`}</small>
    </h1>
    <nav className={styles.nav}>
      <Link to="/blog">blog</Link>
    </nav>
  </Layout>
)

export default IndexPage
