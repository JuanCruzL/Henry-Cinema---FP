import React, {useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/menus.png";
import perfil from "../../img/editar.png";
import logoCinema from "../../img/logoHenryNav.png";
import { toggleDarkLight } from "../Utils/Switch";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import "./darkmode.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions";
import swal from "sweetalert";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import jwt_decode from "jwt-decode";
import ShoppingBag from "./ShoppingBag";

const Nav = ({ setCurrentPage }) => {
  const size = useSelector((state) => state.shoppingBag.length);

  const imageDefault =
    "https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg";
  const dispatch = useDispatch();
  const user = window.localStorage.getItem("loggedUser");

  let decrypted = "";
  if (user === null) {
    decrypted = "null";
  } else {
    decrypted = jwt_decode(user);
  }
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedUser");
    dispatch(logOut());
    swal({
      title: `Logged Out Succesfully`,
      icon: "success",
      button: true,
    });
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  const mostrarShop = () => {
    let visible = document.getElementById("menu-BagInside");

    if (visible.className == "menu-BagInside") {
      visible.className = "menu-BagInside-invi";
    } else {
      visible.className = "menu-BagInside";
    }
  };

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
            {decrypted.isAdministrator ? (
              <li className="menu-inside">
                <Link to="/dashboard">
                  <div className="menu-link menu-link--inside">Dashboard</div>
                </Link>
              </li>
            ) : (
              <></>
            )}
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
            <div className="menu-link-logo">
              <label className="bag" onClick={mostrarShop}>
                <ShoppingBagIcon className="bagLogo" />
                {size>0 &&(
                  <div className="shake"></div>
                )}
              </label>
            </div>
            <ul className="menu-Bag">
              <li className="menu-BagInside-invi" id="menu-BagInside">
                <ShoppingBag/>
              </li>
            </ul>
          </div>

          <li className="menu-item">
            {decrypted !== "null" ? (
              <div className="menu-link-user">
                <Link to="/user" className="perfil">
                  <img
                    src={decrypted.image ? decrypted.image : imageDefault}
                    className="userLogo-registed"
                  />
                </Link>
              </div>
            ) : (
              <>
                <div className="menu-link-user">
                  <Link to="/login" className="perfil">
                    <AccountCircleIcon className="userLogo" />
                  </Link>
                </div>
              </>
            )}
          </li>
        </div>
        {/*  </ul> */}
      </section>
    </nav>
  );
};

export default Nav;
