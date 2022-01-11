const compareGuessToAnswer = (guess, answer) => {
  const guessLetters = guess.split('');
  const answerLetters = answer.split('');
  
  
  const remainingAnswers = [...answerLetters];
  const remainingGuesses = [...guessLetters];
  
  // first pass to find exact matches
  const removeExactMatch = (idx) => {
    remainingGuesses.splice(idx, 1, '');
    remainingAnswers.splice(idx, 1, '');
  }
  
  const lettersArray = guessLetters.map((letter, index) => {
    const letterData = {
      letter,
      isCorrectPosition: false,
      isSomewhereInWord: false
    }
    
    if (answerLetters[index] === letter) {
      letterData.isCorrectPosition = true
      letterData.isSomewhereInWord = true
      removeExactMatch(index);
    }
    return letterData
  })
  
  // second past to find inexact matches
  const removeInexactMatch = (letter) => {
    const idx = remainingAnswers.findIndex(char => letter === char);
    remainingAnswers.splice(idx, 1, '');
  }
  
  remainingGuesses.map((letter, index) => {
    if (remainingAnswers.includes(letter)
    ) {
      lettersArray[index].isSomewhereInWord = true;
      removeInexactMatch(letter)
    }
    return null
  })
  
  return lettersArray
}

export default compareGuessToAnswer;