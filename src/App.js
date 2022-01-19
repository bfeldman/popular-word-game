import styled from 'styled-components'
import GuessForm from './components/GuessForm'
import WordBoard from './containers/WordBoard'

const GameContainer = styled.div`
  margin: 50px;
`

function App() {
  return (
    <GameContainer>
      <h3>BRIANLE</h3>
      <GuessForm />
      <WordBoard />
    </GameContainer>
  );
}

export default App;
