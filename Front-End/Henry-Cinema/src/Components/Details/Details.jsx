import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions/index";
import "./Details.css";

export default function Details() {
  
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect( () =>{ 
      dispatch(getMovieById(id))
  },[])

  const movie = useSelector((state) => state.movieId)
  
  let genres = []  
  useEffect(() => {
      if (movie) {
        genres = movie?.genres?.map((e) => (e)).join(", ")
      }
  },[movie])

    if(!movie.hasOwnProperty("title")) {
      return(
        <div>Cargando...</div>
      )
    }else {

      return (
        <div className="Big-container">
          <div className="detailsContainer">
            <div className="MovieInfo">
              <div className="Genre">
              {genres.map((e,index)=> {<p key={index}>{e}</p>})}
              </div>
              <div className="movieTitle">
                <h2>{movie.title}</h2>
              </div>
              <div className="infoBar">
                <p className="info">{movie.runtime} minutes</p>
                {movie.adult === false ? <p className="info-mid">ATP</p> : <p className="info-mid">+18</p>}
                <p className="info">{movie.title}</p>
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
                src="https://www.youtube.com/embed/hkhTHJJoD9k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="ytFrame"
              ></iframe>
              <p className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                possimus odio, reprehenderit consequatur incidunt inventore maxime
                id mollitia blanditiis eius optio obcaecati iure tempora cumque
                veritatis, excepturi soluta eum perspiciatis!
              </p>
            </div>
            <div className="detailsContainerRight">
              <img
                src="https://static.voyalcine.net/Uploads/i1826.jpg"
                alt="image"
                className="coverImage"
              />
              <p className="allDetailsP">Original Title: </p>
              <p className="allDetailsP">Original Title: ``</p>
              <p className="allDetailsP">Original Title: `</p>
              <p className="allDetailsP">Original Title: ``</p>
              <p className="allDetailsP">Original Title: ``</p>
              <p className="allDetailsP">Original Title: ``</p>
              <p className="allDetailsP">Original Title: ``</p>
            </div>
          </div>
        </div>
      );
    }

  }