import React from "react";
import Carousel from "./Carousel";
import Loader from "../Loader/Loader";
import "./Movies.css";
import { useState, useEffect } from "react";
import { getMovies, getNextReleases, requestGenres } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import Footer from "../footer/footer";
import Movie from "./Movie";

const Movies = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.uniqueGenres); //trae los generos disponibles en la cartelera
  const allMovies = useSelector((state) => state.movies); // trae todas las peliculas de redux que estan en la cartelera
  const allReleases = useSelector((state) => state.nextReleases); // trae las proximas
  const [movies, setMovies] = useState([]); // guarda las peliculas del corrousel del footer
  const [images, setImages] = useState([]); // renderiza las imagenes para el carrousel
  const [loading, setLoading] = useState(true); // setea el loading
  const [selectedGenre, setSelectedGenre] = useState();
  const [Filtered, setFiltered] = useState([]);
  const [genresCurrent, setGenresCurrent] = useState([]);
  const [classifications, setClassifications] = useState([]);
  const [selectedClassification, setSelectedClassification] = useState(null);
  const [availableMovies, setAvailableMovies] = useState([]);
  const [filteredState, setFilteredState] = useState(null);

  //cosas para el nuevo filtro(probando)

  const [filter, setFilter] = useState({
    Genre: "",
<<<<<<< HEAD
    Classification: "todos",
=======
    Classific: "todos",
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
    Calification: "Calification"
  })

  const getClassifications = () => {
    const classificationsArray = Array.from(
      new Set(allMovies.map((movie) => movie.classification))
    );
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
      dispatch(getNextReleases());
      getClassifications();
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    setImages(
      allMovies.map((movie) => ({
        apiID: movie.apiId ? movie.apiId : movie.id,
        image: movie.imageVertical,
      }))
    );
   
   
    setAvailableMovies(allMovies);
    setMovies(
      allReleases.map((movie) => ({ apiID: movie.id, image: movie.image }))
    );
  }, [allMovies, setImages]);
 
  console.log(allReleases)
  // useEffect(() => {
  //   if (!genres.length) {
  //     dispatch(requestGenres());
  //   }
  //   setGenresCurrent(genres);
  // }, [genresCurrent, dispatch]);

  if (loading) {
    return <Loader />;
  }


