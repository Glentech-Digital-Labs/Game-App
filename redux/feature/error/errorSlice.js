"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  errorState: false,
  errorMessage: "",
}

export const errorSlice = createSlice({
  name: "errorContext",
  initialState,
  reducers: {
    setError: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetError: (state) => {
      return { ...state, errorState: "", errorMessage: "" }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setError, resetError } = errorSlice.actions

export default errorSlice.reducer
