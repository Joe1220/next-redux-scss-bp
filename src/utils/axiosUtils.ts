import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from "axios"

export const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "http://localhost:3000/api"

/**
 * axios basic handler. set base url, headers
 */
export const apiHandler: AxiosInstance = axios.create({
  baseURL: URL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
})

/**
 * if you need specific error code, try in this
 */
apiHandler.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: Error) => {
    console.log("error in axios", error)
    if (error.response.status === 401) {
    }
    console.log(error.response)
    throw error
  }
)

export const axiosApi = <Response = any>({
  url,
  method = "get",
  data
}: AxiosRequestConfig): AxiosPromise<Response> => {
  const requestParmas = method.toLowerCase() === "get" ? { params: { ...data } } : { data }
  const axiosConfig = {
    url,
    method,
    ...requestParmas
  }

  /**
   * only return value when method is get, other methods only return
   */
  return apiHandler.request(axiosConfig).then((res: AxiosResponse<Response>) => {
    return res
  })
}
