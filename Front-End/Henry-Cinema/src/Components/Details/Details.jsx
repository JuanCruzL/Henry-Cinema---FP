import React from "react";
import "./Details.css";
//trabajando (Juan Cruz)

export default function Details() {
  return (
    <div className="detailsContainer">
      <div className="MovieInfo">
        <div className="Genre">
          <h1>Animation</h1>
        </div>
        <div className="movieTitle">
          <h2>Rock Dog 3: rockeando juntos</h2>
        </div>
        <div className="infoBar">
          <p className="info minutes">88 minutes</p>
          <p className="info">ATP</p>
          <p className="info">Animation</p>
        </div>
        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">Buy Tickets</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
        {/* <button className="ticketsButton">Buy tickets</button> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hkhTHJJoD9k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          possimus odio, reprehenderit consequatur incidunt inventore maxime id
          mollitia blanditiis eius optio obcaecati iure tempora cumque
          veritatis, excepturi soluta eum perspiciatis!
        </p>
      </div>
      <div>
        <img src="https://static.voyalcine.net/Uploads/i1826.jpg" alt="image" />
        <p>all details</p>
      </div>
    </div>
  );
}
