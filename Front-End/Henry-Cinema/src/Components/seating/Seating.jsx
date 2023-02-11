import React from 'react'
import './seating.css'
import { useState,useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { getasientos} from "../../redux/actions";
import Seats from './Seats';

function Seating() {
  const dispatch = useDispatch();
  const asientos = useSelector(state => state.seats);
  const [asientosArray,setAsientosArray] = useState([])
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  
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

{/* //-----------fila A--------------------- */}
      
<Seats seatsData={asientos} handleClick={handleClick} letra= "A" asientosSeleccionados = {asientosSeleccionados}/>

{/* **************** fila B************ */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "B" asientosSeleccionados = {asientosSeleccionados} />

{/* ************* fila C *****************/}

<Seats seatsData={asientos} handleClick={handleClick} letra= "C" asientosSeleccionados = {asientosSeleccionados} />

{/* *********** fila D  *********** */}
  
<Seats seatsData={asientos} handleClick={handleClick} letra= "D" asientosSeleccionados = {asientosSeleccionados} />

{/* ******* fila E ********* */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "E" asientosSeleccionados = {asientosSeleccionados} />

{/* ************* fila F ************* */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "F" asientosSeleccionados = {asientosSeleccionados} />

{/* *************** Fila G ****************** */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "G" asientosSeleccionados = {asientosSeleccionados} />

{/* *************** Fila H  ***************** */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "H" asientosSeleccionados = {asientosSeleccionados} />

{/* --------------  Fila I -----------------*/}

<Seats seatsData={asientos} handleClick={handleClick} letra= "I" asientosSeleccionados = {asientosSeleccionados} />

{/* *********** Fila J **************** */}

<Seats seatsData={asientos} handleClick={handleClick} letra= "J" asientosSeleccionados = {asientosSeleccionados} />

<div className="selected">
      <p>Funcion El Gato con botas</p>
      <p>Sala H 2D Fecha 14/2 22:15</p>
      <p>Lugares: {asientosSeleccionados.join(" ,")}</p>
      <p>Cantidad de entradas : {asientosSeleccionados.length}</p>
      <p>Monto tototal: {asientosSeleccionados.length* 10} USD </p>
</div>

</div>
    </div>
  )
}

export default Seating

