import React from "react";
import "./widget.scss";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Widget = ({ type }) => {
  let data = {};
  const allUsers = useSelector((state) => state.users);
  const allReviews = useSelector((state) => state.reviews);
  const allScreenings = useSelector((state) => state.screenings);
  const allSales = useSelector((state) => state.sales);
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: (
          <Link to="/dashboard/users" className="link">
            See all users"
          </Link>
        ),
        icon: (
          <Link to="/dashboard/users" className="link">
            <PersonIcon className="icon" />
          </Link>
        ),
        amount: allUsers.length,
      };
      break;
    case "reviews":
      data = {
        title: "REVIEWS",
        isMoney: false,
        link: (
          <Link to="/dashboard/reviews" className="link">
            View all reviews"
          </Link>
        ),
        icon: (
          <Link to="/dashboard/reviews" className="link">
            <ReviewsIcon className="icon" />
          </Link>
        ),
        amount: allReviews.length,
      };
      break;
    case "screenings":
      data = {
        title: "SCREENINGS",
        isMoney: false,
        link: (
          <Link to="/dashboard/screenings" className="link">
            "View all screenings"
          </Link>
        ),
        icon: (
          <Link to="/dashboard/screenings" className="link">
            <GroupWorkRoundedIcon className="icon" />
          </Link>
        ),
        amount: allScreenings.length,
      };
      break;
    case "sales":
      data = {
        title: "SALES",
        isMoney: true,
        link: (
          <Link to="/dashboard/sales" className="link">
            "View all sales"
          </Link>
        ),
        icon: (
          <Link to="/dashboard/sales" className="link">
            <PointOfSaleRoundedIcon className="icon" />
          </Link>
        ),
        amount: allSales.length,
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
          {data.amount}
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
