import React from "react";
import "./homedash.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { Widget } from "../widgets/Widget";

export const HomeDash = () => {
  return (
    <div className="home">
      <SideBarDash />
      <div className="homeContainer">
        <NavBarDash />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="reviews" />
          <Widget type="screenings" />
          <Widget type="sales" />
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
