import React from 'react'
import Layout from '../components/Layout'
import * as styles from './index.module.css'

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <p>
            Hola. My name is{' '}
            <span className={styles.highlight}>Lionel Tzatzkin</span>.
          </p>
          <p>
            I am a <span className={styles.highlight}>Front End Developer</span>{' '}
            who started as{' '}
            <span className={styles.highlight}>Graphic Designer</span>, worked
            as <span className={styles.highlight}>Art Director</span> and found
            a passion writing code.
          </p>
          <p className={styles.raw}>
            I am currently working at{' '}
            <a className={styles.link} href="https://pixeden.com">
              Pixeden
            </a>
            , pushing stuff forward into new technologies/stacks, creating{' '}
            <a className={styles.link} href="https://orioniconlibrary.com">
              awesome
            </a>{' '}
            <a className={styles.link} href="https://www.pixeden.com/music">
              tools
            </a>
            , closing the gap between{' '}
            <span className={styles.highlight}>Designer</span> and{' '}
            <span className={styles.highlight}>Developer</span> .
          </p>
          <p className={styles.raw}>
            I mainly work with{' '}
            <span className={styles.highlight}>JavaScript</span>, mostly with{' '}
            <span className={styles.highlight}>React.js</span> but I am
            passionate about <span className={styles.highlight}>SVG</span> and{' '}
            <span className={styles.highlight}>CSS</span> as well.
          </p>
          <p className={styles.raw}>
            I love the idea behind{' '}
            <span className={styles.highlight}>Open Source</span>, so I create,
            collaborate and mantain{' '}
            <a className={styles.link} href="https://github.com/elrumordelaluz">
              several open-source modules
            </a>
            . In general they born as a specific need working on something, and
            then becomes useful to other people.
          </p>
        </div>

        <div className={styles.quotes}>
          <p>
            You can find me on{' '}
            <a
              className={styles.link}
              rel="me"
              href="https://mastodon.uno/@elrumordelaluz"
            >
              Mastodon
            </a>{' '}
            or{' '}
            <a
              rel="me"
              className={styles.link}
              href="https://twitter.com/elrumordelaluz"
            >
              Twitter
            </a>{' '}
            or find stuff I made on{' '}
            <a
              rel="me"
              className={styles.link}
              href="https://github.com/elrumordelaluz"
            >
              Github
            </a>
            ,{' '}
            <a
              rel="me"
              className={styles.link}
              href="https://codepen.io/elrumordelaluz/"
            >
              Codepen
            </a>
            ,{' '}
            <a
              rel="me"
              className={styles.link}
              href="https://dribbble.com/elrumordelaluz/"
            >
              Dribbble
            </a>{' '}
            and{' '}
            <a
              rel="me"
              className={styles.link}
              href="https://www.behance.net/elrumordelaluz"
            >
              Behance
            </a>
            . Otherwise drop me an{' '}
            <a className={styles.link} href="mailto:elrumordelaluz@gmail.com">
              Email
            </a>
            .
          </p>
          <blockquote className={styles.quote}>
            “Simplicity is about subtracting the obvious and adding the
            meaningful.”
            <footer>
              — <cite>John Maeda</cite>
            </footer>
          </blockquote>
          <p>
            I am a{' '}
            <a
              className={styles.link}
              href="https://en.wikipedia.org/wiki/Mate_(drink)"
            >
              mate
            </a>{' '}
            drinker (yup! I'm from Buenos Aires), living in a small hamlet in
            Italy, near a lake and in front lovely horses. Play{' '}
            <a
              className={styles.link}
              href="https://en.wikipedia.org/wiki/Pandeiro"
            >
              pandeiro
            </a>{' '}
            and observe the deep sky are my hobbies.
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
}
