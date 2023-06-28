"use client"
import { configureStore } from "@reduxjs/toolkit"
import errorReducer from "./feature/error/errorSlice"

export const store = configureStore({
  reducer: {
    errorContext: errorReducer,
  },
})
