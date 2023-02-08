import React from "react";
import "./Movie.css";
import {Link} from 'react-router-dom'

const Movie = ({ movie }) => (
  <div className="movie">
    <Link  to={`/movie/${movie.apiId}`}><img src={movie.imageVertical} alt={movie.title} /></Link>
    <div className="movie-data">
    <h2>{movie.title}</h2>
    <p>Vote Average: {movie.voteAverage}</p>
    <p>Genre: {movie.genres.join(", ")}</p>
    <p>Clasification: {movie.classification}</p>
    </div>
  </div>
);

export default Movie;

