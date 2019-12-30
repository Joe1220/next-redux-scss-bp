import MockAdapter from "axios-mock-adapter"
import axios from "axios"

import { UsersResponse, User } from "src/store/modules/user/types"
import { axiosApi, apiHandler } from "./axiosUtils"

const mockHandler = new MockAdapter(apiHandler, { delayResponse: 200 })
mockHandler
  .onGet("http://localhost:3000/api/userlist")
  .replyOnce(200, {
    userList: [
      { id: 0, name: "john", username: "j", email: "test@test.com", address: "Seoul" },
      { id: 1, name: "key", username: "k", email: "test2@test.com", address: "Busan" }
    ]
  })
  .onGet("http://localhost:3000/api/userlist", { params: { id: 0 } })
  .replyOnce(200, {
    id: 0,
    name: "john",
    username: "j",
    email: "test@test.com",
    address: "Seoul"
  })
  .onDelete("http://localhost:3000/api/user", {
    data: {
      id: 3,
      name: "wow",
      username: "w",
      email: "test3@test.com",
      address: "Suwon"
    }
  })
  .replyOnce(201)

describe("axios configuration", () => {
  it("fetch data with custom axios function", async () => {
    const res = await axiosApi<UsersResponse>({ url: "/userlist", method: "get" })
    expect(res.data.userList).toHaveLength(2)
  })

  it("fetch one user with query id", async () => {
    const res = await axiosApi<User>({ url: "/userlist", method: "get", data: { id: 0 } })
    expect(res.data.id).toEqual(0)
  })
  it("delete data with 'data' parameter", async () => {
    await axiosApi<UsersResponse>({
      url: "/user",
      method: "delete",
      data: {
        id: 3,
        name: "wow",
        username: "w",
        email: "test3@test.com",
        address: "Suwon"
      }
    })
  })
})
