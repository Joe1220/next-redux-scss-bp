import { createAsyncAction } from "typesafe-actions"
import { AxiosError } from "axios"

import {
  User,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_CANCEL
} from "./types"

export const getUsers = createAsyncAction(
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_CANCEL
)<void, User[], AxiosError>()