<<<<<<< HEAD
  // const handleSelect = (event) => {
  //   if (event.target.value === null) {
  //     setSelectedGenre(null);
  //     setFiltered(availableMovies);
  //     return;
  //   }
  //   setSelectedGenre(event.target.value);
  //   let filteredMovies = [];
  //   if (Filtered.length > 0) {
  //     filteredMovies = Filtered.filter((movie) =>
  //       movie.genres.includes(event.target.value)
  //     );
  //   }
  //   if (filteredMovies.length === 0) {
  //     filteredMovies = allMovies.filter((movie) =>
  //       movie.genres.includes(event.target.value)
  //     );
  //   }
  //   setFiltered(filteredMovies);
  //   setFilteredState(filteredMovies)
  // };
  // console.log(selectedGenre);

  const handleSelect = (event) => {
    if (event.target.value === null) {
      setSelectedGenre(null);
      setFiltered(availableMovies);
      setFilteredState(null);
      return;
    }
    setSelectedGenre(event.target.value);
    let filteredMovies = allMovies.filter((movie) =>
      movie.genres.includes(event.target.value)
    );
    setFiltered(filteredMovies);
    setFilteredState(filteredMovies);
  };

  //------------------- funcion que ordena por popularidad-------------------------------


  const handleCalificationSort = (event) => {
    if (event.target.value === "Calification") {
      // setFiltered(availableMovies);
      return;
    }
    let sortedMovies;
    if (!selectedGenre && !classifications) {
      sortedMovies = [...availableMovies];
=======

  function FiltradosContenedor(e, filtroCambiado) {
    let filteredMovies = allMovies;
    let actual = e.target.value;
    console.log(actual)
    /* FILTRO DE GENERO */
    if (filtroCambiado == "Genre") {
      actual != "" ? filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(actual)) : filteredMovies;
      setFilter({ ...filter, Genre: actual })
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
    } else {
      filter.Genre != "" ? filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(filter.Genre)) : filteredMovies;
    }

<<<<<<< HEAD
  // console.log(classifications);
  // console.log(Filtered);

  //--------------------filtro de clasification--------------------------------
  // const handleClassificationFilter = (event) => {
  //   if (event.target.value === "todos") {
  //     setSelectedClassification(null);
  //     setFiltered(availableMovies);
  //     return;
  //   }
  //   setSelectedClassification(event.target.value);
  //   let filteredMovies = [];
  //   if (Filtered.length > 0) {
  //     filteredMovies = Filtered.filter((movie) =>
  //       movie.classification === event.target.value
  //     );
  //   }
  //   if (filteredMovies.length === 0) {
  //     filteredMovies = availableMovies.filter((movie) =>
  //       movie.classification === event.target.value
  //     );
  //   }
  //   setFiltered(filteredMovies);
  // };





  // const handleClassificationFilter = (event) => {
  //   if (event.target.value === "todos") {
  //     setSelectedClassification(null);
  //     setFiltered(availableMovies);
  //     setFilteredState(null);
  //     setFilteredState(null);
  //     setSelectedGenre();
  //     return;
  //   }


  //   setSelectedClassification(event.target.value);
  //   let filteredMovies = [];
  //   if (filteredState) {
  //     filteredMovies = filteredState.filter((movie) =>
  //       movie.classification === event.target.value
  //     );
  //   } else {
  //     filteredMovies = Filtered.filter((movie) =>
  //       movie.classification === event.target.value
  //     );
  //   }
  //   setFiltered(filteredMovies);
  //   setFilteredState(Filtered);
  // };


  const handleClassificationFilter = (event) => {
    if (event.target.value === "todos") {
      setSelectedClassification(null);
      setFiltered(availableMovies);
      setFilteredState(null);
      setSelectedGenre(null);
      return;
    }

    setSelectedClassification(event.target.value);
    let filteredMovies = filteredState.filter((movie) =>
      movie.classification === event.target.value
    );
    setFiltered(filteredMovies);
  };



  function FiltradosContenedor(e, filtroCambiado) {
    let filteredMovies = allMovies;
    let actual = e.target.value;

    /* FILTRO DE GENERO */
    if (filtroCambiado == "Genre") {
      actual != "" ? filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(actual)) : filteredMovies;
      setFilter({ ...filter, Genre: actual })
    } else {
      filter.Genre != "" ? filteredMovies = filteredMovies.filter((movie) => movie.genres.includes(filter.Genre)) : filteredMovies;
    }

    /* FILTRO DE CALIFICACION */
    if (filtroCambiado == "Classification") {
      actual!="todos"? filteredMovies = filteredMovies.filter((movie) =>movie.classification === actual):filteredMovies;
      setFilter({...filter,classification:actual})
    }else{
      filter.Classification!="todos"? filteredMovies = filteredMovies.filter((movie) =>movie.classification === filter.Classification):filteredMovies;
    }
    
    /* FILTRO DE MAS POLULARES */
    if (filtroCambiado == "Calification") {
      actual != "Calification" ?
        filteredMovies.sort((a, b) => {
          if (actual == "More Popular") {return b.voteAverage - a.voteAverage;}
          return a.voteAverage - b.voteAverage;
        })
        : filteredMovies;

      setFilter({ ...filter, Calification: actual });
    }else{
      filter.Calification != "Calification" ?
        filteredMovies.sort((a, b) => {
          if (filter.Calification == "More Popular") {return b.voteAverage - a.voteAverage;}
          return a.voteAverage - b.voteAverage;
        })
        : filteredMovies;
    }
    /*======================================= */


    // console.log(actual, " - ", filtroCambiado)
    // console.log(filter)
    // console.log(filteredMovies)
    setFiltered(filteredMovies)
=======
    /* FILTRO DE CLASIFICACION */
    if (filtroCambiado == "Classification") {
      console.log(actual,filtroCambiado)
      actual!="todos"? filteredMovies = filteredMovies.filter((movie) =>movie.classification ==actual):filteredMovies;
      console.log(filteredMovies)
      setFilter({...filter,Classific:actual})
    }else{
      filter.Classific!="todos"? filteredMovies = filteredMovies.filter((movie) =>movie.classification==filter.Classific):filteredMovies;
    }
    
    /* FILTRO DE MAS POLULARES */
    if (filtroCambiado == "Calification") {
      actual != "Calification" ?
        filteredMovies.sort((a, b) => {
          if (actual == "More Popular") {return b.voteAverage - a.voteAverage;}
          return a.voteAverage - b.voteAverage;
        })
        : filteredMovies;

      setFilter({ ...filter, Calification: actual });
    }else{
      filter.Calification != "Calification" ?
        filteredMovies.sort((a, b) => {
          if (filter.Calification == "More Popular") {return b.voteAverage - a.voteAverage;}
          return a.voteAverage - b.voteAverage;
        })
        : filteredMovies;
    }
    /*======================================= */
    setFiltered(filteredMovies);
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
  }

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
          <select onChange={(e) => FiltradosContenedor(e, "Genre")} >
            <option value="" style={{ color: "red" }} >
              Select a Genre
