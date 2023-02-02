import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../Home/Home.css';
import { toggleDarkLight } from '../Utils/Switch'
import HomeCarrusel from "./HomeCarrusel/HomeCarrusel";
import { cartelera } from "./Data";

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        Prev();
        Next();
    }, [])

    function Prev() {
        var fila = document.querySelector('.contenedorCarrusel');
        var flechaIz = document.getElementById('Prev');
        flechaIz.addEventListener('click', () => {
            fila.scrollLeft -= fila.offsetWidth;
        })
    }

    function Next() {
        var fila = document.querySelector('.contenedorCarrusel');
        var flechaDe = document.getElementById('Next');
        flechaDe.addEventListener('click', () => {
            fila.scrollLeft += fila.offsetWidth;
        })
    }

    return (
        <div id="Switch" className="light-mode">
            <div className="navHome">
                <div className="grid-container">
                    <a>Henry CINEMA</a>
                    <a>CINEMAS</a>
                    <a>MOVIES</a>
                    <a>FOOD & DRINKS</a>
                    <a>About</a>
                    <div className="SearchBar">
                        <input type="text" placeholder="SearchMovie" className="pagi" />
                        <button type="submit" className="pagiBo">Search</button>
                    </div>
                    <button type="button" className="Switch" onClick={e => toggleDarkLight(e)} title="Toggle dark/light mode">🌆</button>
                    <a>
                        <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" width={30} height={30}></img>
                    </a>
                </div>
                <HomeCarrusel
                    Prev={Prev}
                    Next={Next}
                    cartelera={cartelera}
                />
                <div className="Contenedor-Peliculas">
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://i.pinimg.com/originals/33/86/ee/3386ee5aad24d2bfa7c2c2dadb58f2b7.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://mfiles.alphacoders.com/930/930636.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://pbs.twimg.com/media/FVMN7XjWIAEiJQ_.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://mfiles.alphacoders.com/930/930636.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://i.pinimg.com/originals/33/86/ee/3386ee5aad24d2bfa7c2c2dadb58f2b7.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://mfiles.alphacoders.com/930/930636.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://pbs.twimg.com/media/FVMN7XjWIAEiJQ_.jpg"></img>
                    </div>
                    <div className="Peliculas">
                        <button>PREMIERE</button>
                        <img src="https://mfiles.alphacoders.com/930/930636.jpg"></img>
                    </div>
                </div>
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
    )
}

