import { useState } from "react";

function Joke({ id, text, favorite, onFavoriteChange }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  function handledislikes() {
    setDislikes(dislikes - 1);
  }

  function handleFavorite() {
    onFavoriteChange(id);
  }

  return (
    <div>
      <p>{text} </p>
      <p>Likes: {likes - dislikes}</p>
      <p>Favourite: {favorite ? "Yes" : "No"}</p>
      <button onClick={handleLikes}>👍</button>
      <button onClick={handledislikes}>👎</button>
      <button onClick={handleFavorite}>Favorite</button>
    </div>
  );
}

export default Joke;
