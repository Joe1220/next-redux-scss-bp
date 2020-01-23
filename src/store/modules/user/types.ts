import { ActionType } from "typesafe-actions"

import * as actions from "./actions"
import { AsyncState } from "src/store/utils/reducerUtils"

type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
}

export const GET_USER_REQUEST = "user/GET_USER_REQUEST"
export const GET_USER_SUCCESS = "user/GET_USER_SUCCESS"
export const GET_USER_FAILURE = "user/GET_USER_FAILURE"
export const GET_USER_CANCEL = "user/GET_USER_CANCEL"
export const IMPORT_COUNT = "user/IMPORT_COUNT"

export type UserAction = ActionType<typeof actions>

export type UserState = {
  userList: AsyncState<User[], Error>
  count: number
}
