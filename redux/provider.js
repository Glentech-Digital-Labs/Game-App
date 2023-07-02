"use client"

import { useEffect } from "react"

import { store } from "./store"
import { Provider, useDispatch } from "react-redux"
import { setSocket } from "./feature/socket/socketSlice"
import Url from "../utils/config"
import { io } from "socket.io-client"

export function Providers({ children }) {
  // const dispatch = useDispatch()
  useEffect(() => {
    const socket = io(Url.BASE_URL, {
      autoConnect: true,
    })
    store.dispatch(setSocket(socket))
    socket.on("dataEvent", (data) => {
      dispatch(receiveData(data))
    })

    return () => {
      socket.disconnect()
      // store.dispatch(setSocket(null)) // Clear socket connection in Redux store
    }
  }, [store.dispatch])
  return <Provider store={store}>{children}</Provider>
}
