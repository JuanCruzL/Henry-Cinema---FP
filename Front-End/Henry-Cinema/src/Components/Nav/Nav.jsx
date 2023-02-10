import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iconNav } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/menus.png";
import perfil from "../../img/editar.png";
import logoCinema from "../../img/logoHenryNav.png";
import { toggleDarkLight } from "../Utils/Switch";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./darkmode.css";

import Brightness7SharpIcon from '@mui/icons-material/Brightness7Sharp';
import Brightness5SharpIcon from '@mui/icons-material/Brightness5Sharp';

const Nav = ({ setCurrentPage }) => {

  const dispatch=useDispatch();
  var modo = useSelector((state) => state.modo)


  function Cmodo(e) {
    dispatch(iconNav());
    toggleDarkLight(e);
  }
  return (
    <nav className="menu">
      <section className="menu-container">
        <ul className="menu-links">
          {/* Menú desplegable */}
          <li className="menu-des">
            <div className="menu-link-logo">
              <img src={logo} className="logo"></img>
            </div>
            <ul className="menu-nesting">
              <li className="menu-inside">
<<<<<<< HEAD
                <div
=======

                {/* <div
>>>>>>> 2b46619ccabc218bc214009f2a7fd0d3fa2667de
                  className="menu-link menu-link--inside"
                  onClick={(e) => toggleDarkLight(e)}
                >
                  🌑
<<<<<<< HEAD
                </div>
              </li>
              <li className="menu-inside">
                <Link to="/about">
                  <div className="menu-link menu-link--inside">About Us</div>
                </Link>
=======
                </div> */}
                <label className="switch">
                  <input
                    className="menu-link menu-link--inside"
                    onClick={(e) => toggleDarkLight(e)}
                    type="checkbox"
                  />
                  <span className="slider"></span>
                </label>

>>>>>>> 2b46619ccabc218bc214009f2a7fd0d3fa2667de
              </li>

              <li className="menu-inside">
                <Link to="/movies">
                  <div className="menu-link menu-link--inside">Movies</div>
                </Link>
              </li>
              <li className="menu-inside">
<<<<<<< HEAD
                <Link to="/foods">
                  <div className="menu-link menu-link--inside">
                    Food & Drinks
                  </div>
=======
                <Link to='/foods'>
                  <div className="menu-link menu-link--inside">
                    Food & Drinks
                  </div>
                </Link>
              </li>
              <li className="menu-inside">
                <Link to="/about">
                  <div className="menu-link menu-link--inside">About Us</div>
>>>>>>> 2b46619ccabc218bc214009f2a7fd0d3fa2667de
                </Link>
              </li>
            </ul>
          </li>
          {/* Menú Nav */}
<<<<<<< HEAD
          <li className="menu-item-logo">
            <Link to="/">
              <img src={logoCinema} className="logoh"></img>
            </Link>
          </li>

          <li className="items">
            <Link to="/about" className="link-about">
              <div className="menu-link">About Us</div>
            </Link>
          </li>

          <li className="items">
            <Link to="/movies" className="link-movies">
              <div className="menu-link">Movies</div>
            </Link>
          </li>
          <li className="items">
            <Link to="/foods" className="link-foods">
              <div className="menu-link">Food & Drinks</div>
=======
          <Link to='/'>
            <li className="menu-item-logo">
              <img src={logoCinema} className="logoh"></img>
            </li>
          </Link>

          <li className="items">
            <Link to="/movies" className="link-movies">
              <div className="menu-link">Movies</div>
            </Link>
          </li>
          <li className="items">
            <Link to="/foods" className="link-foods">
              <div className="menu-link">Food & Drinks</div>
            </Link>
          </li>
          <li className="items">
            <Link to="/about" className="link-about">
              <div className="menu-link">About Us</div>
>>>>>>> 2b46619ccabc218bc214009f2a7fd0d3fa2667de
            </Link>
          </li>

          <li className="menu-itemSearchBar">
            <SearchBar setCurrentPage={setCurrentPage} />
          </li>

<<<<<<< HEAD
          <li className="menu-item">
=======
          <label className="switch">
            <input onClick={(e) => toggleDarkLight(e)} type="checkbox" />
            <span className="slider"></span>
          </label>

          <li className="menu-item">

>>>>>>> 2b46619ccabc218bc214009f2a7fd0d3fa2667de
            <div className="menu-link-user">
              <Link to="/login">
                <img src={perfil} className="perfil"></img>
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
