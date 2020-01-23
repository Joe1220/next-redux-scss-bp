import { createReducer } from "typesafe-actions"

import {
  UserState,
  UserAction,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  IMPORT_COUNT
} from "./types"
import { asyncState } from "src/store/utils/reducerUtils"

const initialState: UserState = { userList: asyncState.initial(), count: 0 }

export default createReducer<UserState, UserAction>(initialState, {
  [GET_USER_REQUEST]: state => ({
    ...state,
    userList: asyncState.load()
  }),
  [GET_USER_SUCCESS]: (state, action) => ({
    ...state,
    userList: asyncState.success(action.payload)
  }),
  [GET_USER_FAILURE]: (state, action) => ({
    ...state,
    userList: asyncState.failure(action.payload)
  }),
  [IMPORT_COUNT]: state => ({
    ...state,
    count: state.count + 1
  })
})

// export default createReducer<UserState, UserAction>(initialState)
//   .handleAction(transformToArray(getUsers), createAsyncReducer(getUsers, "userList"))
