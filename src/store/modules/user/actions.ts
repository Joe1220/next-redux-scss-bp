import { createAsyncAction } from "typesafe-actions"
import { deprecated } from "typesafe-actions"
import { AxiosError } from "axios"

const { createStandardAction } = deprecated

import {
  User,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_CANCEL,
  IMPORT_COUNT
} from "./types"

export const getUsers = createAsyncAction(
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_CANCEL
)<void, User[], AxiosError>()

export const importCount = createStandardAction(IMPORT_COUNT)<string>()
