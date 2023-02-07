import React from "react";
import "./widget.scss";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";

export const Widget = ({ type }) => {
  let data = {};

  // temporary

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <BoyOutlinedIcon className="icon" />,
      };
      break;
    case "reviews":
      data = {
        title: "REVIEWS",
        isMoney: false,
        link: "View all reviews",
        icon: <ReviewsIcon className="icon" />,
      };
      break;
    case "screenings":
      data = {
        title: "SCREENINGS",
        isMoney: false,
        link: "View all screenings",
        icon: <GroupWorkRoundedIcon className="icon" />,
      };
      break;
    case "sales":
      data = {
        title: "SALES",
        isMoney: true,
        link: "View all sales",
        icon: <PointOfSaleRoundedIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <TrendingUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
