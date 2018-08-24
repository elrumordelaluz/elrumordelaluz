import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import SocialFooter from '../components/SocialFooter'
import lampOn from './lamp_on.png'
import lampOff from './lamp_off.png'

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
    link.href = lampOn
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  setUnactiveIcon = () => {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = lampOff
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
              <link rel="icon" type="image/png" sizes="192x192" href={lampOn} />
            </Helmet>
            {children}
            <SocialFooter />
          </>
        )}
      />
    )
  }
}

export default Layout
