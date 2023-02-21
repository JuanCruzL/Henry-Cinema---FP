import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions";
import "./CardsFoods.css";
import { addItem } from "../../../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

<<<<<<< HEAD
function CardsFoods({ name, description, price, image, kind }) {
  const shoppingCartItems = useSelector(state => state.ShoppingCartItems)
  
  const dispatch = useDispatch();
  
  const handleAdd = () => {
   dispatch(addToCart({
      name,
      price,
    }))
=======
function CardsFoods({ name,id, description, price, image, kind }) {
  const dispatch = useDispatch();
  const shopping = useSelector((state) => state.shoppingBag);
  const handleAdd = (e) => {
    /* e.preventDefault(); */
     dispatch(addItem(e)); 
    /* console.log(e)
  
    console.log("agregado") */
>>>>>>> c1bab0161017768c693de7da59eba4c29ff3ee53
  }
  return (
    <div className={`card${kind}`}>
      <img className="image-cardFood" src={image} alt={name} />
      <div className="information-food">
        <h1 className="name-cardFood">{name}</h1>
        <h2 className="description-cardFood">{description}</h2>
        <h4 className="price-cardFood">$ {price}</h4>
<<<<<<< HEAD
        <button className="button-cardFood" onClick={() => handleAdd()}>
=======
        <button className="button-cardFood" onClick={()=>handleAdd({id,name,price:parseFloat(price),quantity:1})}>
>>>>>>> c1bab0161017768c693de7da59eba4c29ff3ee53
          Add
        </button>
      </div>
    </div>
  );
}

export default CardsFoods;
