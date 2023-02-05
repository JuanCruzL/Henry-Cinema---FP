import React from "react";
import logo from "../../img/logo.png";
import git from "../../img/git.png";
import cinema from "../../img/cinema.png";
import food from "../../img/food.png";
import sign from "../../img/in.png";
import up from "../../img/up.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="henry logo" className="brand-logo" />
      </div>
      {/* <div className="footer-info">
        <div className="explore">
          <div className="options">
            <div className="footer-options">
              <div className="option">
                <span className="span-links">
                  Cinemas <img src={cinema} className="git-logo"></img>
                </span>
              </div>
            </div>
            <div className="footer-options">
              <div className="option">
                <span className="span-links">
                  Movies <img src={cinema} className="git-logo"></img>
                </span>
              </div>
            </div>
            <div className="footer-options">
              <div className="option">
                <span className="span-links">
                  Food & Drinks <img src={food} className="git-logo"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="options">
            <div className="footer-options">
              <div className="option">
                <span className="span-links">
                  Sign in <img src={sign} className="git-logo"></img>
                </span>
              </div>
            </div>
            <div className="footer-options">
              <div className="option">
                <span className="span-links">
                  Sign up <img src={up} className="git-logo"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-contact">
        <span className="made-by">Made by</span>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/emagarc">
            <div className="user">
              <span className="user-name">emagarc</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/JuanCruzL">
            <div className="user">
              <span className="user-name">JuanCruzL</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/ZTPspartan">
            <div className="user">
              <span className="user-name">ZTPspartan</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/Mariapaula56">
            <div className="user">
              <span className="user-name">Mariapaula56</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/Deybi1004">
            <div className="user">
              <span className="user-name">Deybi1004</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/Novales87">
            <div className="user">
              <span className="user-name">Novales87</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
        <div className="footer-profile">
          <a className="a-href" href="https://github.com/Streisam">
            <div className="user">
              <span className="user-name">Streisam</span>
              <img src={git} className="git-logo"></img>
            </div>
            <span className="tag">Tag role</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
