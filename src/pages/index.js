import React from 'react'
import Layout from '../components/Layout'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <p>
          Hola. My name is <span className={styles.highlight}>Lionel</span>.
        </p>
        <p>
          I am a <span className={styles.highlight}>Front End Developer</span>{' '}
          who started as{' '}
          <span className={styles.highlight}>Graphic Designer</span>, worked as{' '}
          <span className={styles.highlight}>Art Director</span> and found a
          passion writing code.
        </p>
        <p className={styles.raw}>
          I am currently working at{' '}
          <a className={styles.link} href="https://pixeden.com">
            Pixeden
          </a>
          , pushing stuff forward into new technologies/stacks, creating awesome
          new tools, like{' '}
          <a className={styles.link} href="https://orioniconlibrary.com">
            Orion Icon Library
          </a>
          , closing the gap between{' '}
          <span className={styles.highlight}>Designer</span> and{' '}
          <span className={styles.highlight}>Developer</span> .
        </p>
        <p className={styles.raw}>
          I mainly work with{' '}
          <span className={styles.highlight}>JavaScript</span>, mostly with{' '}
          <span className={styles.highlight}>React.js</span> but I am passionate
          about <span className={styles.highlight}>SVG</span> and{' '}
          <span className={styles.highlight}>CSS</span>.
        </p>
        <p className={styles.raw}>
          I love the idea behind{' '}
          <span className={styles.highlight}>Open Source</span>, so I create,
          collaborate and mantain{' '}
          <a
            className={styles.link}
            href="https://github.com/elrumordelaluz?tab=repositories"
          >
            several open-source modules
          </a>
          . In general they born as a specific need wonrking on something, and
          then becomes useful to other people.
        </p>
      </div>

      <div className={styles.quotes}>
        <p>
          You could find me on{' '}
          <a className={styles.link} href="https://twitter.com/elrumordelaluz">
            Twitter
          </a>{' '}
          or find stuff I made on{' '}
          <a className={styles.link} href="https://github.com/elrumordelaluz">
            Github
          </a>
          ,{' '}
          <a className={styles.link} href="https://codepen.io/elrumordelaluz/">
            Codepen
          </a>
          ,{' '}
          <a
            className={styles.link}
            href="https://dribbble.com/elrumordelaluz/"
          >
            Dribbble
          </a>{' '}
          and{' '}
          <a
            className={styles.link}
            href="https://www.behance.net/rumbografico"
          >
            Behance
          </a>
          . Otherwise drop me an{' '}
          <a className={styles.link} href="mailto:elrumordelaluz@gmail.com">
            Email
          </a>
          .
        </p>
        <p className={styles.quote}>
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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
