import React from 'react'
import './seating.css'
import { useState,useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { getasientos} from "../../redux/actions";
import Seats from './Seats';
import Ticket from './Ticket'

function Seating() {
  const dispatch = useDispatch();
  const asientos = useSelector(state => state.seats);
  const [asientosArray,setAsientosArray] = useState([])
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  
  const filas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];


  const handleClick = (event) => {
    const asiento = event.target.getAttribute("data-value");
    if (asientosSeleccionados.includes(asiento)) {
      setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
    } else {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  };
  useEffect(() => {
    dispatch(getasientos());
    setAsientosArray(asientos)
    
  }, []);


  return (
    <div className="seating">
      <div className="screen">
        <div className="pantalla">
      <h1> Screen</h1>
      </div>

      {filas.map(letra => (
      <Seats
        seatsData={asientos}
        handleClick={handleClick}
        letra={letra}
        asientosSeleccionados={asientosSeleccionados}
      />
    ))}

<div className="selected">
  <Ticket asientosSeleccionados = {asientosSeleccionados} />
</div>

</div>
    </div>
  )
}

export default Seating

