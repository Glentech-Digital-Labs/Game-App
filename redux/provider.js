"use client"

import { useEffect } from "react"

import { store } from "./store"
import { Provider, useDispatch } from "react-redux"
import { setSocket } from "./feature/socket/socketSlice"
import Url from "../utils/config"
import { io } from "socket.io-client"

export function Providers({ children }) {
  useEffect(() => {
    const socket = io(Url.SOCKET_URL, {
      autoConnect: true,
      extraHeaders: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    console.log("THis is socket data", socket)

    socket.on("connect", () => {
      console.log("socket Id", socket)
      store.dispatch(setSocket(socket))
    })

    store.dispatch(setSocket(socket))
    socket.on("dataEvent", (data) => {
      dispatch(receiveData(data))
    })

    return () => {
      socket.disconnect()
      socket.off("connect")
      // socket.off("disconnect", onDisconnect)
      // store.dispatch(setSocket(null)) // Clear socket connection in Redux store
    }
  }, [store.dispatch])
  return <Provider store={store}>{children}</Provider>
}
