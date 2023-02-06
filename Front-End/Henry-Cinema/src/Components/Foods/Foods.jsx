import React from "react";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFoods, getDrinks, getCombos } from "../../redux/actions/index";

function Foods() {
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foods);
  const allDrinks = useSelector((state) => state.drinks);
  console.log(allFoods);
  console.log(allDrinks);

  useEffect(() => {
    dispatch(getFoods());
    dispatch(getDrinks());
  }, [dispatch]);

  return (
    <div>
      <Nav></Nav>
    </div>
  );
}

export default Foods;
