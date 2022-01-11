import { useSelector } from 'react-redux'
import styled from 'styled-components'

import compareGuessToAnswer from '../helpers/compareGuessToAnswer'
import LetterBox from '../components/LetterBox'

const Row = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(${props => props.gridSize}, auto);
`

const generateLetterBoxes = (letters) => {
  return letters.map(letterData => <LetterBox key={Math.random()} {...{letterData}} />)
}

const GridRow = ({ guess }) => {
  const puzzleAnswer = useSelector((state) => state.answer.value)
  const letterData = compareGuessToAnswer(guess, puzzleAnswer)
  
  return(
    <Row gridSize={puzzleAnswer.length}>
      {generateLetterBoxes(letterData)}
    </Row>
  )
}

export default GridRow