import { all, fork } from "redux-saga/effects"

import watchUserSaga from "src/store/modules/user/sagas"
import watchSocketSaga from "src/store/modules/socket/sagas"

export default function*() {
  yield all([fork(watchUserSaga), fork(watchSocketSaga)])
}