<<<<<<< HEAD
            </option>
            {genresCurrent.map((genre) => (
              <option key={genre} value={genre} >
                {genre}
              </option>
            ))}
          </select>

          <select onChange={(e) => FiltradosContenedor(e, "Classification")}>
            <option value="todos" onClick={() => setSelectedGenre(null)} > {selectedClassification ? "CLEAR" : "Classification"} </option>
            {classifications.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select>
            <option value="todos">Lang </option>
            <option value="sub">Sub</option>
            <option value="dub">Dub</option>
          </select>


          <select onChange={(e) => FiltradosContenedor(e, "Calification")}>
            <option value="Calification">Calification</option>
            <option value="More Popular">More Popular</option>
            <option value="Less Popular">Less Popular</option>
          </select>
        </section>

        {/* <section className="movies-filter">
          <select onChange={handleSelect} value={selectedGenre}>
            <option value="" style={{ color: "red" }} onClick={() => setSelectedGenre(null)}>
              {selectedGenre ? "CLEAR" : "Select a Genre"}
=======
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
            </option>
            {genresCurrent.map((genre) => (
              <option key={genre} value={genre} >
                {genre}
              </option>
            ))}
          </select>

<<<<<<< HEAD
          <select onChange={handleClassificationFilter}>
            <option value="todos" onClick={() => setSelectedGenre(null)} > {selectedClassification ? "CLEAR" : "Classification"} </option>
=======
          <select onChange={(e) => FiltradosContenedor(e, "Classification")}>
            <option value="todos" > Classification </option>
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
            {classifications.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select>
            <option value="todos">Lang </option>
            <option value="sub">Sub</option>
            <option value="dub">Dub</option>
          </select>

<<<<<<< HEAD
          <select onChange={handleCalificationSort}>
=======
          <select onChange={(e) => FiltradosContenedor(e, "Calification")}>
>>>>>>> 682b363ae5f758640fb3bb35345b00608789f8cc
            <option value="Calification">Calification</option>
            <option value="More Popular">More Popular</option>
            <option value="Less Popular">Less Popular</option>
          </select>
        </section> */}

        <section className="movies-Result">
          <div className="Filter-results">
            {Filtered.map((movie) => (
              <Movie movie={movie} />
            ))}


          </div>
        </section>

        <div className="carousel-movies-b">
          <div className="Available">
            <h3>Next Releases</h3>
          </div>
          <Carousel images={movies} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
