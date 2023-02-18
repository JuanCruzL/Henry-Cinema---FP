import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./ShoppingCart.css"


export default function ShoppingCart() {
    const[items,setItems] = useState([])
    const shoppingCartItems = useSelector(state => state.ShoppingCarItems)

    for(let i=0; i < 4; i++) {
      // setItems(shoppingCartItems[i])
    }

    let price = 45.70
    useEffect(()=>{

    },[])
  return (
    <div className="shoppingContainer">
        <div className="shoppingItems"><div className="shoppingText">x1 Large Popcorn sssssssssss12345</div></div>
        {items?.map(e => <div className="shoppingItems"><div className="shoppingText">x2 Avatar 2 Cup</div></div>)}
      
        <div className="shoppingItems"><div className="shoppingText">Total:</div><div className="price">${price}</div></div>
    </div>
  )
}
