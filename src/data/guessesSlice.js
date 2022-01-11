import { createSlice } from '@reduxjs/toolkit'

export const guessesSlice = createSlice({
  name: 'guesses',
  initialState: {
    value: [],
  },
  reducers: {
    addGuess: (state, action) => {
      state.value = state.value.concat(action.payload)
    }
  },
})
  
export const { addGuess } = guessesSlice.actions;

export default guessesSlice.reducer