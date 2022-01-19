import styled from 'styled-components'

const Box = styled.div`
  border: 1px solid black;
  min-width: 15px;
  min-height: 20px;
  max-height: fit-content;
  max-width: fit-content;
  padding: 2px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.letterBackground};
`

const setLetterBackground = ( isCorrectPosition, isSomewhereInWord ) => {
  if (isCorrectPosition) {
    return 'green'
  } else if (!isCorrectPosition && isSomewhereInWord) {
    return 'yellow'
  } else {
    return 'white'
  }
}

const LetterBox = ({ letterData }) => {    
  const {
    letter,
    isCorrectPosition,
    isSomewhereInWord
  } = letterData
  
  const letterBackground = setLetterBackground(isCorrectPosition, isSomewhereInWord)
  
  return (
    <Box {...{letterBackground}} >
      {letter}
    </Box>
  )
}

export default LetterBox;