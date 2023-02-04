import React from "react";
import "../HomeMovie/HomeMovie.css"

export default function HomeMovie({ peliculas }) {
    return (
        <div className="HomeMovie">
            {
                peliculas.map(data => {
                    return (
                        <div className="Peliculas">
                            <button className="GO" >PREMIERE</button>
                            <img src={data.imageVertical}></img>
                        </div>
                    )
                })
            }
        </div>
    )
}