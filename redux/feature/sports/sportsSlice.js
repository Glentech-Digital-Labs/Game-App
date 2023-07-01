import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sportsId: 1,
  newBet: true,
}

export const sportsSlice = createSlice({
  name: "sportsContext",
  initialState,
  reducers: {
    setSportId: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetSportsId: (state) => {
      return { initialState }
    },
    setNewBet: (state) => {
      let newBet = !state.newBet
      return { ...state, newBet }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSportId, resetSportsId, setNewBet } = sportsSlice.actions

export default sportsSlice.reducer
