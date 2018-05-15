import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Lamp from '../components/lamp'
import Social from '../components/social'
import lampOn from './lamp_on.png'
import lampOff from './lamp_off.png'

import './index.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.func,
  }

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
    const { children, data } = this.props

    return (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="Lionel Tzatzkin" />
          <link rel="icon" type="image/png" sizes="192x192" href={lampOn} />
        </Helmet>

        <Lamp />
        {children()}
        <Social />
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
