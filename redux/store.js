"use client"
import { configureStore } from "@reduxjs/toolkit"
import errorReducer from "./feature/error/errorSlice"
import userReducer from "./feature/user/userSlice"
import sportsReducer from "./feature/sports/sportsSlice"
import socketReducer from "./feature/socket/socketSlice"
import { persistStore } from "redux-persist"
import persistConfig from "./persistConfig"
import { persistReducer } from "redux-persist"

export const store = configureStore({
  reducer: {
    errorContext: errorReducer,
    userContext: persistReducer(persistConfig, userReducer),
    sportsContext: sportsReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)
