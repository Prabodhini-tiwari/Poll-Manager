import { useState } from 'react'
import Votes from './Components/Votes'
import Results from './Components/Results'

import './App.css'

function App() {
  const Questions = "What is your favorite JavaScript Framework?"

  const options = ["React", "Angular"]

  const [votes, setVotes] = useState([0, 0]);
  const [showResults, setShowResults] = useState(false);
  const [leadingMessage, setLeadingMessage] = useState("");
  const [isResultShown, setIsResultShown] = useState(false); 
 

  const handleVote = (i) => {

    const updatedVotes = [...votes];
    updatedVotes[i] += 1;
    setVotes(updatedVotes);
    updateLeadingMessage(updatedVotes);
  };

  const updateLeadingMessage = (updatedVotes) => {
    const [voteA, voteB] = updatedVotes;

    if (voteA > voteB) {
      setLeadingMessage(`${options[0]} is leading by ${voteA - voteB}!`);
    } else if (voteB > voteA) {
      setLeadingMessage(`${options[1]} is leading by ${voteB - voteA}!`);
    } else {
      setLeadingMessage("It's a tie!");
    }
  };


  const handleViewResult = () => {
    setShowResults(true);
    setIsResultShown(true);
  };

 
  return (
    <>
      <div className='parent'>
      <h1>{Questions}</h1>
        {!showResults && leadingMessage && <p>{leadingMessage}</p>}
        

        <Votes options={options} handlevote={handleVote} isResultShown={isResultShown} />

        <Results
          votes={votes}
          options={options}
          showResults={showResults}
          handleViewResult={handleViewResult}
          isResultShown={isResultShown}
        />
      </div>


    </>
  )
}

export default App
