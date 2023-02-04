import React from "react";
import Carousel from "./Carousel";
import "./Movies.css";

const Movies = () => {
  const images = [
    "https://www.universalpictures-latam.com/tl_files/content/movies/puss_in_boots_2/posters/02.jpg",
    "https://pics.filmaffinity.com/Avatar_El_sentido_del_agua-722646748-large.jpg",
    "https://m.cinesargentinos.com.ar/poster/9292-el-aro-4.jpg?1671824848",
    "https://www.procinal.com/uploads/PELICULAS/Img_movies/Img_360x500/LA%20NOVIA%20MALDITA1.jpg",
    "https://dx35vtwkllhj9.cloudfront.net/trafalgarreleasing/bts-yet-to-come-in-cinemas/images/regions/intl/onesheet.jpg",
    "https://mx.web.img3.acsta.net/pictures/21/04/14/17/28/5059871.jpg",
    "https://pics.filmaffinity.com/Argentina_1985-599655212-large.jpg",
  ];
  return (
    <div className="Container">
      <section className="Cinemas">
        <h1>Cinemas</h1>
        <select>
          <option value="1">California</option>
          <option value="2">Buenos Aires</option>
          <option value="3">Lima</option>
        </select>
      </section>

      <section>
        <div className="Available">
          <h3>AVAILABLE FILMS</h3>
        </div>

        <div className="carousel-movies">
          <Carousel images={images} />
        </div>
      </section>

      <section className="movies-filters-section">
        <div className="FIlters-movies">
          <select>
            <option value="1">FILTERS</option>
            <option value="2">CLASIFICATION</option>
            <option value="3">GENRES</option>
          </select>

          <div className="movies-filters">
            <p>ROOMS</p>
            <p>ROOM 1</p>
            <p>ROOM 2</p>
            <p>GENDERS</p>
            <p>TERROR</p>
          </div>

          <div className="movies-rigth">
            <div className="movies-rigth-1">
              <img src={images[0]} alt="" />

              <div className="movies-rigth-1-1">
                <h6>Gato Con Botas: El ultimo deseo</h6>
                <div className="movies-rigth-1-2">
                  <button>see details</button> <span>+12 years</span>{" "}
                  <p>190 minutes</p>
                </div>
                <h6>Hours</h6>
                <div className="movies-rigth-1-2">
                  <button>2D</button>
                  <p>Sub</p>
                  <p>Dub</p>
                </div>
              </div>
            </div>
            <div className="movies-rigth-1">
              <img src={images[1]} alt="" />
              <div className="movies-rigth-1-1">
                <h6>AVATAR 2</h6>
                <div className="movies-rigth-1-2">
                  <button>see details</button> <span>+12 years</span>{" "}
                  <p>190 minutes</p>
                </div>
                <h6>Hours</h6>
                <div className="movies-rigth-1-2">
                  <button>2D</button>
                  <p>Sub</p>
                  <p>Dub </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="movies-prox">
        <h1>Proximos Estrenos</h1>
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[4]} alt="" />
        <img src={images[5]} alt="" />
      </div>
    </div>
  );
};

export default Movies;
