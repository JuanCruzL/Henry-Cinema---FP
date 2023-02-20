import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import { useSelector } from "react-redux";

export const Featured = () => {
  const allSales = useSelector((state) => state.sales);

  const lastSalesIncrement = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = lastSale.date;
    const yesterday = new Date(lastSaleDate);
    yesterday.setDate(lastSaleDate.getDate() - 1);
    let contToday = 0;
    let contYesterday = 0;
    let result = 0;
    for (let i = 0; i < allSales.length; i++) {
      if (allSales[i].date.getTime() === lastSaleDate.getTime()) {
        contToday += allSales[i].amount;
      } else if (allSales[i].date.getTime() === yesterday.getTime()) {
        contYesterday += allSales[i].amount;
      }
    }
    if (contYesterday > 0 && contToday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = contToday / 100;
    }
    return result;
  };

  const totalSalesOfTheDay = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = lastSale.date;
    let totalAmount = 0;

    for (let i = 0; i < allSales.length; i++) {
      if (allSales[i].date === lastSaleDate) {
        totalAmount = totalAmount + allSales[i].amount;
      }
    }
    return totalAmount;
  };

  const salesLastWeek = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale.date);
    const lastWeekEnd = new Date(lastSaleDate);
    const lastWeekStart = new Date(
      lastWeekEnd.setDate(lastSaleDate.getDate() - 7)
    );
    const previousWeekEnd = new Date(lastWeekStart);
    previousWeekEnd.setDate(lastWeekStart.getDate() - 1);
    const previousWeekStart = new Date(previousWeekEnd);
    previousWeekStart.setDate(previousWeekEnd.getDate() - 6);
    let contThisWeek = 0;
    let contLastWeek = 0;
    for (let i = 0; i < allSales.length; i++) {
      if (
        allSales[i].date <= lastWeekEnd &&
        allSales[i].date >= lastWeekStart
      ) {
        contThisWeek = contThisWeek + allSales[i].amount;
      } else if (
        allSales[i].date <= previousWeekEnd &&
        allSales[i].date >= previousWeekStart
      ) {
        contLastWeek = contLastWeek + allSales[i].amount;
      }
    }
    return contThisWeek;
  };

  const salesLastMonth = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale.date);
    const lastMonthEnd = new Date(lastSaleDate);
    const lastMonthStart = new Date(
      lastMonthEnd.setDate(lastSaleDate.getDate() - 30)
    );
    const previousMonthEnd = new Date(lastMonthStart);
    previousMonthEnd.setDate(lastMonthStart.getDate() - 1);
    const previousMonthStart = new Date(previousMonthEnd);
    previousMonthStart.setDate(previousMonthEnd.getDate() - 29);
    let contThisMonth = 0;
    let contLastMonth = 0;
    for (let i = 0; i < allSales.length; i++) {
      if (
        allSales[i].date <= lastMonthEnd &&
        allSales[i].date >= lastMonthStart
      ) {
        contThisMonth = contThisMonth + allSales[i].amount;
      } else if (
        allSales[i].date <= previousMonthEnd &&
        allSales[i].date >= previousMonthStart
      ) {
        contLastMonth = contLastMonth + allSales[i].amount;
      }
    }
    return contThisMonth;
  };

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">TOTAL REVENUE</h1>
        <MoreVertIcon className="icon" fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={lastSalesIncrement()}
            text={`${lastSalesIncrement()}%`}
            strokeWidth={6}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "18px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: "#ffd900",
              // textColor: "#000000",
              // trailColor: "#3532329a",
              backgroundColor: "#000000",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">${totalSalesOfTheDay()}</p>
        <p className="desc">
          Previus transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <TrendingUpOutlinedIcon fontSize="small" />
              <div className="resultAmount"> $12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <TrendingDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">${salesLastWeek()}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <TrendingDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">${salesLastMonth()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
