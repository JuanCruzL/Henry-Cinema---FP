import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions";
import "./CardsFoods.css";
import { addItem } from "../../../redux/actions";
import { useState } from "react";
import { sendShopping } from "../../../redux/actions";

function CardsFoods({ name,id, description, price, image, kind }) {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.shoppingBag)
 
  const handleAdd = (e) => {
    /* e.preventDefault(); */
   
      dispatch(addItem(e)); 
    
     
    
  }
  return (
    <div className={`card${kind}`}>
      <img className="image-cardFood" src={image} alt={name} />
      <div className="information-food">
        <h1 className="name-cardFood">{name}</h1>
        <h2 className="description-cardFood">{description}</h2>
        <h4 className="price-cardFood">$ {price}</h4>
        <button className="button-cardFood" onClick={()=>handleAdd({id,name,price:parseFloat(price),quantity:1})}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CardsFoods;
