import React, { useEffect } from "react";
import "./users.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { UsersTable } from "../users/UsersTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UsersDash = () => {
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
        <NavBarDash location="User" />
        <UsersTable />
      </div>
    </div>
  );
};

export default UsersDash;
