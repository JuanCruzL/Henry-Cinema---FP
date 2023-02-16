import React from "react";
import "./sales.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { SalesTable } from "../sales/SalesTable";

export const SalesDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash location="Sales" />
        <SalesTable />
      </div>
    </div>
  );
};

export default SalesDash;
