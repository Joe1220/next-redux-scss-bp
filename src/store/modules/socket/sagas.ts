import { call, delay, race } from "redux-saga/effects"

import { connectSocket, closeChannel } from "./utils"

export default function*() {
  const { socket, timeout } = yield race({
    socket: call(connectSocket),
    timeout: delay(1000)
  })
  if (socket) {
    console.log("Socket Connection!")
  } else if (timeout) {
    closeChannel(socket)
  } else {
    console.log("socket error")
  }
}
