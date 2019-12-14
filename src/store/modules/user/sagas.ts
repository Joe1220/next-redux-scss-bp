import { call, take, put } from "redux-saga/effects"

import { getUsers } from "./actions"
import { GET_USER_REQUEST, User } from "./types"
import { sampleFetchWrapper } from "src/utils/sample-api"

function* getUsersSaga() {
  try {
    const users: User[] = yield call(sampleFetchWrapper, "http://localhost:3000/api/users")
    yield put(getUsers.success(users))
  } catch (error) {
    console.log("check error: ", error)
    yield put(getUsers.failure(error))
  }
}

export default function*() {
  while (true) {
    yield take(GET_USER_REQUEST)
    yield call(getUsersSaga)
  }
}
