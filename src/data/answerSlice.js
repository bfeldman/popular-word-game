import { createSlice } from '@reduxjs/toolkit'

export const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    value: '',
  },
  reducers: {
    setAnswer: (state, action) => {
      state.value = action.payload
    }
  },
})
  
export const { setAnswer } = answerSlice.actions;

export default answerSlice.reducer