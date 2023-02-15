import React from "react";

function Ticket({ asientosSeleccionados }) {
  return (
    <div className="TiketDetail">
      <h1>Ticket</h1>
      <p>Room: H 2D</p>
      <p>Date: 14/2 22:15</p>
      <p>Lang: Sub</p>
      <p>Movie: El Gato con botas</p>
      <p>Lugares: {asientosSeleccionados.join(", ")}</p>
      <p>Tickets : {asientosSeleccionados.length}</p>
      <p>Tototal: {asientosSeleccionados.length * 10} USD </p>
      <button>Reserve</button>
    </div>
  );
}

export default Ticket;
