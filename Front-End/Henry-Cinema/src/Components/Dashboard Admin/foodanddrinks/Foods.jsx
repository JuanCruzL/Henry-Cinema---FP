import React, { useEffect } from "react";
import "./foods.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { FoodsTable } from "../foodanddrinks/FoodsTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FoodsDash = () => {
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
        <NavBarDash location="Foods" />
        <FoodsTable />
      </div>
    </div>
  );
};

export default FoodsDash;
