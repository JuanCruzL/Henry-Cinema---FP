import React from "react";
import "./moviesdash.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { MoviesTable } from "../movies/MoviesTable";

export const MoviesDash = () => {
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash />
        <MoviesTable />
      </div>
    </div>
  );
};

export default MoviesDash;
