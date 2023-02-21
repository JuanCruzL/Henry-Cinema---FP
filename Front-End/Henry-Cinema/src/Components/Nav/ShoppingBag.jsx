import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { lessItem } from '../../redux/actions';
import { sendShopping } from '../../redux/actions';

function ShoppingBag() {
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.shoppingBag)
    const total = allItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
      }, 0);
    const handleSend = (e) => {
        dispatch(sendShopping(e));
        console.log("enviado")
    }
  
    const exampleTicket = {
        id:"ajsigojasioda",
        name:"Jurasick Park",
        price:7,
        quantity:10
    }
    const handleLess = (e) => {
        dispatch(lessItem(e));
    }
    return (
    <div>
        <button onClick={()=>console.log(allItems)}>click me</button> 

        

        {/* CONTENIEDO DE PRODUCTOS */}
        <div>

        <div className="menu-linkBag" id="244">
                   <p>Name</p> 
                  <p>Price</p> 
                  <p>Cant</p> 
                  <p>SubTotal</p>
                  
        </div>
        {/* Movie */}
        <div className="menu-linkBag" id="244">
            
             <p>Movie:{exampleTicket.name}</p>
                  <p>{exampleTicket.price}</p>
                  <p>({exampleTicket.quantity})</p>
                  <p>${exampleTicket.price*exampleTicket.quantity}</p>
        </div>
        {
            
            allItems.map(i => (
                (<div className="menu-linkBag" id="244">
                {/* Map de la compra */}
                <p>{i.name}</p> 
                       <p>{i.price}</p> 
                      <p>({i.quantity})</p> 
                      <p>${(i.price * i.quantity).toFixed(1)}</p>
                      <button onClick={()=>handleLess(i.id)}>-</button>
            </div>)
            ))
        }
        
        </div>

        {/* DIV PAGAR Y TOTAL */}
        <div>

        <div className="menu-linkBag" id="244">
            {/* Map de la compra */}
            
                   <p>Total: $ {(total+exampleTicket.price).toFixed(2)}</p> 
                   <button onClick={() =>handleSend(allItems)}>Pagar</button> 
                    
        </div>
        </div>
        
    </div>
  )
}

export default ShoppingBag