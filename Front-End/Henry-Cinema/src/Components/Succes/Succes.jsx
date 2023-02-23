import React from "react";
import "./Succes.css"
import imageLogo from "../../img/henryCinema.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postTicket } from "../../redux/actions";
function Succes() {
    const dispatch = useDispatch();
    const items = window.localStorage.getItem("shoppingBag")
    const itemConvert = JSON.parse(items)
    let filterSeat = itemConvert.filter( c => c.hasOwnProperty("ids"));

    
    const handleClick = (e) => {
        e.preventDefault()
        
        localStorage.removeItem('shoppingBag');
        setTimeout(()=>{
          location.replace("/")
        },1000)

    }
    useEffect(() => {
      if(filterSeat) dispatch(postTicket(filterSeat))
    })
  return (
    <div className="container-succes">
      <img src="https://i.pinimg.com/originals/71/81/e8/7181e84d50cb87fa4ab9a5a8ab613dbe.jpg" className="image-succes" />
      <h1 className="title-succes">SUCCESFUL TRANSACTION !</h1>
      <p className="text-succes">
        The ticket and purchase was sent to your email, please check your email
      </p>
      <button className="button-succes" onClick={(e) => handleClick(e)}>Back Home</button>
      
    </div>
  );
}

export default Succes;
