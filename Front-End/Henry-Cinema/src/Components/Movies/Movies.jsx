import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader"
import "./Movies.css";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getRelease} from '../../redux/actions/index';

const Movies = () => {


const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);
  const allReleases = useSelector((state) => state.releases);
  console.log(allMovies)
 const [movies, setMovies] = useState([]);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!allMovies.length && !allReleases.length) {
      dispatch(getRelease())
    }
    setLoading(false);
    setImages(allMovies.map(movie => ({ apiID: movie.apiId, image: movie.imageVertical })));
    setMovies(allReleases.map(movie => ({ apiID: movie.id, image: movie.image })));
  }, [allMovies, dispatch, setImages,allReleases]);

  if (loading) {
    return <Loader />
  }
  console.log(movies)

  
  
  return (
    <div className="Container">

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
              {/* <img src={allMovies[2].image} alt="" /> */}

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
              {/* <img src={allMovies[1].image} alt="" /> */}
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
        <h1>Next Releases</h1>
        
      </div>
      <div className="carousel-movies-b">
        <Carousel 
        images= {movies}
        />
        </div>
    </div>
  );
};

export default Movies;
