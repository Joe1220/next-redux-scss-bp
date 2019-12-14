import { AsyncActionCreatorBuilder, getType } from "typesafe-actions"
import { AnyAction } from "redux"

export type AsyncState<T, E = any> = {
  data: T | null
  loading: boolean
  error: E | any
}

export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    loading: false,
    data: initialData || null,
    error: null
  }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({
    loading: true,
    data: data || null,
    error: null
  }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({
    loading: false,
    data,
    error: null
  }),
  failure: <T, E>(error: E): AsyncState<T, E> => ({
    loading: false,
    data: null,
    error: error
  })
}

// 액션 생성자 타입 지정
export type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>

//reducer의 비동기 처리시, request, success, failure 세개 변수 반환 함수
export const transformToArray = <AC extends AnyAsyncActionCreator>(asyncActionCreator: AC) => {
  const { request, success, failure } = asyncActionCreator
  return [request, success, failure]
}

// reducer에서 async(request, success, failure 세개 타입의 리듀서를 한번에)
// 만들어주는 함수.
export const createAsyncReducer = <
  AC extends AnyAsyncActionCreator,
  K extends keyof S,
  S,
  A extends AnyAction
>(
  asyncActionCreator: AC,
  key: K
) => {
  return (state: S, action: A) => {
    // 각 액션 생성함수의 type 을 추출해줍니다.
    const [request, success, failure] = [
      asyncActionCreator.request,
      asyncActionCreator.success,
      asyncActionCreator.failure
    ].map(getType)
    switch (action.type) {
      case request:
        return {
          ...state,
          [key]: asyncState.load()
        }
      case success:
        return {
          ...state,
          [key]: asyncState.success(action.payload)
        }
      case failure:
        return {
          ...state,
          [key]: asyncState.failure(action.payload)
        }
      default:
        return state
    }
  }
}
