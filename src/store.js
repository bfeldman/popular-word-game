import { configureStore } from '@reduxjs/toolkit'
import answerReducer from './data/answerSlice'
import guessesReducer from './data/guessesSlice'

export default configureStore({
  reducer: {
    answer: answerReducer,
    guesses: guessesReducer
  },
})