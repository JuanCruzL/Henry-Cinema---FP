import React, { useEffect } from "react";
import "./sales.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { SalesTable } from "../sales/SalesTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SalesDash = () => {
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
        <NavBarDash location="Sales" />
        <SalesTable />
      </div>
    </div>
  );
};

export default SalesDash;
