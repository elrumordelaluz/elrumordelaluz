import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import iconActive from './io_icn_1.png'
import iconInactive from './io_icn_2.png'

import './fonts.css'
import './reboot.css'

class Layout extends Component {
  componentDidMount() {
    window.addEventListener('focus', this.setActiveIcon)
    window.addEventListener('blur', this.setUnactiveIcon)
  }

  setActiveIcon = () => {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = iconActive
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  setUnactiveIcon = () => {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = iconInactive
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content="Lionel Tzatzkin" />
              <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href={iconActive}
              />
            </Helmet>
            {children}
          </>
        )}
      />
    )
  }
}

export default Layout
