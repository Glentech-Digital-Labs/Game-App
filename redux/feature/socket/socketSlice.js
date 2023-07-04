import {
  createAsyncThunk,
  createSlice,
  current,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"

export const receiveData = createAsyncThunk(
  "socket/receiveData",
  async (data, { dispatch }) => {
    // Perform any necessary logic with the data here
    // For example, dispatch other actions or update the state accordingly
    dispatch(setEventSelectionData(data))
  }
)

const initialState = {
  socket: null,
  receivedData: null,
  data: null,
  connected: false,
  events_selection: [],
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
    // receiveData: (state, action) => {
    //   state.receivedData = action.payload
    //   return { ...state, receivedData: { ...action.payload } }
    // },
    setConnected: (state, action) => {
      state.connected = action.payload
      // return { ...state, connected: action.payload }
    },
    setData: (state, action) => {
      state.data = action.payload
    },
    setEventSelectionData: (state, action) => {
      state.events_selection = action.payload
      // state.events_selection = JSON.stringify(action.payload)
      // return { ...state, events_selection: action.payload }
    },
    extraReducers: (builder) => {
      // Handle the async thunk action
      builder.addCase(receiveData.pending, (state) => {
        // Handle any pending state changes if needed
      })
      builder.addCase(receiveData.fulfilled, (state, action) => {
        // Handle any fulfilled state changes if needed
      })
      builder.addCase(receiveData.rejected, (state) => {
        // Handle any rejected state changes if needed
      })
    },
  },
})

export const {
  setSocket,
  sendData,
  // receiveData,
  setConnected,
  setData,
  setEventSelectionData,
} = socketSlice.actions
export default socketSlice.reducer
