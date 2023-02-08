import React from "react";
import "./moviesdash.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";

export const MoviesDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash />
      </div>
    </div>
  );
};

export default MoviesDash;
