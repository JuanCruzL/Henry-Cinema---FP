import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader"
import "./Movies.css";
import { useState, useEffect } from 'react';
import { getMovies, getRelease,requestGenders,requestTopMovies } from "../../redux/actions";
import { useSelector,useDispatch } from 'react-redux';
import Nav from "../../Components/Nav/Nav"
import Footer from "../../Components/Footer/footer";
import Movie from "./Movie"


const Movies = () => {
const dispatch = useDispatch();
const topMovies = useSelector(state => state.topMovies);
const uniqueGenres = useSelector(state => state.uniqueGenres);//trae los generos disponibles en la cartelera
  const allMovies = useSelector((state) => state.movies);// trae todas las peliculas de redux que estan en la cartelera
  const allReleases = useSelector((state) => state.releases);// trae las proximas 
  const [movies, setMovies] = useState([]);// guarda las peliculas del corrousel del footer
  const [images, setImages] = useState([]);// renderiza las imagenes para el carrousel 
  const [loading, setLoading] = useState(true);// setea el loading
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [Filtered, setFiltered] = useState([]);
  const [FourTopMovies, setFourTopMovies] = useState([]);
 

  useEffect(() => {
    if (!allMovies.length && !allReleases.length) {
      dispatch(getMovies());
      dispatch(getRelease());
    }
    setTimeout(()=>{
      setLoading(false);
    },1500)
    setImages(allMovies.map(movie => ({ apiID: movie.apiId, image: movie.imageVertical })));
    setMovies(allReleases.map(movie => ({ apiID: movie.id, image: movie.image })));
  }, [allMovies, setImages]);

  useEffect( () =>{
    if (!uniqueGenres.length && !topMovies.length) {
      dispatch(requestGenders());
    dispatch(requestTopMovies());
    }
    setFourTopMovies(topMovies)
    
  },[dispatch]);

  if (loading) {
    return <Loader />
  }

  console.log(uniqueGenres);
  console.log(topMovies);

  
  const handleSelect = (event) => {
    setSelectedGenre(event.target.value);
    const filteredMovies = allMovies.filter(
      (movie) => movie.genres.includes(event.target.value)
    );
    setFiltered(filteredMovies);
    console.log(Filtered)
  };
  
 

  
  
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
          {/* <fieldset>
          <select >
            <option value="todos">Genre</option>
            <option value="db">DB</option>
            <option value="Api">API</option>
          </select>
        </fieldset> */}
        <select onChange={handleSelect} value={selectedGenre || ''}>
        <option value="">Select a genre</option>
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
        

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
        {/* {Filtered.map(movie => (
        <Movie movie={movie} />
      ))} */}
         
         {selectedGenre === null ? (
        topMovies.map(movie => (
          <Movie  movie={movie} />
        ))
      ) : (
        Filtered.map(movie => (
          <Movie movie={movie} />
        ))
      )}

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
