import React from "react";
import "./users.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { UsersTable } from "../users/UsersTable";

export const UsersDash = () => {
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
