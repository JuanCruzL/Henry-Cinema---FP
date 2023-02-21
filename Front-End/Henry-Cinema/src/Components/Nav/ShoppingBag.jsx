import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { lessItem } from '../../redux/actions';
import { sendShopping } from '../../redux/actions';

function ShoppingBag() {
    const dispatch = useDispatch();
    const url = useSelector((state) => state.url);
    const allItems = useSelector(state => state.shoppingBag)
    const total = allItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
    }, 0);
    const handleSend = (e) => {
        dispatch(sendShopping(e));
        console.log("enviado")
        setTimeout(() =>{
          window.open(url, "_blank");
        },1000) 
    }

    const exampleTicket = {
        id: "ajsigojasioda",
        name: "Jurasick Park",
        price: 0,
        quantity: 10
    }
    const handleLess = (e) => {
        dispatch(lessItem(e));
    }
    return (
        <div>
            {/* <button onClick={()=>console.log(allItems)}>click me</button>  */}



            {/* CONTENIEDO DE PRODUCTOS */}
            <div>

                <div className="menu-linkBagTable" id="244">
                    <p className='NavTableBagLink'>Name</p>
                    <p className='NavTableBagLink'>Price</p>
                    <p className='NavTableBagLink'>Cant</p>
                    <p className='NavTableBagLink'>SubTotal</p>
                    <p className='NavTableBagLink'>X</p>

                </div>
                {/* Movie */}
                {/* <div className="menu-linkBag" id="244">

                    <p className='menu-linkBag-Movie'>Movie:{exampleTicket.name}</p>
                    <p className='menu-linkBag-Movie'>{exampleTicket.price}</p>
                    <p className='menu-linkBag-Movie'>({exampleTicket.quantity})</p>
                    <p className='menu-linkBag-Movie'>${exampleTicket.price * exampleTicket.quantity}</p>
                    <p className='menu-linkBag-Movie'></p>
                </div> */}
                {

                    allItems.map(i => (
                        (<div className="menu-linkBag" id="244">
                            {/* Map de la compra */}
                            <p className='menu-linkBag-Data'>{i.name}</p>
                            <p className='menu-linkBag-Data'>{i.price}</p>
                            <p className='menu-linkBag-Data'>({i.quantity})</p>
                            <p className='menu-linkBag-Data'>${(i.price * i.quantity).toFixed(1)}</p>
                            <button className='menu-linkBag-Delete' onClick={() => handleLess(i.id)}>-</button>
                        </div>)
                    ))
                }

            </div>

            {/* DIV PAGAR Y TOTAL */}
            <div>
            {(total + exampleTicket.price)!=0?(
                <div className="menu-linkBagTotal" id="244">
                    {/* Map de la compra */}
                    <button className='menu-linkBagPay' onClick={() => handleSend(allItems)}>Pagar</button>
                    <p className='menu-linkBag-Data'>Total: $ {(total + exampleTicket.price).toFixed(2)}</p>
                </div>
            ):(
                <div className="menu-linkBagTotal" id="244">
                    {/* Map de la compra */}
                    <p className='menu-linkBag-Data'>-</p>
                    <p className='menu-linkBag-Data'>-</p>
                </div>
            )}
                
            </div>

        </div>
    )
}

export default ShoppingBag