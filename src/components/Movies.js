import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <ul>Genres:
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
