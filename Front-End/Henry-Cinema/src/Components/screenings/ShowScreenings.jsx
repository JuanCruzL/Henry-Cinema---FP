import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions";
import Loader from "../Loader/Loader";

function ShowScreenings() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const movie = useSelector((state) => state.movieId);
  console.log(movie);
  return (
    <div>
      {movie.Screenings.map((screening) => (
        <div key={screening.id}>
          <h1>Room: {screening.roomLetter} </h1>
          <h1>Title: {screening.title}</h1>
          <h1>Date: {screening.date}</h1>
          <h1>Start Time: {screening.startTime}</h1>
          <h1>Language: {screening.language}</h1>
          <h1>Definition: {screening.definition}</h1>
        </div>
      ))}
    </div>
  );
}

export default ShowScreenings;
