import React from "react"
import App from "next/App"
import { Provider } from "react-redux"

import store from "src/store"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
