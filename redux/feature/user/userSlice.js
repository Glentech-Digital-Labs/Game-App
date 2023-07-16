"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userName: "",
  fullName: "",
  phoneNumber: "",
  email: "",
  countryCode: "+91",
  refererCode: "",
  password: "",
}

export const userSlice = createSlice({
  name: "userContext",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const data = action.payload
      console.log(`Data`, data)
      return { ...state, ...action.payload }
    },
    resetUser: (state) => {
      return { ...initialState }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
