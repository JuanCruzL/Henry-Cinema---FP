import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => (
  <div className="movie">
    <Link to={`/movie/${movie.apiId}`}>
      <img src={movie.imageVertical} alt={movie.title} />
    </Link>
    <div className="movie-data">
      <p>Vote Average: {movie.voteAverage}</p>
      <p>Genre: {movie.genres.join(", ")}</p>
      <p>Clasification: {movie.classification}</p>
    </div>
    <div className="box">
      <h2 className="title">{movie.title}</h2>
    </div>
  </div>
);

export default Movie;
