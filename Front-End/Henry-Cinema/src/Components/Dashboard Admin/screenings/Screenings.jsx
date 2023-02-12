import React from "react";
import "./screenings.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { ScreeningsTable } from "../screenings/ScreeningsTable";

export const Screenings = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash />
        <ScreeningsTable />
      </div>
    </div>
  );
};

export default Screenings;
