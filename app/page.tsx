import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="m-12 grid gap-12 [grid-template-areas:'copy''intro''quotes'] lg:grid-cols-2 lg:gap-20 lg:[grid-template-areas:'intro_copy''quotes_quotes'] xl:m-24 xl:grid-cols-[1.7fr_1fr_1fr] xl:[grid-template-areas:'intro_quotes_copy']">
      <div className="text-2xl [grid-area:intro]">
        <p className="mb-2 font-sans font-bold leading-relaxed">
          Hola. My name is <span className={highlight}>Lionel Tzatzkin</span>.
        </p>
        <p className="mb-2 font-sans font-bold leading-relaxed">
          I am a <span className={highlight}>Front End Developer</span> who
          started as <span className={highlight}>Graphic Designer</span>, worked
          as <span className={highlight}>Art Director</span> and found a passion
          writing code.
        </p>
        <p className="mb-2">
          I am currently working at{' '}
          <a className={link} href="https://pixeden.com">
            Pixeden
          </a>
          , pushing stuff forward into new technologies/stacks, creating{' '}
          <a className={link} href="https://orioniconlibrary.com">
            awesome
          </a>{' '}
          <a className={link} href="https://www.pixeden.com/music">
            tools
          </a>
          , closing the gap between <span className={highlight}>Designer</span>{' '}
          and <span className={highlight}>Developer</span> .
        </p>
        <p className="mb-2">
          I mainly work with <span className={highlight}>JavaScript</span>,
          mostly with <span className={highlight}>React.js</span> but I am
          passionate about <span className={highlight}>SVG</span> and{' '}
          <span className={highlight}>CSS</span> as well.
        </p>
        <p className="mb-2">
          I love the idea behind <span className={highlight}>Open Source</span>,
          so I create, collaborate and mantain{' '}
          <a className={link} href="https://github.com/elrumordelaluz">
            several open-source modules
          </a>
          . In general they born as a specific need working on something, and
          then becomes useful to other people.
        </p>
      </div>

      <div className="self-center border-t border-t-black py-10 text-2xl leading-normal [grid-area:quotes] lg:mx-48 xl:mx-auto">
        <p>
          You can find me on{' '}
          <a
            className={link}
            rel="me"
            href="https://mastodon.uno/@elrumordelaluz"
          >
            Mastodon
          </a>{' '}
          or{' '}
          <a
            rel="me"
            className={link}
            href="https://twitter.com/elrumordelaluz"
          >
            Twitter
          </a>{' '}
          or find stuff I made on{' '}
          <a rel="me" className={link} href="https://github.com/elrumordelaluz">
            Github
          </a>
          ,{' '}
          <a
            rel="me"
            className={link}
            href="https://codepen.io/elrumordelaluz/"
          >
            Codepen
          </a>
          ,{' '}
          <a
            rel="me"
            className={link}
            href="https://dribbble.com/elrumordelaluz/"
          >
            Dribbble
          </a>{' '}
          and{' '}
          <a
            rel="me"
            className={link}
            href="https://www.behance.net/elrumordelaluz"
          >
            Behance
          </a>
          . Otherwise drop me an{' '}
          <a className={link} href="mailto:elrumordelaluz@gmail.com">
            Email
          </a>
          .
        </p>
        <blockquote className="px-0 py-4 text-4xl">
          “Simplicity is about subtracting the obvious and adding the
          meaningful.”
          <footer className="text-right text-xl">
            — <cite>John Maeda</cite>
          </footer>
        </blockquote>
        <p>
          I am a{' '}
          <a className={link} href="https://en.wikipedia.org/wiki/Mate_(drink)">
            mate
          </a>{' '}
          drinker (yup! I&apos;m from Buenos Aires), living in a small hamlet in
          Italy, near a lake and in front lovely horses. Play{' '}
          <a className={link} href="https://en.wikipedia.org/wiki/Pandeiro">
            pandeiro
          </a>{' '}
          and observe the deep sky are my hobbies.
        </p>
      </div>

      <div className="scale-y font-sans text-7xl [grid-area:copy] lg:self-center lg:text-8xl xl:self-start">
        Idea, <br />
        Design, <br />
        Code.
      </div>
    </div>
  )
}

const highlight =
  'relative after:absolute after:inset-0 after:-m-1 after:bg-highlight-alt after:-z-10 '
const link = cn(
  highlight,
  'after:origin-bottom after:scale-y-[20%] after:transition-transform hover:after:scale-y-100'
)
