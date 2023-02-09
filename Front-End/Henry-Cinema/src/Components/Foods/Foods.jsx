import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { getFoods, getDrinks, getCombos } from "../../redux/actions/index";
import Footer from "../footer/footer"
import SearchBarFood from "./SearchBarFood/SearchBarFood";

import CardsFoods from "../Foods/CardsFoods/CardsFoods";
import "./Foods.css";

function Foods() {
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foods);
  const allDrinks = useSelector((state) => state.drinks);
  const combos = useSelector((state) => state.combos);
  const [seeFood, setSeeFoods] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('combos');

  useEffect(() => {
    dispatch(getFoods());
    dispatch(getDrinks());
    dispatch(getCombos());
    setTimeout(()=>{
      setLoading(false);
    },1000)
    setSeeFoods('combos')
  }, [dispatch]);
  
  let handleClickFood= (e) =>{
      setSeeFoods(e);
      setSelected(e)

  }
  
  if (loading) {
    return <Loader />
  }

  return (
    <div className="containerComponent">
      <Nav></Nav>
      
      <div className="container-foods">
        <div className="buttons-foods">
        <div className={`button-combos ${selected === "combos" && "selected"}`} onClick={() => handleClickFood("combos")}>Combos</div>
          <div className={`button-foods ${selected === "foods" && "selected"}`} onClick={() => handleClickFood("foods")}>Pop-Corn and Food</div>
          <div className={`button-drinks ${selected === "drinks" && "selected"}`} onClick={() => handleClickFood("drinks")}>Drinks</div>
        </div>
        <div className="container-all">
        <SearchBarFood className="search-bar-food"/>
        {seeFood === "combos" && (<div className="containerForCards">
          {seeFood === "combos" &&
            combos.map((e) => (
              <CardsFoods
                key={e.id}
                kind={seeFood}
                name={e.name}
                description={e.description}
                price={e.price}
                image={e.image}
              ></CardsFoods>
            ))}
        </div>)}

        {seeFood === "drinks" && (<div className="containerForCards">
          {seeFood === "drinks" &&
            allDrinks.map((e) => (
              <CardsFoods
                key={e.id}
                kind={seeFood}
                name={e.name}
                description={e.description}
                price={e.price}
                image={e.image}
              ></CardsFoods>
            ))}
        </div>)}

        {seeFood === "foods" && (<div className="containerForCards">
          {seeFood === "foods" &&
            allFoods.map((e) => (
              <CardsFoods
                key={e.id}
                kind={seeFood}
                name={e.name}
                description={e.description}
                price={e.price}
                image={e.image}
              ></CardsFoods>
            ))}
        </div>)}
        </div>
        
      </div>
        <Footer/>
    </div>
  );
}

export default Foods;
