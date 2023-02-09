import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader"
import "./Movies.css";
import { useState, useEffect } from 'react';
import { getMovies, getRelease, requestGenders } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "../../Components/Nav/Nav"
import Footer from "../footer/footer";
import Movie from "./Movie"


const Movies = () => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.uniqueGenres);//trae los generos disponibles en la cartelera
  const allMovies = useSelector((state) => state.movies);// trae todas las peliculas de redux que estan en la cartelera
  const allReleases = useSelector((state) => state.releases);// trae las proximas 
  const [movies, setMovies] = useState([]);// guarda las peliculas del corrousel del footer
  const [images, setImages] = useState([]);// renderiza las imagenes para el carrousel 
  const [loading, setLoading] = useState(true);// setea el loading
  const [selectedGenre, setSelectedGenre] = useState();
  const [Filtered, setFiltered] = useState([]);
  const [genresCurrent, setGenresCurrent] = useState([])
  const [classifications, setClassifications] = useState([]);
  const [availableMovies, setAvailableMovies] = useState([]);

  const getClassifications = () => {
    const classificationsArray = Array.from(new Set(allMovies.map(movie => movie.classification)));
    setClassifications(classificationsArray);
  };
  useEffect(() => {
    if (!selectedGenre) {
      setFiltered(availableMovies);
    }
  }, [selectedGenre, availableMovies]);


  useEffect(() => {
    getClassifications();
  }, [allMovies]);



  useEffect(() => {
    if (!allMovies.length && !allReleases.length) {
      dispatch(getMovies());
      dispatch(getRelease());
      getClassifications();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500)
    setImages(allMovies.map(movie => ({ apiID: movie.apiId, image: movie.imageVertical })));
    setMovies(allReleases.map(movie => ({ apiID: movie.id, image: movie.image })));
    setAvailableMovies(allMovies)
  }, [allMovies, setImages]);

  useEffect(() => {
    if (!genres.length) {
      dispatch(requestGenders());
    }
    setGenresCurrent(genres)

  }, [genresCurrent, dispatch]);

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
  console.log(selectedGenre)

  //------------------- funcion que ordena por popularidad-------------------------------


  // const handleCalificationSort = (event) => {
  //   if (event.target.value === "Calification") {
  //     return;
  //   }
  //   let sortedMovies = [...availableMovies];
  //   if (Filtered.length === 0) {
  //     sortedMovies.sort((a, b) => {
  //       if (event.target.value === "More Popular") {
  //         return b.voteAverage - a.voteAverage;
  //       }
  //       return a.voteAverage - b.voteAverage;
  //     });
  //   } else {
  //     sortedMovies = [...Filtered].sort((a, b) => {
  //       if (event.target.value === "More Popular") {
  //         return b.voteAverage - a.voteAverage;
  //       }
  //       return a.voteAverage - b.voteAverage;
  //     });
  //   }
  //   setAvailableMovies(sortedMovies);
  //   setFiltered(sortedMovies);
  // };

  const handleCalificationSort = (event) => {
    if (event.target.value === "Calification") {
      return;
    }
    let sortedMovies;
    if (!selectedGenre) {
      sortedMovies = [...availableMovies];
    } else {
      sortedMovies = [...Filtered];
    }
    sortedMovies.sort((a, b) => {
      if (event.target.value === "More Popular") {
        return b.voteAverage - a.voteAverage;
      }
      return a.voteAverage - b.voteAverage;
    });
    setAvailableMovies(sortedMovies);
    setFiltered(sortedMovies);
  };





  console.log(classifications)
  console.log(Filtered)

  return (
    <div className="Container">
      <Nav />
      <div className="ContainerMovies">

        <section className="films">
          <div className="Available">
            <h3>AVAILABLE FILMS</h3>
          </div>
          <Carousel images={images} />
        </section>

        <section className="movies-filter">

          <select onChange={handleSelect} value={selectedGenre}>
            <option value="" style={{ color: 'red' }}>{selectedGenre ? "All" : "Select a Genre"}</option>
            {genresCurrent.map((genre) => (
              <option key={genre} value={genre} disabled={selectedGenre}>
                {genre}
              </option>
            ))}
          </select>


          <select >
            <option value="todos">Clasification</option>
            {classifications.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select >
            <option value="todos">Lang </option>
            <option value="sub">Sub</option>
            <option value="dub">Dub</option>
          </select>
          <select onChange={handleCalificationSort}>
            <option value="More Popular">More Popular</option>
            <option value="Less Popular">Less Popular</option>
          </select>
        </section>
        <section className="movies-Result">

          <div className="Filter-results">
            {Filtered.map(movie => (
              <Movie movie={movie} />
            ))}

            {/* {selectedGenre === null || !selectedGenre ? (
              availableMovies.map(movie => (
                <Movie movie={movie} />
              ))
            ) : (
              Filtered.map(movie => (
                <Movie movie={movie} />
              ))
            )} */}

          </div>
        </section>


        <div className="carousel-movies-b">
        <h1>Next Releases</h1>
          <Carousel
            images={movies}
          />
        </div>
      </div>
      <Footer />

    </div>

  );
};

export default Movies;
