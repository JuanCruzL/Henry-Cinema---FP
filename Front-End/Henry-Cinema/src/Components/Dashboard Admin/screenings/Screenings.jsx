import React, { useEffect } from "react";
import "./screenings.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { ScreeningsTable } from "../screenings/ScreeningsTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ScreeningsDash = () => {
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
        <NavBarDash location="Screenings" />
        <ScreeningsTable />
      </div>
    </div>
  );
};

export default ScreeningsDash;
