import React from "react";
import "./seating.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getScreeningId } from "../../redux/actions";
import Seats from "./Seats";
import Ticket from "./Ticket";

function Seating() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const screening = useSelector((state) => state.screeningID);
  const [asientosArray, setAsientosArray] = useState([]);
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  const filas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const handleClick = (event) => {
    const asiento = event.target.getAttribute("data-value");
    if (asientosSeleccionados.includes(asiento)) {
      setAsientosSeleccionados(
        asientosSeleccionados.filter((a) => a !== asiento)
      );
    } else {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  };
  useEffect(() => {
    dispatch(getScreeningId(id));
    setAsientosArray(screening.seats);
  }, []);
  console.log(screening);
  return (
    <div className="seating">
      <div className="screen">
        <div className="pantalla">
          <h1> Screen</h1>
        </div>
        <div className="Container-Seating">
          {filas.map((letra) => (
            <Seats
              seatsData={asientosArray}
              handleClick={handleClick}
              letra={letra}
              asientosSeleccionados={asientosSeleccionados}
            />
          ))}
        </div>
        <div className="selected">
          <Ticket
            asientosSeleccionados={asientosSeleccionados}
            screening={screening}
          />
        </div>
      </div>
    </div>
  );
}

export default Seating;
