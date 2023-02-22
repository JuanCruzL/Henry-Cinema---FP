import React from "react";
import "./navbardash.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { toggleDarkLight } from "../../Utils/Switch";
import { useDispatch } from "react-redux";
import { DashCombos, DashDrinks, DashFoods, DashMovie, DashScreen, DashUsers } from "../../../redux/actions";

export const NavBarDash = ({ location = "desapareceMijo" }) => {
  const dispatch = useDispatch();

  var validate = true;
  if (location == "desapareceMijo") {
    validate = false;
  }

  function BuscadorMultifuncional(e) {
    if (location = "User") {
      dispatch(DashUsers(e.target.value))
    }
    if (location = "Movies") {
      dispatch(DashMovie(e.target.value))
    }
    if(location= "Screenings"){
      dispatch(DashScreen(e.target.value))
    }
    if (location = "Combos") {
      dispatch(DashCombos(e.target.value))
    }
    if (location = "Foods") {
      dispatch(DashFoods(e.target.value))
    }
    if (location = "Drinks") {
      dispatch(DashDrinks(e.target.value))
    }
  }

  return (
    <div className="navbardash">
      <div className="Desplegable" >

        <div className="wrapper">
          {validate == true && (
            <div className="searchbar" >
              <input type="text" placeholder="Search..." onChange={(e) => BuscadorMultifuncional(e)} />
              <SearchRoundedIcon className="icon" />
            </div>
          )
          }
          <div className="items">
            <div className="item">
              <LanguageRoundedIcon className="icon" />
              English
            </div>
            <div className="item" onClick={(e) => toggleDarkLight(e)}>
              <DarkModeOutlinedIcon className="icon" />
            </div>
            {/* <div className="item">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDash;
