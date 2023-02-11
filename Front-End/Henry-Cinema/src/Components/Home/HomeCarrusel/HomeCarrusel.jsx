import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../HomeCarrusel/HomeCarrusel.css";

export default function HomeCarrusel({ cartelera }) {
  var tiempo;
  let actual = 0;
  var cantidad = 0;
  const velocidad = 5000;
  mostrar(actual);
  tiempo = setInterval(() => { Next(); }, velocidad);
  
  


  function puntos(n) {
    var ptn = document.getElementsByClassName("punto");
    for (let i = 0; i < ptn.length; i++) {
      if (ptn[i].className.includes("activo")) {
        ptn[i].className = ptn[i].className.replace("activo", "");
        break;
      }
    }
    ptn[n].className = "punto activo";
  }
  function mostrar(n) {
    cantidad =document.getElementsByClassName("carteleraHome").length;
    actual = n;
    if(document.getElementsByClassName("carteleraHome").length==0){
      actual=0;
      clearInterval(tiempo);
      tiempo = null;
    }else{
      if (cantidad > 0) {
        var imagenes = document.getElementsByClassName("carteleraHome");
        for (let i = 0; i < imagenes.length; i++) {
          if (imagenes[i].className.includes("actual")) {
            imagenes[i].className = imagenes[i].className.replace(" actual", "");
            break;
          }
        }
          imagenes[n].className = "carteleraHome actual";
          puntos(n);
      }
    }
  }

  function Next() {
    actual++;
    if (actual >= cantidad) {actual = 0;}
    mostrar(actual);
  }
  function Prev() {
    actual--;
    if (actual < 0) {actual = cantidad - 1;}
    mostrar(actual);
  }

  function playpause() {
    if (document.getElementById("btnPauseHome")) {
        var boton = document.getElementById("btnPauseHome");
        if (tiempo == null) {
          boton.src = "https://www.pngmart.com/files/3/Pause-Button-Transparent-Background.png";
          tiempo = setInterval(() => { Next(); }, velocidad);
        } else {
          clearInterval(tiempo);
          tiempo = null;
          boton.src = "https://static.vecteezy.com/system/resources/previews/001/200/436/original/music-player-button-play-png.png";
        }
    }
  }
  
  return (
    <div className="HomeCarrusel">
      <div className="contenedorCarrusel">
        <div className="Carrusel">
          {cartelera.map((data,index) => {
            let name="carteleraHome";
            if(index==0){name="carteleraHome actual"}
            return (
              <div key={data.apiId} className={name}>
                <button id={data.apiId} className="BuyT">BUY TICKETS</button>
                <Link to={`/movie/${data.apiId}`}>
                  <button id={data.apiId} className="Trail">PLAY TRAILER</button>
                </Link>
                <img src={data.imageHorizontal}></img>
              </div>
            );
          })}

          <button role="button" id="Prev" className="Prev" onClick={() => Prev()}>{" "}&#10094;{" "}</button>

          <button role="button" id="Next" className="Next" onClick={() => Next()}>{" "}&#10095;{" "}</button>

          <div className="puntos">
            {cartelera.map((data, index) => {
              return (
                index != 0 ?
                  <span key={Math.random()*10000} className="punto" onClick={() => mostrar(index)}></span>
                  :<span  key={Math.random()*1000} className="punto activo" onClick={() => mostrar(index)}></span>
              )
            })
            }
          </div>

          <div className="botonPause">
            <img src="https://www.pngmart.com/files/3/Pause-Button-Transparent-Background.png" id="btnPauseHome" onClick={() => playpause()} />
          </div>

        </div>
      </div>
    </div>
  );
}

