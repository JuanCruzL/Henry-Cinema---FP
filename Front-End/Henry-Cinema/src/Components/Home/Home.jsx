import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import { cartelera, peliculas } from "./Data";
import Nav from "../Nav/Nav"
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

<<<<<<< HEAD
  return (
    <div id="Switch" className="light-mode">
      <Nav />
      <div className="Homehome">
        <div className="navHome">
          <div className="grid-container-n">
            <a>Henry CINEMA</a>
            <a>CINEMAS</a>
            <a>MOVIES</a>
            <a>FOOD & DRINKS</a>
            <a>About</a>
            <div className="SearchBar">
              <input type="text" placeholder="SearchMovie" className="pagi" />
              <button type="submit" className="pagiBo">
                Search
              </button>
=======
        <div className="Homehome">
            <Nav />
            <div className="BodyHome">
                <HomeCarrusel Prev={Prev} Next={Next} cartelera={cartelera} />
                <HomePaginated peliculas={peliculas.length} moviesPerPage={moviesPerPage} paginated={paginated} />
                <HomeMovie peliculas={currentMovie} />
                <br></br>
>>>>>>> e9fb199e17518349b909496db2d7d3186edc3c36
            </div>
            <button
              type="button"
              className="Switch"
              onClick={(e) => toggleDarkLight(e)}
              title="Toggle dark/light mode"
            >
              🌑
            </button>
            <a>
              <img
                src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
                width={30}
                height={30}
              ></img>
            </a>
          </div>
          <HomeCarrusel Prev={Prev} Next={Next} cartelera={cartelera} />
          <HomePaginated
            peliculas={peliculas.length}
            moviesPerPage={moviesPerPage}
            paginated={paginated}
          />
          <HomeMovie peliculas={currentMovie} />
          <br></br>
          <footer className="abajo">
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
<<<<<<< HEAD
      </div>
    </div>
  );
}
=======
    )
}
>>>>>>> e9fb199e17518349b909496db2d7d3186edc3c36
