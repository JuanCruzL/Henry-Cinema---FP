import React from "react";

function Ticket({ asientosSeleccionados, screening }) {
  return (
    <div className="TiketDetail">
      <h1>Ticket</h1>
      <p>Room: {screening.roomLetter}</p>
      <p>Date: {screening.date}</p>
      <p>Start: {screening.startTime} </p>
      <p>Lang: {screening.language}</p>
      <p>Movie: {screening.title}</p>
      <p>Seats: {asientosSeleccionados.join(", ")}</p>
      <p>Tickets : {asientosSeleccionados.length}</p>
      <p>Total: {asientosSeleccionados.length * 10} USD </p>
      <button onClick={reserve}>Reserve</button>
    </div>
  );
}

export default Ticket;
