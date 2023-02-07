import React from "react";
import "../HomeCarrusel/HomeCarrusel.css";
import { Link } from "react-router-dom";

export default function HomeCarrusel({ Prev, Next, cartelera }) {
  return (
    <div className="HomeCarrusel">
      <a>
        <button role="button" id="Prev" className="Prev" onClick={() => Prev()}>
          {" "}&#10094;{" "}
        </button>
      </a>
      <div className="contenedorCarrusel">
        <div className="Carrusel">
          {cartelera.map((data) => {
            return (
              <div key={data.apiId} className="card">
                <button id={data.apiId} className="BuyT">
                  BUY TICKETS
                </button>
                <Link to={`/movie/${data.apiId}`}>
                  <button id={data.apiId} className="Trail">
                    PLAY TRAILER
                  </button>
                </Link>
                <img src={data.imageHorizontal}></img>
              </div>
            );
          })}
        </div>
      </div>
      <button role="button" id="Next" className="Next" onClick={() => Next()}>
        {" "}&#10095;{" "}
      </button>
    </div>
  );
}
