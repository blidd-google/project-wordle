import React from 'react';

function GuessList({ guessList }) {
  return (
    <div>
      {guessList.map((guess, index) => (<div key={index}>{guess}</div>))}
    </div>
  );
}

export default GuessList;
