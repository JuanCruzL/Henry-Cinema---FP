import React from 'react'
import './seating.css'
import { useState } from 'react';
import Chair from "../../img/asiento.svg/"

function Seating() {

  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  
  const handleClick = (event) => {
    const asiento = event.target.getAttribute("data-value");
    if (asientosSeleccionados.includes(asiento)) {
      setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
    } else {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  };

  

  return (
    <div className="seating">
      
      <div className="screen">
        <div className="pantalla">
      <h1> Pantalla</h1>
      </div>
{/* //-----------fila A---------------------//         */}
      
<div className="seats">
<div className="Filaizquierda">   
{[...Array(20)].map((_, i) => (
        <div key={`A${i + 1}`} className="asiento" data-value={`A${i + 1}`} onClick={handleClick}>
          <img key={`A${i + 1}`} data-value={`A${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}

</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`A${i + 10}`} className="asiento" data-value={`A${i + 11}`} onClick={handleClick}>
          <img key={`A${i + 10}`} data-value={`A${i + 11}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* **************** fila B************ */}

<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`B${i + 1}`} className="asiento" data-value={`B${i + 1}`} onClick={handleClick}>
          <img key={`B${i + 1}`} data-value={`B${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`B${i + 10}`} className="asiento" data-value={`B${i + 11}`} onClick={handleClick}>
          <img key={`B${i + 10}`}  data-value={`B${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* ************* fila C *****************/}

<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`C${i + 1}`} className="asiento" data-value={`C${i + 1}`} onClick={handleClick}>
          <img key={`C${i + 1}`} data-value={`C${i + 1}`}  onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`C${i + 10}`} className="asiento" data-value={`C${i + 11}`} onClick={handleClick}>
          <img key={`C${i + 10}`} data-value={`C${i + 11}`}  onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* *********** fila D  *********** */}
  

<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`D${i + 1}`} className="asiento" data-value={`D${i + 1}`} onClick={handleClick}>
          <img key={`D${i + 1}`} data-value={`D${i + 1}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`D${i + 10}`} className="asiento" data-value={`D${i + 11}`} onClick={handleClick}>
          <img key={`D${i + 10}`} data-value={`D${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* ******* fila E ********* */}


<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`E${i + 1}`} className="asiento" data-value={`E${i + 1}`} onClick={handleClick}>
          <img key={`E${i + 1}`} data-value={`E${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"  style={{ 
        filter: isSelected ? "hue-rotate(90deg)" : "none" 
      }} />
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`E${i + 10}`} className="asiento" data-value={`E${i + 11}`} onClick={handleClick}>
          <img key={`E${i + 10}`} data-value={`E${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"  style={{ 
        filter: isSelected ? "hue-rotate(90deg)" : "none" 
      }} />
        </div>
      ))}
</div>
</div>
{/* ************* fila F ************* */}


<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`F${i + 1}`} className="asiento" data-value={`F${i + 1}`} onClick={handleClick}>
          <img key={`F${i + 1}`} data-value={`F${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`F${i + 10}`} className="asiento" data-value={`F${i + 11}`} onClick={handleClick}>
          <img key={`F${i + 10}`} data-value={`F${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>
{/* *************** Fila G ****************** */}
<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`G${i + 1}`} className="asiento" data-value={`G${i + 1}`} onClick={handleClick}>
          <img key={`G${i + 1}`} data-value={`G${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`G${i + 10}`} className="asiento" data-value={`G${i + 11}`} onClick={handleClick}>
          <img key={`G${i + 10}`} data-value={`G${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* *************** Fila H  ***************** */}

<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`H${i + 1}`} className="asiento" data-value={`H${i + 1}`} onClick={handleClick}>
          <img key={`H${i + 1}`} data-value={`H${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`H${i + 10}`} className="asiento" data-value={`H${i + 11}`} onClick={handleClick}>
          <img key={`H${i + 10}`} data-value={`H${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* --------------  Fila I -----------------*/}


<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`I${i + 1}`} className="asiento" data-value={`I${i + 1}`} onClick={handleClick}>
          <img key={`I${i + 1}`} data-value={`I${i + 1}`} onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`I${i + 10}`} className="asiento" data-value={`I${i + 11}`} onClick={handleClick}>
          <img key={`I${i + 10}`} data-value={`I${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>

{/* *********** Fila J **************** */}

<div className="seats">
<div className="Filaizquierda">    
{[...Array(20)].map((_, i) => (
        <div key={`J${i + 1}`} className="asiento" data-value={`J${i + 1}`} onClick={handleClick}>
          <img key={`J${i + 1}`} data-value={`J${i + 1}`}  onClick={handleClick} src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
<div className='Filaderecha'>  
{[...Array(20)].map((_, i) => (
        <div key={`J${i + 10}`} className="asiento" data-value={`J${i + 11}`} onClick={handleClick}>
          <img key={`J${i + 10}`} data-value={`J${i + 11}`} onClick={handleClick}  src={Chair} alt="Asiento"/>
        </div>
      ))}
</div>
</div>




</div>
Asientos seleccionados: {asientosSeleccionados.join(" ,")} 
    </div>
  )
}

export default Seating
