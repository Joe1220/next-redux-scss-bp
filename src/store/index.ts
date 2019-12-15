import { createStore, applyMiddleware, Store, AnyAction } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistReducer, persistStore } from "redux-persist"
import { composeWithDevTools } from "remote-redux-devtools"

import rootReducer from "./reducer"
import rootSaga from "./sagas"

export type PersistedStore = Store<any, AnyAction> & {
  __persistor?: any
}

const isClient = typeof window !== "undefined"
const sagaMiddleware = createSagaMiddleware()
// middleware list
const middleware = [sagaMiddleware]

const initStore = (reducer: any) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default () => {
  let _store: PersistedStore
  if (isClient) {
    const storage = require("redux-persist/lib/storage").default

    const persistConfig = {
      key: "root",
      storage
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    _store = initStore(persistedReducer)
    _store.__persistor = persistStore(_store)
  } else {
    _store = initStore(rootReducer)
  }
  sagaMiddleware.run(rootSaga)

  return _store
}
