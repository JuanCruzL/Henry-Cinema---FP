import axios from "axios";
import React, { useState, useEffect } from "react";
import { addItem } from "../../redux/actions";
import { useDispatch } from "react-redux";

function Ticket({ asientosSeleccionados, screening }) {
  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const newIds = asientosSeleccionados.map((asiento) =>
      parseInt(asiento.split("-")[1])
    );
    setIds(newIds);
  }, [asientosSeleccionados]);

  const exampleTicket = {
    id: screening.id,
    name: screening.title,
    price: 10,
    quantity: asientosSeleccionados.length,
  };

  const reserveSeats = () => {
    const id = screening.id;
    axios
      .put(`http://localhost:3001/screenings/${id}/seatIds`, { ids })
      .then((response) => {
        // console.log(response.data);
        alert("Seats reserved successfully");
        dispatch(addItem(exampleTicket));
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
      <button onClick={reserveSeats}>Reserve</button>
    </div>
  );
}

export default Ticket;
