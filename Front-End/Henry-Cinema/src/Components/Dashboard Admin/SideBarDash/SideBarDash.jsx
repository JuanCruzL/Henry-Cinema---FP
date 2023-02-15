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
import { Link } from "react-router-dom";

export const SideBarDash = () => {
<<<<<<< HEAD
  return (
    <div className="sidebar">
=======


  return (
    <div className="sidebar">

>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
      <div className="DesplegableSide">
        <div className="top">
          <Link to="/" className="link">
            <img className="logo" alt="" src={Logo} />
          </Link>
        </div>
<<<<<<< HEAD
        <hr />
=======
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/dashboard" className="link">
              <li>
                <DashboardIcon className="icon" />
                <span className="span">Dashboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <ul>
              <Link to="/dashboard/users" className="link">
                <li>
                  <PersonIcon className="icon" />
                  <span className="span">Users</span>
                </li>
              </Link>
              <Link to="/dashboard/reviews" className="link">
                <li>
                  <ReviewsIcon className="icon" />
                  <span className="span">Reviews</span>
                </li>
              </Link>
<<<<<<< HEAD
              <li>
                <MovieFilterRoundedIcon className="icon" />
                <span className="span">Movies</span>
                <ul className="dropdown">
                  <li className>
=======
              <li className="MoviesDrop">
                  <MovieFilterRoundedIcon className="icon" />
                  <span className="span">Movies</span>
                <ul className="dropdown">
                  <li>
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
                    <Link to="/dashboard/movies" className="link">
                      <span>See all Movies</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/movies/new" className="link">
                      <span>Add a new Movie</span>
                    </Link>
                  </li>
                </ul>
              </li>
<<<<<<< HEAD
              <li>
=======
              <li className="ScreenDrop">
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
                <GroupWorkRoundedIcon className="icon" />
                <span className="span">Screenings</span>
                <ul className="dropdown">
                  <li>
                    <Link to="/dashboard/screenings" className="link">
                      <span>View all Screenings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/screenings/new" className="link">
                      <span>Add a new Screening</span>
                    </Link>
                  </li>
                </ul>
              </li>
<<<<<<< HEAD
              <li>
=======
              <li className="CombosDrop">
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
                <FastfoodRoundedIcon className="icon" />
                <span className="span">Combos</span>
                <ul className="dropdown">
                  <li>
                    <Link to="/dashboard/combos" className="link">
                      <span>View all Combos</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/combos/new" className="link">
                      <span>Add a new Combo</span>
                    </Link>
                  </li>
                </ul>
              </li>
<<<<<<< HEAD
              <li>
=======
              <li className="FoodsDrop">
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
                <LocalPizzaRoundedIcon className="icon" />
                <span className="span">Foods</span>
                <ul className="dropdown">
                  <li>
                    <Link to="/dashboard/foods" className="link">
                      <span>View all Foods</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/foods/new" className="link">
                      <span>Add a new Food</span>
                    </Link>
                  </li>
                </ul>
              </li>
<<<<<<< HEAD
              <li>
=======
              <li className="DrinksDrop">
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
                <LiquorRoundedIcon className="icon" />
                <span className="span">Drinks</span>
                <ul className="dropdown">
                  <li>
                    <Link to="/dashboard/drinks" className="link">
                      <span>View all Drinks</span>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/dashboard/drinks/new" className="link">
                      <span>Add a new Drink</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <Link to="/dashboard/sales" className="link">
                <li>
                  <PointOfSaleRoundedIcon className="icon" />
                  <span className="span">Sales</span>
                </li>
              </Link>
            </ul>
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
<<<<<<< HEAD
        <div className="bottom">
          <div className="colorOptions"></div>
          <div
            className="colorOptions"
            onClick={(e) => toggleDarkLight(e)}
          ></div>
        </div>
=======
>>>>>>> 471bfac0cd4d2b913fd2db1e4ed2ebc31edc8163
      </div>
    </div>
  );
};

export default SideBarDash;
