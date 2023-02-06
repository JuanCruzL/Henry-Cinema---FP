import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader"
import "./Movies.css";
import { useState, useEffect } from 'react';
import { getMovies, getRelease } from "../../redux/actions";
import { useSelector,useDispatch } from 'react-redux';
import Nav from "../../Components/Nav/Nav"
import Footer from "../../Components/Footer/footer";
import Movie from "./Movie"


const Movies = () => {
const dispatch = useDispatch();


  const allMovies = useSelector((state) => state.movies);
  const allReleases = useSelector((state) => state.releases);
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    if (!allMovies.length && !allReleases.length) {
      dispatch(getMovies());
      dispatch(getRelease());
    }
    setLoading(false);
    setImages(allMovies.map(movie => ({ apiID: movie.apiId, image: movie.imageVertical })));
    setMovies(allReleases.map(movie => ({ apiID: movie.id, image: movie.image })));
  }, [allMovies, setImages,allReleases]);

  if (loading) {
    return <Loader />
  }
  console.log(movies)

  const genres = Array.from(new Set(allMovies.reduce((acc, movie) => [...acc, ...movie.genres], [])));

  console.log(genres);
  const sortedMovies = [...allMovies].sort((a, b) => b.voteAverage - a.voteAverage);
  
  const bestMovies = sortedMovies.slice(0, 4);
  
  console.log(bestMovies);

  
  
  return (
    <div className="Container">
<Nav/>
      <section>
        <div className="Available">
          <h3>AVAILABLE FILMS</h3>
        </div>

        <div className="carousel-movies">
          <Carousel images={images} />
        </div>
      </section>

      <section className="movies-filter">
      <div>
          <fieldset>
          <select >
            <option value="todos">Genre</option>
            <option value="db">DB</option>
            <option value="Api">API</option>
          </select>
        </fieldset>
      </div> 
      <div>
          <fieldset>
          <select >
            <option value="todos">Clasification</option>
            <option value="db">DB</option>
            <option value="Api">API</option>
          </select>
          </fieldset>
      </div>
      <div>
        <fieldset>
          <select >
            <option value="todos">Language </option>
            <option value="sub">Sub</option>
            <option value="dub">Dub</option>
          </select>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <select >
            <option value="todos">Calification</option>
            <option value="More Popular">More Popular</option>
            <option value="Less Popular">Less Popular</option>
          </select>
        </fieldset>
      </div>
      </section>
      <section>
        <div className="Filter-results">
          <Movie
          movie = {bestMovies[0]}
          />
          <Movie
          movie = {bestMovies[1]}
          />
          <Movie
          movie = {bestMovies[2]}
          />
          <Movie
          movie = {bestMovies[3]}
          />
        </div>
      </section>

      
      <div className="movies-prox">
        <h1>Next Releases</h1>
      </div>
      <div className="carousel-movies-b">
        <Carousel 
        images= {movies}
        />
        <Footer/>
        </div>
        
    </div>
    
  );
};

export default Movies;
