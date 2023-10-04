import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextBox from '../TextBox';
import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState('PENDING');

  const handleSaveGuess = (guess) => {
    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      nextGuessList.push(guess);
      setGuessList(nextGuessList);

      if (guess === answer) {
        setGameState('SUCCESS');
      }
      if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
        setGameState('FAILURE');
      }
    }
  }

  return (
    <>
      {/* <GuessList guessList={guessList} /> */}
      <Guess guessList={guessList} answer={answer} />
      <TextBox handleSaveGuess={handleSaveGuess} gameState={gameState} />

      {gameState === 'FAILURE' &&
        <div className='sad banner'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      }
      { gameState === 'SUCCESS' &&
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{guessList.length} guesses</strong>.
          </p>
        </div>
      }
    </>
  );
}

export default Game;
