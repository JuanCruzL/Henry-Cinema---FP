import React from "react";
import "../HomeMovie/HomeMovie.css";
import { Link } from "react-router-dom";

export default function HomeMovie({ peliculas }) {
  return (
    <div className="HomeMovie">
      {peliculas.map((data) => {
        let idc = data.apiId ? data.apiId : data.id
        return (
          <div key={idc} className="Peliculas">
            {idc != "Error" && (
              <Link to={`/movie/${idc}`}>
                <button className="GO">PREMIERE</button>
                <img alt={idc} src={data.imageVertical}></img>
              </Link>
            )}
            {idc =="Error"&&(
              <img src={data.imageVertical} className="Error" ></img>
            )}
          </div>
        );
      })}
    </div>
  );
}
