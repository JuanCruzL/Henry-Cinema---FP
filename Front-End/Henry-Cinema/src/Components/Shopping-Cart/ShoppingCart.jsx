import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./ShoppingCart.css"


export default function ShoppingCart() {
  const shoppingCartItems = useSelector(state => state.ShoppingCartItems)
  const[items,setItems] = useState([])
    let total = 0;
    if(shoppingCartItems.length) {
      console.log("el type de price es:", typeof shoppingCartItems[0].price)
      
    }
    
    const calculateTotal = () => {
      for(let i=0;i<shoppingCartItems;i++) {
        total = 5
      }
    }
    let price = 45.70
    useEffect(()=>{
      calculateTotal()
      setItems([...items, shoppingCartItems])
    },[shoppingCartItems])

  return (
    <div className="shoppingContainer">
        {shoppingCartItems.map(e => <div className="shoppingItems"><div className="shoppingText">{e.name}</div></div>)}
        <div className="shoppingItems"><div className="shoppingText">Total:</div><div className="price">${total}</div></div>
    </div>
  )
}
