import React from "react"
import App from "next/App"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import withRedux from "next-redux-wrapper"

import initialStore, { PersistedStore } from "src/store"

interface IProps {
  store: PersistedStore
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <PersistGate loading={<div>hello</div>} persistor={store.__persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    )
  }
}

export default withRedux(initialStore)(MyApp)
