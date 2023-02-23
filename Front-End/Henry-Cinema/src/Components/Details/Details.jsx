import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById, postReview, getUsers } from "../../redux/actions";
import Nav from "../Nav/Nav";
import "./Details.css";
import Loader from "../Loader/Loader";
import Footer from "../footer/footer";
import jwt_decode from "jwt-decode";
import Review from "./Review";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from "axios";


export default function Details() {
  const { id } = useParams();
  const [leftchars, setLeftchars] = useState(800);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accestoken = localStorage.getItem("loggedUser");
  const userinfo = accestoken ? jwt_decode(accestoken) : "not logged in";
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [likeAction, setLikeAction]= useState(null)
  const [dislikeAction, setDislikeAction]= useState(null)
  useEffect(() => {
    dispatch(getMovieById(id));
    dispatch(getUsers());
    // dispatch()
    axios.post("/reviews/likes", {movieId:id}).then(response => {
        //obtengo la cantidad de likes
        setLikes(response.data.length)
        //me fijo si el usuario actual ya likeo la película
        response.data.map(like=>{if(like.userId === userinfo.id) {
          setLikeAction("liked")
        }
      })  
    })
    axios.post("/reviews/dislikes", {movieId: id}).then(response => {
        //obtengo la cantidad de dislikes
        setDislikes(response.data.length)
        //me fijo si el usuario actual ya deslikeo la película
        response.data.map(dislike=>{if(dislike.userId === userinfo.id){
          setDislikeAction("disliked")
        }
      })
    })
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const image = userinfo.image
    ? userinfo.image
    : "https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg";

  const movie = useSelector((state) => state.movieId);
  const users = useSelector((state) => state.users);
  const [form, setForm] = useState({
    review: "",
    userId: userinfo.id,
    movieId: id,
  });

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
    e.preventDefault()
    setForm({
      ...form,
      review: e.target.value,
    });
  };

  const handlePostReview = async (e) => {
    e.preventDefault();
    await dispatch(postReview(form));
  };

  const handleLikeToDislike = async () => {
    axios.post("/reviews/unlike",{ userId: userinfo.id, movieId: id })
      .then(response=>{setLikes(response.data.length)}).then(setLikeAction(null))
  }

  const handleLike = async () => {
     if(likeAction === null) {
     await axios.post("/reviews/postlike",{type: "uplike", userId: userinfo.id, movieId: id})
      axios.post("/reviews/likes", {movieId:id}).then(response => {
        setLikes(response.data.length)}).then(setLikeAction("liked"))
    }else {
      axios.post("/reviews/unlike",{ userId: userinfo.id, movieId: id })
      .then(response=>{setLikes(response.data.length)}).then(setLikeAction(null))
    }
  }

  const handleDislike = async () => {
    if(likeAction !== null && dislikeAction === !null) {
      console.log("entré")
    }
    else if(dislikeAction === null) {
      await axios.post("/reviews/postdislike",{userId: userinfo.id, movieId: id})
      axios.post("/reviews/dislikes", {movieId:id}).then(response => {
        //obtengo la cantidad de likes
        setDislikes(response.data.length)}).then(setDislikeAction("disliked")) 
    }else {
      axios.post("/reviews/deletedislike",{ userId: userinfo.id, movieId: id })
      .then(response=>{setDislikes(response.data.length)}).then(setDislikeAction(null))
    }
  }














  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Nav />
        <div className="Big-container">
          <div className="likes-and-dislikes">
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
            <div className="likes-and-dislikes-container">
              <div className="likes">
                <div className="thumbUp" onClick={()=> handleLike()}>
                  {likeAction === "liked" ? <ThumbUpIcon className="thumbUPicon" /> : <ThumbUpOffAltIcon className="thumbUPicon"/>}
                </div>
                {likes}
              </div>
              <div className="dislikes">
                <div className="thumbdown" onClick={()=> handleDislike()}>
                  {dislikeAction === "disliked" ? <ThumbDownIcon className="thumbDOWNicon"/> : <ThumbDownOffAltIcon className="thumbDOWNicon"/>}
                </div>
                {dislikes}
              </div>
            </div>
          </div>
          <div className="reviews-container">
            <div className="review-container">
              <div className="user-info">
                <img className="user-image" src={image}></img>
                <div className="review-user-name">{userinfo.userName}</div>
              </div>
              <div className="decoration"></div>
              <form
                onSubmit={(e) => handlePostReview(e)}
                onChange={(e) => handleChange(e)}
              >
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
                <button type="submit" className="post-review-button">
                  Post Review
                </button>
              </form>
            </div>
            <div className="users-reviews">
              {movie?.Reviews?.map((e) => {
                let user = users?.find(
                  (usuario) => e?.User_Review === usuario?.id
                );
                return (
                  <Review
                    review={e?.review}
                    key={e?.id}
                    username={user?.userName}
                    image={user?.image}
                    date={e.createdAt}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

//<Review review={element?.review} key={element?.id} username={user?.userName} image={user?.image}/>
