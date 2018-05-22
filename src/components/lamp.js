import React from 'react'
import Link from 'gatsby-link'
import styles from './lamp.module.css'

const Lamp = () => (
  <svg viewBox="0 0 60 130" className={styles.lamp}>
    <g>
      <circle className={styles.bulb} cx="30" cy="109.3" r="10.7" />
      <line
        className={styles.bulb__line}
        x1="28.1"
        y1="108.1"
        x2="27.4"
        y2="113.4"
      />
      <line
        className={styles.bulb__line}
        x1="32"
        y1="108.1"
        x2="32.6"
        y2="113.4"
      />
      <polyline
        className={styles.bulb__line}
        points="27.8,113.5 28.3,112.8 28.8,113.5 29.6,112.8 30,113.5 30.7,112.9 31.2,113.5 31.8,112.8 32.3,113.5"
      />
    </g>
    <rect
      x="20.7"
      y="66.7"
      className={styles.lamp__elem}
      width="18.6"
      height="15.6"
    />
    <rect
      x="28.5"
      y="0"
      className={styles.lamp__elem}
      width="3"
      height="66.7"
    />
    <path
      className={styles.lamp__elem}
      d="M30,80.3c-16.6,0-30,13.4-30,30h60C60,93.8,46.6,80.3,30,80.3z"
    />
    <path
      className={styles.lamp__elem}
      d="M30,80.3c-16.6,0-30,13.4-30,30h60C60,93.8,46.6,80.3,30,80.3z"
    />
  </svg>
)

export default Lamp
