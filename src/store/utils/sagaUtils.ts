import { call, put } from "redux-saga/effects"

// promise load, and dispatch saga
export const createPromiseSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`]
  return function* saga(action: any) {
    try {
      const payload = yield call(promiseCreator, action.payload)
      yield put({ type: SUCCESS, payload })
    } catch (error) {
      yield put({ type: FAILURE, error: true, payload: error })
    }
  }
}
