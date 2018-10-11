import React from 'react';

const Score = ({numCorrect, numQuestions}) => {
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions} <br />
      Correct Answers: {numCorrect}
    </p>
  );
}

export default Score;