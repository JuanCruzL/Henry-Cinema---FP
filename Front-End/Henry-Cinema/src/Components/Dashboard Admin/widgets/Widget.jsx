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

  const incrementPercentage = (currentCount, previousCount) => {
    if (previousCount > 0) {
      return ((currentCount - previousCount) * 100) / previousCount;
    } else {
      return 100;
    }
  };

  const getLastItemCount = (items, property, date) => {
    const item = items[items.length - 1];
    const lastItemDate = new Date(item[property]);
    const yesterday = new Date(date);
    yesterday.setDate(lastItemDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;

    for (let i = 0; i < items.length; i++) {
      const itemDate = new Date(items[i][property]);
      if (itemDate.getTime() === lastItemDate.getTime()) {
        contToday++;
      } else if (itemDate.getTime() === yesterday.getTime()) {
        contYesterday++;
      }
    }

    return {
      today: contToday,
      yesterday: contYesterday,
    };
  };

  const lastUsersIncrement = () => {
    const lastUser = allUsers[allUsers.length - 1];
    const { today, yesterday } = getLastItemCount(
      allUsers,
      "createdAt",
      lastUser.createdAt
    );
    return incrementPercentage(today, yesterday);
  };

  const lastReviewIncrement = () => {
    const lastReview = allReviews[allReviews.length - 1];
    const { today, yesterday } = getLastItemCount(
      allReviews,
      "date",
      lastReview.date
    );
    return incrementPercentage(today, yesterday);
  };

  const lastScreeningIncrement = () => {
    const lastScreening = allScreenings[allScreenings.length - 1];
    const { today, yesterday } = getLastItemCount(
      allScreenings,
      "createdAt",
      lastScreening.createdAt
    );
    return incrementPercentage(today, yesterday);
  };

  const lastSalesIncrement = () => {
    const lastSale = allSales[allSales.length - 1];
    const { today, yesterday } = getLastItemCount(
      allSales,
      "date",
      lastSale.date
    );
    return incrementPercentage(today, yesterday);
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
