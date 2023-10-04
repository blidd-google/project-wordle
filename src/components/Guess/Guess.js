import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function Guess({ guessList, answer }) {
  return (
    <div>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guessId) => (
        <p key={guessId} className='guess'>
          {
            guessList[guessId] ? 
            checkGuess(guessList[guessId], answer)
              .map(({letter, status}, idx) => (
                <span key={idx} className={'cell ' + status}>
                  {letter}
                </span>
              )) :
            range(0, 5).map((idx) => (
              <span key={idx} className='cell'></span>
            ))
          }
        </p>
      ))}
    </div>
  )
}

export default Guess;
