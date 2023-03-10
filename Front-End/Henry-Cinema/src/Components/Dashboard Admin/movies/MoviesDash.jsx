import React, { useEffect } from "react";
import "./moviesdash.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { MoviesTable } from "../movies/MoviesTable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const MoviesDash = () => {
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
        <NavBarDash location="Movies" />
        <MoviesTable />
      </div>
    </div>
  );
};

export default MoviesDash;
