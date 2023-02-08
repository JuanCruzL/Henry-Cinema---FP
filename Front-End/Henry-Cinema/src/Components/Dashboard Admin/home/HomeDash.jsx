import React from "react";
import "./homedash.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { Widget } from "../widgets/Widget";
import { Featured } from "../featured/Featured";
import { Chart } from "../chart/Chart";
import { List } from "../table/Table";

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
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">LATEST TRANSACTIONS</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
