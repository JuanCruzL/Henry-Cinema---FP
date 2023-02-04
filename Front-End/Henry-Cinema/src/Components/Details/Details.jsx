
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions/index";
import "./Details.css";


export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, []);

  const movie = useSelector((state) => state.movieId);

  let genres = [];
  let genres2 = [];
  let productionCompanies = [];

  if (movie) {
    genres = movie?.genres?.map((e) => e).join(" ");
    genres2 = movie?.genres?.map((e) => e).join(", ");
    productionCompanies = movie?.productionCompanies?.map((e) => e).join(", ");
  }

  if (!movie.hasOwnProperty("title")) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="Big-container">
        <div className="detailsContainer">
          <div className="MovieInfo">
            <div className="Genre">
              <h1>{genres}</h1>
            </div>
            <div className="movieTitle">
              <h2>{movie.title}</h2>
            </div>
            <div className="infoBar">
              <p className="info">{movie.runtime} minutes</p>
              <p className="info-mid">{movie.classification}</p>
              <p className="info">{genres2}</p>
            </div>
            <a className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text">Buy Tickets</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
            <iframe
              width="800"
              height="450"
              src={movie.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="ytFrame"
            ></iframe>
            <p className="p">{movie.overview}</p>
          </div>
          <div className="detailsContainerRight">
            <img src={movie.image} alt={movie.title} className="coverImage" />
            <p className="allDetailsP">
              <b>Original Title: </b>
              {movie.title}
            </p>
            <p className="allDetailsP">
              <b>Genres: </b>
              {genres2}
            </p>
            <p className="allDetailsP">
              <b>Runtime: </b>
              {movie.runtime} minutes
            </p>
            <p className="allDetailsP">
              <b>Production Companies: </b>
              {productionCompanies}
            </p>
            <p className="allDetailsP">
              <b>Rating: </b>
              {movie.voteAverage}
            </p>
            <p className="allDetailsP">
              <b>Status: </b>
              {movie.status}
            </p>
            <p className="allDetailsP">
              <b>Origin: </b>
              {movie.origin}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
