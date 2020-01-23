import { call, take, put, fork } from "redux-saga/effects"

import { getUsers, importCount } from "./actions"
import { socketInstance, readSocketChannel } from "../socket/utils"
import { User } from "./types"
import { sampleFetchWrapper } from "src/utils/sample-api"

function* getUsersSaga() {
  try {
    const users: User[] = yield call(sampleFetchWrapper, "http://localhost:3000/api/users")
    yield put(getUsers.success(users))
    socketInstance.emit("get_all")
  } catch (error) {
    console.log("check error: ", error)
    yield put(getUsers.failure(error))
  }
}

export default function*() {
  yield fork(readSocketChannel, { eventType: "get_all", actionCreator: importCount })
  while (true) {
    yield take(getUsers.request)
    yield call(getUsersSaga)
  }
}
