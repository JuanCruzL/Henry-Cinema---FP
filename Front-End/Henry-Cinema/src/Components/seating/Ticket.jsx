import axios from "axios";
import React, { useState, useEffect } from "react";

function Ticket({ asientosSeleccionados, screening }) {
  const [ids, setIds] = useState([]);
  console.log(ids);

  useEffect(() => {
    const newIds = asientosSeleccionados.map((asiento) =>
      parseInt(asiento.split("-")[1])
    );
    setIds(newIds);
  }, [asientosSeleccionados]);
  console.log(ids);

  const reserveSeats = () => {
    const id = screening.id;
    axios
      .put(`http://localhost:3001/screenings/:${id}/seatIds`, { ids })
      .then((response) => {
        console.log(response.data);
        alert("Seats reserved successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error reserving seats");
      });
  };

  return (
    <div className="TiketDetail">
      <h1>Ticket</h1>
      <p>Room: {screening.roomLetter}</p>
      <p>Date: {screening.date}</p>
      <p>Start: {screening.startTime} </p>
      <p>Lang: {screening.language}</p>
      <p>Movie: {screening.title}</p>
      <p>
        Seats:{" "}
        {asientosSeleccionados
          .map((asiento) => asiento.split("-")[0])
          .join(", ")}
      </p>
      <p>Tickets : {asientosSeleccionados.length}</p>
      <p>Total: {asientosSeleccionados.length * 10} USD </p>
      {/* <p>IDs: {ids.join(", ")}</p> */}
      <button onClick={reserveSeats}>Reserve</button>
    </div>
  );
}

export default Ticket;
