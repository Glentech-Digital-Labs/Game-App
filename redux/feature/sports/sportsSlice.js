import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sportsId: 1,
  newBet: true,
  placedBetData: [],
}

export const sportsSlice = createSlice({
  name: "sportsContext",
  initialState,
  reducers: {
    setSportId: (state, action) => {
      console.log("From data slice", action.payload)
      return { ...state, sportsId: action.payload }
    },
    resetSportsId: (state) => {
      return { initialState }
    },
    setNewBet: (state) => {
      let newBet = !state.newBet
      return { ...state, newBet }
    },
    setPlacedBetData: (state, action) => {
      return { ...state, placedBetData: [...action.payload] }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSportId, resetSportsId, setNewBet, setPlacedBetData } =
  sportsSlice.actions

export default sportsSlice.reducer
