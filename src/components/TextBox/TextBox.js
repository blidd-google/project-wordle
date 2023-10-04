import React from 'react';

function TextBox({ handleSaveGuess, gameState }) {
  const [guess, setGuess] = React.useState('');
  return <div>
    <form
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        const validated = guess.toLocaleUpperCase();
        console.log(validated);
        handleSaveGuess(validated);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="Guess must be a 5-letter word."
        disabled={gameState !== "PENDING"}
        onChange={event => {
          setGuess(event.target.value);
        }}
      />
    </form>
  </div>;
}

export default TextBox;
