import React from "react";
import "../HomeCarrusel/HomeCarrusel.css";

export default function HomeCarrusel({ Prev, Next, cartelera }) {
  return (
    <div className="HomeCarrusel">
      <a>
        <button
          role="button"
          id="Prev"
          className="Prev"
          onClick={(e) => Prev(e)}
        >
          {" "}
          &#10094;{" "}
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
                <button id={data.id} className="Trail">
                  PLAY TRAILER
                </button>
                <img src={data.imageHorizontal}></img>
              </div>
            );
          })}
        </div>
      </div>
      <button role="button" id="Next" className="Next" onClick={(e) => Next(e)}>
        {" "}
        &#10095;{" "}
      </button>
    </div>
  );
}
