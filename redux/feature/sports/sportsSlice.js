import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sportsId: 1,
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
  },
})

// Action creators are generated for each case reducer function
export const { setSportId, resetSportsId } = sportsSlice.actions

export default sportsSlice.reducer
