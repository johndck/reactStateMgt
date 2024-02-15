import { useState } from "react";

function JokeForm({ onNewJoke }) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewJoke(jokeText);
    setJokeText("");
  }
  const [jokeText, setJokeText] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={jokeText}
        placeholder="Enter your joke"
        onChange={(event) => {
          return setJokeText(event.target.value);
        }}
      />
      <button type="submit">Add Joke</button>
    </form>
  );
}

export default JokeForm;
