import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/menu.png";
import perfil from "../../img/usuario.png";
import logoh from "../../img/logo.png";
import { toggleDarkLight } from "../Utils/Switch";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ setCurrentPage }) => {
  return (
    <nav className="menu">
      <section className="menu-container">
        <ul className="menu-links">
          <li className="menu-des">
            <a href="#" className="menu-link">
              <img src={logo} className="logo"></img>
            </a>
            <ul className="menu-nesting">
              <li className="menu-inside">
                <a href="#" className="menu-link menu-link--inside">
                  Cinemas
                </a>
              </li>
              <li className="menu-inside">
                <Link to='/movies'>
                  <a href="#" className="menu-link menu-link--inside">
                    Movies
                  </a>
                </Link>
              </li>
              <li className="menu-inside">
                <a href="#" className="menu-link menu-link--inside">
                  Food & Drinks
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to='/'>
            <img src={logoh} className="logoh"></img>
            </Link>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              Cinemas
            </a>
          </li>
          <li className="menu-item">
          <Link to='/movies'>

            <a href="#" className="menu-link">
              Movies
            </a>
          </Link>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              Food & Drinks
            </a>
          </li>
          <li className="menu-itemSearchBar">
            <SearchBar setCurrentPage={setCurrentPage} />
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link" onClick={e => toggleDarkLight(e)}>
              <button type="button" className="Switch" title="Toggle dark/light mode">🌑</button>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link-user">
              <img src={perfil} className="perfil"></img>
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;