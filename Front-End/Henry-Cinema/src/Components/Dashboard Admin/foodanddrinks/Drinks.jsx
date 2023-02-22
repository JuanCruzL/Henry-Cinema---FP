import React, { useEffect } from "react";
import "./drinks.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { DrinksTable } from "./DrinksTable.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DrinksDash = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
      navigate("/");
    }
  });
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash location="Drinks" />
        <DrinksTable />
      </div>
    </div>
  );
};

export default DrinksDash;
