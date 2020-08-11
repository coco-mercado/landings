import './styles/App.css';
import './styles/index.css'
import './styles/Style.css'
import App, { Container } from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
    gtmId: 'GTM-T7JQ3XJ'
  }

class MyApp extends App {

  componentDidMount () {
    TagManager.initialize(tagManagerArgs) 
 }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp