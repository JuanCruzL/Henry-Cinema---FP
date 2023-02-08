import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader"
import "./Movies.css";
import { useState, useEffect } from 'react';
import { getMovies, getRelease,requestGenders } from "../../redux/actions";
import { useSelector,useDispatch } from 'react-redux';
import Nav from "../../Components/Nav/Nav"
import Footer from "../../Components/Footer/footer";
import Movie from "./Movie"


const Movies = () => {
const dispatch = useDispatch();
const genres = useSelector(state => state.uniqueGenres);//trae los generos disponibles en la cartelera
  const allMovies = useSelector((state) => state.movies);// trae todas las peliculas de redux que estan en la cartelera
  const allReleases = useSelector((state) => state.releases);// trae las proximas 
  const [movies, setMovies] = useState([]);// guarda las peliculas del corrousel del footer
  const [images, setImages] = useState([]);// renderiza las imagenes para el carrousel 
  const [loading, setLoading] = useState(true);// setea el loading
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [Filtered, setFiltered] = useState([]);
  const [genresCurrent, setGenresCurrent] = useState([])
  const [classifications, setClassifications] = useState([]);
  const[availableMovies, setAvailableMovies] = useState([]);

const getClassifications = () => {
  const classificationsArray = Array.from(new Set(allMovies.map(movie => movie.classification)));
  setClassifications(classificationsArray);
};

useEffect(() => {
  getClassifications();
}, [allMovies]);

 

  useEffect(() => {
    if (!allMovies.length && !allReleases.length) {
      dispatch(getMovies());
      dispatch(getRelease());
      getClassifications();
    }
    setLoading(false);
    setImages(allMovies.map(movie => ({ apiID: movie.apiId, image: movie.imageVertical })));
    setMovies(allReleases.map(movie => ({ apiID: movie.id, image: movie.image })));
    setAvailableMovies(allMovies)
  }, [allMovies, setImages]);

  useEffect( () =>{
    if (!genres.length) {
      dispatch(requestGenders());
    }
    setGenresCurrent(genres)
    
  },[genresCurrent,dispatch]);

  if (loading) {
    return <Loader />
  }
  

  //------------------filtro de generos-------------------------------

  const handleSelect = (event) => {
    if (event.target.value === "") {
        setSelectedGenre(null);
        setFiltered([]);
        return;
    }
    setSelectedGenre(event.target.value);
    let filteredMovies = [];
    if (Filtered.length > 0) {
        filteredMovies = Filtered.filter(
            (movie) => movie.genres.includes(event.target.value)
        );
    } 
    if (filteredMovies.length === 0) {
        filteredMovies = allMovies.filter(
            (movie) => movie.genres.includes(event.target.value)
        );
    }
    setFiltered(filteredMovies);
  };


//------------------- funcion que ordena por popularidad-------------------------------


const handleCalificationSort = (event) => {
  if (event.target.value === "Calification") {
    return;
  }
  let sortedMovies = [...availableMovies];
  if (Filtered.length === 0) {
    sortedMovies.sort((a, b) => {
      if (event.target.value === "More Popular") {
        return b.voteAverage - a.voteAverage;
      }
      return a.voteAverage - b.voteAverage;
    });
  } else {
    sortedMovies = [...Filtered].sort((a, b) => {
      if (event.target.value === "More Popular") {
        return b.voteAverage - a.voteAverage;
      }
      return a.voteAverage - b.voteAverage;
    });
  }
  setAvailableMovies(sortedMovies);
  setFiltered(sortedMovies);
};


  console.log(classifications)

  
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
        <select onChange={handleSelect} value={selectedGenre}>
        <option value="">Select a genres</option>
        {genresCurrent.map((genre) => (
          <option key={genre} value={genre} disabled={selectedGenre}>
            {genre}
          </option>
        ))}
      </select>
        

      </div> 
      <div>
          <fieldset>
          <select >
            <option value="todos">Clasification</option>
            {classifications.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
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
        <select onChange={handleCalificationSort}>
  <option>Calification</option>
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
        availableMovies.map(movie => (
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
