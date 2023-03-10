import React from "react";
import Chair from "../../img/asiento.svg/";
import "./seating.css";

const Seats = ({ handleClick, seatsData, letra, asientosSeleccionados }) => {
  return (
    <div className="seats">
      <div className="Filaizquierda">
        {seatsData
          .filter((seat) => seat.row === letra && seat.number <= 20)
          .map((seat) => (
            <button
              key={`${seat.row}${seat.number}`}
              className="asiento"
              data-value={`${seat.row}${seat.number}-${seat.id}`}
              onClick={handleClick}
              disabled={seat.reserved || seat.payed}
              style={{
                backgroundColor: asientosSeleccionados.includes(
                  `${seat.row}${seat.number}-${seat.id}`
                )
                  ? "#ffff00"
                  : seat.reserved || seat.payed
                  ? "red"
                  : "white",
              }}
            >
              <img
                key={`${seat.row}${seat.number}-${seat.id}`}
                data-value={`${seat.row}${seat.number}-${seat.id}`}
                src={Chair}
                alt="Asiento"
              />
            </button>
          ))}
      </div>
      <div className="Filaderecha">
        {seatsData
          .filter(
            (seat) =>
              seat.row === letra && seat.number > 20 && seat.number <= 40
          )
          .map((seat) => (
            <button
              key={`${seat.row}${seat.number}`}
              className="asiento"
              data-value={`${seat.row}${seat.number}-${seat.id}`}
              onClick={handleClick}
              disabled={seat.reserved || seat.payed}
              style={{
                backgroundColor: asientosSeleccionados.includes(
                  `${seat.row}${seat.number}-${seat.id}`
                )
                  ? "#ffff00"
                  : seat.reserved || seat.payed
                  ? "red"
                  : "white",
              }}
            >
              <img
                key={`${seat.row}${seat.number}-${seat.id}`}
                data-value={`${seat.row}${seat.number}-${seat.id}`}
                src={Chair}
                alt="Asiento"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Seats;
