import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAnswer } from '../data/answerSlice'

import styled from 'styled-components'
import words from '../dict/words'
import GridRow from './GridRow'

const GuessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(${props => props.rows}, auto);
  max-width: 500px;
  padding: auto:
`

const generateGridRow = (guesses) => {
  return guesses.map(guess => <GridRow key={Math.random()} {...{guess}} />)
}

const WordBoard = () => {
  const dispatch = useDispatch()
  const guesses = useSelector((state) => state.guesses.value)

  useEffect(() => {
    const answer = words[Math.floor(Math.random()*words.length)].toUpperCase();
    dispatch(setAnswer(answer));
  }, [dispatch]);
  
  return(
    <GuessGrid rows={guesses.length + 1} >
      {generateGridRow(guesses)}
      <GridRow key={Math.random()} guess={'     '} />
    </GuessGrid>
  )
}

export default WordBoard;