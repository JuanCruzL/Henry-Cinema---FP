import React from "react";
import "./homedash.scss";
import { useEffect } from "react";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { Widget } from "../widgets/Widget";
import { Featured } from "../featured/Featured";
import { Chart } from "../chart/Chart";
import { List } from "../table/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const HomeDash = () => {
  // const loggedUser = useSelector((state) => state.currentUser);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
  //     navigate("/");
  //   }
  // });

  return (
    <div className="home">
      <SideBarDash />
      <div className="homeContainer">
        <NavBarDash location="Home" />
        <div className="widgets">
          {/* <Widget type="users" className="widget" />
          <Widget type="reviews" className="widget" />
          <Widget type="screenings" className="widget" />
          <Widget type="sales" className="widget" /> */}
        </div>
        <div className="charts">
          {/* <Featured className="featured" /> */}
          <Chart className="chart" />
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
