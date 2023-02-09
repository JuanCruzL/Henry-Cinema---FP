import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/menus.png";
import perfil from "../../img/editar.png";
import logoCinema from "../../img/logoHenryNav.png";
import { toggleDarkLight } from "../Utils/Switch";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ setCurrentPage }) => {
  return (
    <nav className="menu">
      <section className="menu-container">
        <ul className="menu-links">
          {/* Menú desplegable */}
          <li className="menu-des">
            <div  className="menu-link-logo">
              <img src={logo}className="logo"></img>
            </div>
            <ul className="menu-nesting">
              <li className="menu-inside">
                <Link to ='/about'>
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
          <li className="menu-item-logo">
            <Link to='/'>
            <img src={logoCinema} className="logoh"></img>
            </Link>
          </li>

          <li className="menu-item-about">
            <Link to='/about' className="link-about">
            <div  className="menu-link-about">
              About Us
            </div>
            </Link>
          </li>

          <li className="menu-item-movies">
          <Link to='/movies' className="link-movies">

            <div className="menu-link-movies">
              Movies
            </div>
          </Link>
          </li>
          <li className="menu-item-food">
            
            <Link to ='/foods' className="link-foods">
              <div className="menu-link-food">
              Food & Drinks
            </div></Link>
          </li>
          <li className="menu-itemSearchBar">
            <SearchBar setCurrentPage={setCurrentPage} />
          </li>
          <li className="menu-item-mode">
            <div className="menu-link-mode" onClick={e => toggleDarkLight(e)}>
              <button type="button" className="Switch" title="Toggle dark/light mode">🌑</button>
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
