import { combineReducers } from "redux"

import user from "src/store/modules/user"

const rootReducer = combineReducers({
  user
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
