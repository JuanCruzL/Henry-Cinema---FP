import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import { toggleDarkLight } from "../Utils/Switch";
import { cartelera, peliculas } from "./Data";
import HomeCarrusel from "./HomeCarrusel/HomeCarrusel";
import HomeMovie from "./HomeMovie/HomeMovie";
import HomePaginated from "./HomePaginated/HomePaginated";
import Nav from "../Nav/Nav";

export default function Home() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1); //* Creamos una constante ponde guardar/setear la pagina actual(1)
  const [moviesPerPage, setMoviesPerPage] = useState(8); //* Creamos una constante para escoger el limite de peliculas por pagina(8)
  const indexOfLastMovie = currentPage * moviesPerPage; //* Obtenemos el indice del ultimo elemento de la pagina actual
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; //* Obtenemos el indice del primer elemento de la pagina actual
  const currentMovie = peliculas.slice(indexOfFirstMovie, indexOfLastMovie); //* Obtenemos los datos entre los 2 indices anteriores

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    Prev();
    Next();
  }, []);

  function Prev() {
    var fila = document.querySelector(".contenedorCarrusel");
    var flechaIz = document.getElementById("Prev");
    flechaIz.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;
    });
  }

  function Next() {
    var fila = document.querySelector(".contenedorCarrusel");
    var flechaDe = document.getElementById("Next");
    flechaDe.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;
    });
  }

  return (
    <div id="Switch" className="light-mode">
      <Nav />
      <div className="Homehome">
        <div className="navHome">
          <HomeCarrusel Prev={Prev} Next={Next} cartelera={cartelera} />
          <HomePaginated
            peliculas={peliculas.length}
            moviesPerPage={moviesPerPage}
            paginated={paginated}
          />
          <HomeMovie peliculas={currentMovie} />
          <br></br>
          <footer>
            <h1>CONTACT US</h1>
            <br></br>
            <div className="Contact">
              <div>
                <p>Contacto 1</p>
              </div>
              <div>
                <p>Contacto 2</p>
              </div>
              <div>
                <p>Contacto 3</p>
              </div>
              <div>
                <p>Contacto 4</p>
              </div>
              <div>
                <p>Contacto 5</p>
              </div>
              <div>
                <p>Contacto 6</p>
              </div>
              <div>
                <p>Contacto 7</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
