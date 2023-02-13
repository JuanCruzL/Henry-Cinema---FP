import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions";
import Nav from "../Nav/Nav";
import "./Details.css";
import Loader from "../Loader/Loader";
import Footer from "../footer/footer"

export default function Details() {
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

  let genres ;
  let genres2 ;
  let productionCompanies;

  if (movie) {
    genres = movie?.genres?.map((e) => e).join(" ");
    genres2 = movie?.genres?.map((e) => e).join(", ");
    if(movie.apiId) {
      productionCompanies = movie?.productionCompanies?.map((e) => e).join(", ");
    }
    else{
      productionCompanies = movie.productionCompanies
    }
  }


  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Nav />
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
              <img
                src={movie.imageVertical}
                alt={movie.title}
                className="coverImage"
              />
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
              {movie.origin ? <p className="allDetailsP">
                <b>Origin: </b>
                {movie.origin}</p> : <></>} 
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
