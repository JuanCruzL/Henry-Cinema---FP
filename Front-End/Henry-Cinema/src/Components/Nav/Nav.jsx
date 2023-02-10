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
                <Link to='/about'>
                  <div className="menu-link menu-link--inside">
                    About Us
                  </div>
                </Link>

              </li>
              <li className="menu-inside">
                <Link to='/movies'>
                  <div className="menu-link menu-link--inside">
                    Movies
                  </div>
                </Link>
              </li>
              <li className="menu-inside">
                <Link to='/foods'>
                  <div className="menu-link menu-link--inside">
                    Food & Drinks
                  </div>
                </Link>
              </li>
            </ul>
          </li>
          {/* Menú Nav */}
          <Link to='/'>
            <li className="menu-item-logo">
              <img src={logoCinema} className="logoh"></img>
            </li>
          </Link>

          <Link to='/about' className="link-about">
            <li className="menu-item-about">
              <div className="menu-link-about">
                About Us
              </div>
            </li>
          </Link>

          <Link to='/movies' className="link-movies">
            <li className="menu-item-movies">
              <div className="menu-link-movies">
                Movies
              </div>
            </li>
          </Link>
          <Link to='/foods' className="link-food">
            <li className="menu-item-food">

              <div className="menu-link-food">
                Food & Drinks
              </div>
            </li>
          </Link>
          <li className="menu-itemSearchBar">
            <SearchBar setCurrentPage={setCurrentPage} />
          </li>
          <li className="menu-item-mode">
            <div className="menu-link-mode" onClick={(e) => Cmodo(e)}>
              {
                modo === "dia"? (
                  <Brightness7SharpIcon className="iconD" fontSize="large" />)
              :modo === "noche" && (
                <Brightness5SharpIcon className="iconN" fontSize="large" />
              )
              }
            </div>
          </li>
          <li className="menu-item-perfil">
            <div className="menu-link-user">
              <img src={perfil} className="perfil"></img>
            </div>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
