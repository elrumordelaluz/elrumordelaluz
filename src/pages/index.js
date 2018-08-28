import React from 'react'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <p>Hola, my name is Lionel Tzatzkin.</p>
        <p>
          I am a <span className={styles.highlight}>fullstack developer</span>{' '}
          who studied for{' '}
          <span className={styles.highlight}>graphic designer</span> and worked
          as <span className={styles.highlight}>art director</span> before write
          code all day.
        </p>
        <p>
          I'm currently working for{' '}
          <a className={styles.link} href="https://pixeden.com">
            Pixeden
          </a>
          , pushing stuff forward into new technologies and creating awesome new
          tools, like{' '}
          <a className={styles.link} href="https://orioniconlibrary.com">
            Orion Icon Library
          </a>
          .
        </p>
      </div>
      <div className={styles.quotes}>
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
      <div className={styles.copy}>
        Idea, <br />
        Design, <br />
        Code.
      </div>
    </div>
  </Layout>
)

export default IndexPage
