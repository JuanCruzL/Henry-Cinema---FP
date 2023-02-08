import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, getRelease, requestGenders } from "../../redux/actions";
import Nav from "../Nav/Nav";
import HomeCarrusel from "./HomeCarrusel/HomeCarrusel";
import HomeMovie from "./HomeMovie/HomeMovie";
import HomePaginated from "./HomePaginated/HomePaginated";
import Footer from "../footer/footer";
import "../Home/Home.css";
import Loader from "../Loader/Loader"

export default function Home() {
  const dispatch = useDispatch();

  const allMovies = useSelector((state) => state.searchMovies);
  const cartelera = useSelector((state) => state.allMovies);

  const [currentPage, setCurrentPage] = useState(1); //* Creamos una constante ponde guardar/setear la pagina actual(1)
  const [moviesPerPage, setMoviesPerPage] = useState(8); //* Creamos una constante para escoger el limite de peliculas por pagina(8)
  const indexOfLastMovie = currentPage * moviesPerPage; //* Obtenemos el indice del ultimo elemento de la pagina actual
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; //* Obtenemos el indice del primer elemento de la pagina actual
  const currentMovie = allMovies.slice(indexOfFirstMovie, indexOfLastMovie); //* Obtenemos los datos entre los 2 indices anteriores

  const [loading, setLoading] = useState(true);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getRelease());
    dispatch(requestGenders());
    setLoading(false);
  }, [dispatch]);
  
  if (!allMovies.length) {
    return <Loader />
  }
  return (

    <div className="Homehome">
      <Nav setCurrentPage={setCurrentPage}/>
      <div className="BodyHome">
        <HomeCarrusel cartelera={cartelera}/>
        <HomePaginated peliculas={allMovies.length} moviesPerPage={moviesPerPage} paginated={paginated}/>
        <HomeMovie peliculas={currentMovie}/>
      </div>
      <Footer/>
    </div>
  );
}
