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
    const lastSaleDate = new Date(lastSale.date);
    const yesterday = new Date(lastSaleDate);
    yesterday.setDate(lastSaleDate.getDate() - 1);

    const contToday = allSales.reduce((total, sale) => {
      const saleDate = new Date(sale.date);
      if (saleDate.getTime() === lastSaleDate.getTime()) {
        return total + sale.amount;
      } else {
        return total;
      }
    }, 0);

    const contYesterday = allSales.reduce((total, sale) => {
      const saleDate = new Date(sale.date);
      if (saleDate.getTime() === yesterday.getTime()) {
        return total + sale.amount;
      } else {
        return total;
      }
    }, 0);

    let result = 0;
    if (contYesterday > 0) {
      result = ((contToday - contYesterday) * 100) / contYesterday;
    } else {
      result = 100;
    }

    return result;
  };

  const totalSalesOfTheDay = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = lastSale.date;
    let totalAmount = 0;

    for (let i = 0; i < allSales.length; i++) {
      if (allSales[i].date.getTime() === lastSaleDate.getTime()) {
        totalAmount = totalAmount + allSales[i].amount;
      }
    }

    return totalAmount;
  };

  const salesLastWeek = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale.date);
    const lastWeekEnd = new Date(lastSaleDate);
    const lastWeekStart = new Date(lastSaleDate);
    lastWeekStart.setDate(lastSaleDate.getDate() - 6);
    const previousWeekEnd = new Date(lastWeekStart);
    previousWeekEnd.setDate(lastWeekStart.getDate() - 1);
    const previousWeekStart = new Date(previousWeekEnd);
    previousWeekStart.setDate(previousWeekEnd.getDate() - 6);

    const thisWeekSales = allSales
      .filter((sale) => sale.date >= lastWeekStart && sale.date <= lastWeekEnd)
      .reduce((total, sale) => total + sale.amount, 0);

    const lastWeekSales = allSales
      .filter(
        (sale) => sale.date >= previousWeekStart && sale.date <= previousWeekEnd
      )
      .reduce((total, sale) => total + sale.amount, 0);

    const diff = thisWeekSales - lastWeekSales;
    return {
      sales: thisWeekSales,
      diff: diff,
      color: diff >= 0 ? "green" : "red",
    };
  };

  const salesLastMonth = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale.date);
    const lastMonthEnd = new Date(lastSaleDate);
    const lastMonthStart = new Date(
      lastMonthEnd.getFullYear(),
      lastMonthEnd.getMonth() - 1,
      1
    );
    const previousMonthEnd = new Date(lastMonthStart);
    previousMonthEnd.setDate(previousMonthStart.getDate() - 1);
    const previousMonthStart = new Date(
      previousMonthEnd.getFullYear(),
      previousMonthEnd.getMonth() - 1,
      1
    );

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

    const diff = contThisMonth - contLastMonth;
    const color = diff < 0 ? "red" : "green";

    return {
      quantity: contThisMonth,
      diff: diff,
      color: color,
    };
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
