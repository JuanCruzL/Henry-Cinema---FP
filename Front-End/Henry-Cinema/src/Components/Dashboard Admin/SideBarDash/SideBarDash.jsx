import React from "react";
import "./sidebardash.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import GMobiledataRoundedIcon from "@mui/icons-material/GMobiledataRounded";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import LiquorRoundedIcon from "@mui/icons-material/LiquorRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThreePRoundedIcon from "@mui/icons-material/ThreePRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Logo from "../NavbarDash/images/logo-henry-cinema-mini.png";

export const SideBarDash = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="logo" alt="" src={Logo} />
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span className="span">Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon" />
            <span className="span">Users</span>
          </li>
          <li>
            <ReviewsIcon className="icon" />
            <span className="span">Reviews</span>
          </li>
          <li>
            <MovieFilterRoundedIcon className="icon" />
            <span className="span">Movies</span>
          </li>
          <li>
            <GMobiledataRoundedIcon className="icon" />
            <span className="span">Genres</span>
          </li>
          <li>
            <GroupWorkRoundedIcon className="icon" />
            <span className="span">Screenings</span>
          </li>
          <li>
            <FastfoodRoundedIcon className="icon" />
            <span className="span">Combos</span>
          </li>
          <li>
            <LocalPizzaRoundedIcon className="icon" />
            <span className="span">Foods</span>
          </li>
          <li>
            <LiquorRoundedIcon className="icon" />
            <span className="span">Drinks</span>
          </li>
          <li>
            <PointOfSaleRoundedIcon className="icon" />
            <span className="span">Sales</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsRoundedIcon className="icon" />
            <span className="span">Stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <VpnKeyRoundedIcon className="icon" />
            <span className="span">Logs</span>
          </li>
          <li>
            <SettingsSuggestRoundedIcon className="icon" />
            <span className="span">Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ThreePRoundedIcon className="icon" />
            <span className="span">Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icon" />
            <span className="span">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBarDash;
