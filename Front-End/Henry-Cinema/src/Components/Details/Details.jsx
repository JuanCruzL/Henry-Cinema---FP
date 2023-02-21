import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, postReview } from "../../redux/actions";
import Nav from "../Nav/Nav";
import "./Details.css";
import Loader from "../Loader/Loader";
import Footer from "../footer/footer";
import jwt_decode from "jwt-decode";

export default function Details() {
  const { id } = useParams();
  const [leftchars, setLeftchars] = useState(800);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accestoken = localStorage.getItem("loggedUser")
  const userinfo = jwt_decode(accestoken)
  const [form, setForm] = useState({
    review: "",
    userId: userinfo.id,
    movieId: id,
  })

  useEffect(() => {
    dispatch(getMovieById(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const image = userinfo.image ? userinfo.image : "https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg"
 

  const movie = useSelector((state) => state.movieId);

  let genres;
  let genres2;
  let productionCompanies;

  if (movie) {
    genres = movie?.genres?.map((e) => e).join(" ");
    genres2 = movie?.genres?.map((e) => e).join(", ");
    if (movie.apiId) {
      productionCompanies = movie?.productionCompanies
        ?.map((e) => e)
        .join(", ");
    } else {
      productionCompanies = movie.productionCompanies;
    }
  }
  const calculateChars = (chars) => {
    let maxchars = 800;
    let charsleft = maxchars - chars.length;
    setLeftchars(charsleft);
  };
  const handleResize = (e) => {
    if (e) {
      const target = e.target ? e.target : e;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
      calculateChars(e.target.value);
    }
  };
  const handleChange = (e) => {
    setForm({
      review: e.target.value
    })
    console.log(form)
  }

  const handlePostReview = () => {
    // await dispatch(postReview({
    //   review: form.review
    // }))
    console.log(form)
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
              <Link to={`/showscreenings/${id}`} className="fancy">
                <span className="top-key"></span>
                <span className="text">Buy Tickets</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
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
              {movie.origin ? (
                <p className="allDetailsP">
                  <b>Origin: </b>
                  {movie.origin}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="reviews-container">
            <div className="review-container">
              <div className="user-info">
                <img className="user-image" src={image}></img>
                <div className="review-user-name">{userinfo.userName}</div>
              </div>
              <div className="decoration"></div>
              <form onSubmit={() => handlePostReview()} onChange={(e) => handleChange(e)}>
                <div className="text-container">
                  <textarea
                    type="textarea"
                    name="review"
                    maxLength="800"
                    placeholder="¿Qué te pareció la película?"
                    className="review-input"
                    onChange={(e) => handleResize(e)}
                  ></textarea>
                </div>
                <div className="char-counter">characters left: {leftchars}</div>
                <button type="submit" className="post-review-button">Post Review</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
