import axios from "axios";
import React, { useState, useEffect } from "react";
import { addItem } from "../../redux/actions";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Ticket({ asientosSeleccionados, screening, initialNumberOfEntries }) {
  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();
  const [isReserved, setIsReserved] = useState(false);
  const navigate = useNavigate(); // declarar useNavigate aquí

  useEffect(() => {
    const newIds = asientosSeleccionados.map((asiento) =>
      parseInt(asiento.split("-")[1])
    );
    setIds(newIds);
  }, [asientosSeleccionados]);

  const exampleTicket = {
    id: screening.id,
    ids: ids,
    name: screening.title,
    price: 10,
    quantity: asientosSeleccionados.length,
  };

  const reserveSeats = () => {
    const id = screening.id;
    if (isReserved) {
      swal("Seats already reserved");
      return;
    }
    setIsReserved(true);
    axios
      .put(`https://henry-cinema-fp-production.up.railway.app/screenings/${id}/seatIds`, { ids })
      .then((response) => {
        dispatch(addItem(exampleTicket));
        swal({
          title: "Seats reserved successfully. ",
          text: "Seats will be reserved for 5 minutes until payment is made.\n Do you want to purchase food?",
          icon: "success",
          buttons: {
            cancel: "No",
            confirm: "Yes",
          },
        }).then((value) => {
          if (value) {
            navigate("/foods");
          } else {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Error!",
          text: "An error has occurred reserving seats",
          icon: "error",
        });
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
      <button
        onClick={reserveSeats}
        disabled={!(initialNumberOfEntries === asientosSeleccionados.length)}
      >
        Reserve
      </button>
    </div>
  );
}

export default Ticket;
