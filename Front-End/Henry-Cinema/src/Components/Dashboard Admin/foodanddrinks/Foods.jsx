import React from "react";
import "./foods.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { FoodsTable } from "../foodanddrinks/FoodsTable";

export const FoodsDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash location="Foods" />
        <FoodsTable />
      </div>
    </div>
  );
};

export default FoodsDash;
