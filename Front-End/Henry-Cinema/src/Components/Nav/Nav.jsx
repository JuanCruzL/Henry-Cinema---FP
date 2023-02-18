import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/menus.png";
import perfil from "../../img/editar.png";
import logoCinema from "../../img/logoHenryNav.png";
import { toggleDarkLight } from "../Utils/Switch";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import "./darkmode.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import swal from "sweetalert";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";

const Nav = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const user = window.localStorage.getItem("loggedUser");
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedUser");
    dispatch(logOut());
    swal({
      title: `Logged Out Succesfully`,
      icon: "success",
      button: true,
    })
    setTimeout(() => {
      window.location.reload(true)
    }, 1000);  
  }

  return (
    <nav className="menu">
      <section className="menu-container">
        {/* <ul className="menu-links"> */}
        {/* Menú desplegable */}
        <li className="menu-des">
          <div className="menu-link-logo">
            <img src={logo} className="logo"></img>
          </div>
          <ul className="menu-nesting">
            <li className="menu-inside">
              <label className="switch">
                <input
                  className="menu-link menu-link--inside"
                  onClick={(e) => toggleDarkLight(e)}
                  type="checkbox"
                />

                <span className="slider"></span>
              </label>
            </li>
            <li className="menu-inside">
              <Link to="/">
                <div className="menu-link menu-link--inside">Home</div>
              </Link>
            </li>
            <li className="menu-inside">
              <Link to="/movies">
                <div className="menu-link menu-link--inside">Movies</div>
              </Link>
            </li>
            <li className="menu-inside">
              <Link to="/foods">
                <div className="menu-link menu-link--inside">Food & Drinks</div>
              </Link>
            </li>
            <li className="menu-inside">
              <Link to="/about">
                <div className="menu-link menu-link--inside">About Us</div>
              </Link>
            </li>
            <li className="menu-inside">
              <Link to="/dashboard">
                <div className="menu-link menu-link--inside">Dashboard</div>
              </Link>
            </li>
            {user ? (
              <li className="menu-inside">
                <div className="logout" onClick={(e) => handleLogOut()}>
                  Log Out
                </div>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </li>
        {/* Menú Nav */}
        <div className="left-menu">
          <li className="menu-item-logo">
            <Link to="/">
              <img src={logoCinema} className="logoh"></img>
            </Link>
          </li>
          <Link to="/movies" className="link-movies">
            <li className="itemsNav">
              <div className="menu-link">Movies</div>
            </li>
          </Link>
          <Link to="/foods" className="link-foods">
            <li className="itemsNav">
              <div className="menu-link">Food & Drinks</div>
            </li>
          </Link>
          <Link to="/about" className="link-about">
            <li className="itemsNav">
              <div className="menu-link">About Us</div>
            </li>
          </Link>
        </div>

        <li className="menu-itemSearchBar">
          <SearchBar setCurrentPage={setCurrentPage} />
        </li>
        <div className="right-menu">
          <div className="shopBag">
            <label className="bag">
              <ShoppingBagIcon className="bagLogo" />
            </label>
          </div>
          <li className="menu-item">
            <div className="menu-link-user">
              <Link to="/login" className="perfil">
                <AccountCircleIcon className="userLogo" />
              </Link>
            </div>
          </li>
        </div>
        {/*  </ul> */}
      </section>
    </nav>
  );
};

export default Nav;
