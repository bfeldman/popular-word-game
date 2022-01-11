import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGuess } from '../data/guessesSlice'


const GuessForm = () => {
  const dispatch = useDispatch()
  const puzzleAnswer = useSelector((state) => state.answer.value)
  const [guess, setGuess] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const regExCondition = /^[a-zA-Z]+$/
    const isValidGuess =
      regExCondition.test(guess) &&
      guess.length === puzzleAnswer.length
    if (isValidGuess) {
      dispatch(addGuess(guess.toUpperCase()));
    }
    setGuess('')
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  )
}

export default GuessForm