import React from "react";
import "./navbardash.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

export const NavBarDash = () => {
  return (
    <div className="navbardash">
      <div className="wrapper">
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div>
            <img
              src="https://assets.soyhenry.com/logoOG.png"
              alt=""
              className="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDash;
