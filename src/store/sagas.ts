import { all, fork } from "redux-saga/effects"

import watchUserSaga from "src/store/modules/user/sagas"

export default function*() {
  yield all([fork(watchUserSaga)])
}
