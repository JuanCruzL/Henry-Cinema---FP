import React from "react";
import "./widget.scss";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { avatarClasses } from "@mui/material";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

export const Widget = ({ type }) => {
  let data = {};
  const allUsers = useSelector((state) => state.users);
  const allReviews = useSelector((state) => state.reviews);
  const allScreenings = useSelector((state) => state.screenings);
  const allSales = useSelector((state) => state.sales);

  const lastUsersIncrement = () => {
    const lastUser = allUsers[allUsers.length - 1];
    const lastUserDate = lastUser.createdAt;
    const yesterday = new Date(lastUserDate);
    yesterday.setDate(lastUserDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;
    let result = 0;
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].createdAt === lastUserDate) {
        contToday++;
      } else if (allUsers[i].createdAt === yesterday) {
        contYesterday++;
      }
    }
    if (contYesterday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = 100;
    }
    return result;
  };

  const lastReviewIncrement = () => {
    const lastReview = allReviews[allReviews.length - 1];
    const lastReviewDate = lastReview.date;
    const yesterday = new Date(lastReviewDate);
    yesterday.setDate(lastReviewDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;
    let result = 0;
    for (let i = 0; i < allReviews.length; i++) {
      if (allReviews[i].date === lastReviewDate) {
        contToday++;
      } else if (allReviews[i].date === yesterday) {
        contYesterday++;
      }
    }
    if (contYesterday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = 100;
    }
    return result;
  };

  const lastScreeningIncrement = () => {
    const lastScreening = allScreenings[allScreenings.length - 1];
    const lastScreeningDate = lastScreening.date;
    const yesterday = new Date(lastScreeningDate);
    yesterday.setDate(lastScreeningDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;
    let result = 0;
    for (let i = 0; i < allScreenings.length; i++) {
      if (allScreenings[i].date === lastScreeningDate) {
        contToday++;
      } else if (allScreenings[i].date === yesterday) {
        contYesterday++;
      }
    }
    if (contYesterday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = 100;
    }
    return result;
  };

  const lastSalesIncrement = () => {
    const lastSales = allSales[allSales.length - 1];
    const lastSalesDate = lastSales.date;
    const yesterday = new Date(lastSalesDate);
    yesterday.setDate(lastSalesDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;
    let result = 0;
    for (let i = 0; i < allSales.length; i++) {
      if (allSales[i].date === lastSalesDate) {
        contToday++;
      } else if (allSales[i].date === yesterday) {
        contYesterday++;
      }
    }
    if (contYesterday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = 100;
    }
    return result;
  };

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
        percentage: lastUsersIncrement(),
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
        percentage: lastReviewIncrement(),
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
        percentage: lastScreeningIncrement(),
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
        percentage: lastSalesIncrement(),
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
        <div
          className={`percentage ${
            data.percentage > 0 ? "positive" : "negative"
          } `}
        >
          {data.percentage > 0 ? (
            <TrendingUpOutlinedIcon style={{ color: "green" }} />
          ) : (
            <TrendingDownOutlinedIcon style={{ color: "red" }} />
          )}
          {data.percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
