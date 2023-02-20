import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions";
import "./CardsFoods.css";

function CardsFoods({ name, description, price, image, kind }) {
  const shoppingCartItems = useSelector(state => state.ShoppingCartItems)
  
  const dispatch = useDispatch();
  
  const handleAdd = () => {
   dispatch(addToCart({
      name,
      price,
    }))
  }
  return (
    <div className={`card${kind}`}>
      <img className="image-cardFood" src={image} alt={name} />
      <div className="information-food">
        <h1 className="name-cardFood">{name}</h1>
        <h2 className="description-cardFood">{description}</h2>
        <h4 className="price-cardFood">$ {price}</h4>
        <button className="button-cardFood" onClick={() => handleAdd()}>
          Add
        </button>
      </div>
    </div>
  );
}

export default CardsFoods;
