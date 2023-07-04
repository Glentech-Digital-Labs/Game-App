"use client"
import { configureStore } from "@reduxjs/toolkit"
import errorReducer from "./feature/error/errorSlice"
import userReducer from "./feature/user/userSlice"
import sportsReducer from "./feature/sports/sportsSlice"
import socketReducer from "./feature/socket/socketSlice"

export const store = configureStore({
  reducer: {
    errorContext: errorReducer,
    userContext: userReducer,
    sportsContext: sportsReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
