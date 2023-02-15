import React from "react";
import "./drinks.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { DrinksTable } from "./DrinksTable.jsx";

export const DrinksDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash />
        <DrinksTable />
      </div>
    </div>
  );
};

export default DrinksDash;
