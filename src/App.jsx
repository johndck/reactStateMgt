//import { useState } from "react";

import { useState } from "react";
import Joke from "./components/joke";
import JokeForm from "./components/newjoke";
import "./App.css";

const jokes = [
  { id: 1, text: "What do you call a fish wearing a crown?" },
  { id: 2, text: "What do you call a fish wearing a hat?" },
];

function App() {
  const [favorite, setFavorite] = useState(1);

  function handleFavourite(id) {
    setFavorite(id);
  }

  function handleNewJoke(jokeText) {
    console.log(jokeText);
  }

  return (
    <>
      <h1>Test Jokes</h1>
      {jokes.map((joke) => {
        return (
          <Joke
            onFavoriteChange={handleFavourite}
            favorite={favorite === joke.id}
            text={joke.text}
            id={joke.id}
            key={joke.id}
          />
        );
      })}

      <JokeForm onNewJoke={handleNewJoke} />
    </>
  );
}

export default App;
