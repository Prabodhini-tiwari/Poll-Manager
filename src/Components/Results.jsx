import React, { useState } from 'react';

const Results = ({ votes, options, handleViewResult, isResultShown }) => {
  const [result, setResult] = useState("");
  const [voteA, voteB] = votes;

  const calculateResult = () => {
    if (voteA > voteB) {
      return `${options[0]} wins by ${voteA - voteB} votes!`;
    } else if (voteB > voteA) {
      return `${options[1]} wins by ${voteB - voteA} votes!`;
    } else if (voteA === voteB) {
      return "It's a tie!";
    }
  };

  const handleClick = () => {
    const calculatedResult = calculateResult();
    setResult(calculatedResult);
    handleViewResult();  
  };

  const hasVotingStarted = votes[0] > 0 || votes[1] > 0;

  return (
    <div>
      <button onClick={handleClick} disabled={!hasVotingStarted || isResultShown}>
        View Result
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Results;
