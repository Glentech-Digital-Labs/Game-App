import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  socket: null,
  receivedData: null,
}
const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload
    },
    sendData: (state, action) => {
      const { data } = action.payload
      state.socket.emit("sendData", data)
      // return { ...state, socket: data }
    },
    receiveData: (state, action) => {
      state.receivedData = action.payload
      return { ...state, receivedData: { ...action.payload } }
    },
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export const { setSocket, sendData, receiveData } = socketSlice.actions
export default socketSlice.reducer
