import { createReducer } from "typesafe-actions"

import { UserState, UserAction } from "./types"
import { asyncState, createAsyncReducer } from "src/store/utils/reducerUtils"
import { getUsers } from "./actions"
import { transformToArray } from "../../utils/reducerUtils"

const initialState: UserState = { userList: asyncState.initial() }

// export default createReducer<UserState, UserAction>(initialState, {
//   [GET_USER_REQUEST]: state => ({
//     ...state,
//     userList: asyncState.load()
//   }),
//   [GET_USER_SUCCESS]: (state, action) => ({
//     ...state,
//     userList: asyncState.success(action.payload)
//   }),
//   [GET_USER_FAILURE]: (state, action) => ({
//     ...state,
//     userList: asyncState.failure(action.payload)
//   })
// })

export default createReducer<UserState, UserAction>(initialState).handleAction(
  transformToArray(getUsers),
  createAsyncReducer(getUsers, "userList")
)
