"use client"

import { useEffect } from "react"

import { store, persistor } from "./store"
import { Provider } from "react-redux"
import { setSocket, setConnected } from "./feature/socket/socketSlice"
import Url from "../utils/config"
import { io } from "socket.io-client"
import { PersistGate } from "redux-persist/integration/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

    return () => {
      socket.disconnect()
      socket.off("connect")
    }
  }, [store.dispatch])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
