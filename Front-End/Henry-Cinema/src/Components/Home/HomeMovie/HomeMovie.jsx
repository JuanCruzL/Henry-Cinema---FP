import React from "react";
import "../HomeMovie/HomeMovie.css";
import { Link } from "react-router-dom";

export default function HomeMovie({ peliculas }) {
  return (
    <div className="HomeMovie">
      {peliculas.map((data) => {
        return (
          <div key={data.apiId} className="Peliculas">
            {data.apiId != "Error" && (
              <Link to={`/movie/${data.apiId}`}>
                <button className="GO">PREMIERE</button>
                <img alt={data.apiId} src={data.imageVertical}></img>
              </Link>
            )}
            {data.apiId=="Error"&&(
              <img src={data.imageVertical} className="Error" ></img>
            )}
          </div>
        );
      })}
    </div>
  );
}
