import React from "react";
import "./combos.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { CombosTable } from "./CombosTable.jsx";

export const CombosDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash location="Combos" />
        <CombosTable />
      </div>
    </div>
  );
};

export default CombosDash;
