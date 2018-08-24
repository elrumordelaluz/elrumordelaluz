import React from 'react'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={styles.grid}>
      <div className={styles.a}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.{' '}
        </p>
      </div>
      <div className={styles.b}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <p className={styles.quote}>
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore”
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className={styles.c}>
        Idea, <br />
        Design, <br />
        Code.
      </div>
    </div>
  </Layout>
)

export default IndexPage
