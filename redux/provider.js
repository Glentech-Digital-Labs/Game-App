"use client"

import { useEffect } from "react"

import { store } from "./store"
import { Provider, useDispatch } from "react-redux"
import { setSocket, setConnected } from "./feature/socket/socketSlice"
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

    socket.on("connect", () => {
      store.dispatch(setSocket(socket))
      store.dispatch(setConnected(true))
      localStorage.setItem("socket_id", socket.id)
    })

    socket.on("disconnect", () => {
      store.dispatch(setConnected(false))
    })

    // socket.on("realTimeData", (data) => {
    //   store.dispatch(setData(data))
    // })

    // socket.emit("SUBSCRIBE_AN_EVENT", "32439042", (response) =>
    //   console.log(response)
    // )
    // socket.on("NEW_ODDS", (data, acknowledgment) => {
    //   console.log("Data of New Odds", data)
    //   acknowledgment("Getting message data")
    // })

    // store.dispatch(setSocket(socket))
    // socket.on("dataEvent", (data) => {
    //   dispatch(receiveData(data))
    // })

    return () => {
      socket.disconnect()
      socket.off("connect")
      // socket.off("disconnect", onDisconnect)
      // store.dispatch(setSocket(null)) // Clear socket connection in Redux store
    }
  }, [store.dispatch])
  return <Provider store={store}>{children}</Provider>
}
