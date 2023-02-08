import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { getFoods, getDrinks, getCombos } from "../../redux/actions/index";
import Footer from "../footer/footer"

import CardsFoods from "../Foods/CardsFoods/CardsFoods";
import "./Foods.css";

function Foods() {
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foods);
  const allDrinks = useSelector((state) => state.drinks);
  const combos = useSelector((state) => state.combos);
  const [seeFood, setSeeFoods] = useState("");
  const [loading, setLoading] = useState(true);
  /* console.log(allFoods);
  console.log(allDrinks);
  console.log(combos); */

  useEffect(() => {
    dispatch(getFoods());
    dispatch(getDrinks());
    dispatch(getCombos());
    setTimeout(()=>{
      setLoading(false);
    },1000)
  }, [dispatch]);
  
  
  if (loading) {
    return <Loader />
  }

  return (
    <div className="containerComponent">
      <Nav></Nav>
      <div className="container-foods">
        <div className="buttons-foods">
          <div className="button-combos" onClick={() => setSeeFoods("combos")}>Combos</div>
          <div className="button-foods" onClick={() => setSeeFoods("foods")}>Pop-Corn and Food</div>
          <div className="button-drinks" onClick={() => setSeeFoods("drinks")}>Drinks</div>
        </div>

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
        <Footer/>
    </div>
  );
}

export default Foods;
