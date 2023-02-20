import React, { useEffect } from "react";
import "./combos.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { CombosTable } from "./CombosTable.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CombosDash = () => {
  const loggedUser = useSelector((state) => state.currentUser);
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
        <NavBarDash location="Combos" />
        <CombosTable />
      </div>
    </div>
  );
};

export default CombosDash;
