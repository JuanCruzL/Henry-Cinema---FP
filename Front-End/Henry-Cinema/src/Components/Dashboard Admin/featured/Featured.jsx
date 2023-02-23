import React, { useEffect, useState} from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import "./featured.scss";

export const Featured = ({load}) => {
  if(load === false) {
    return <Loader/>
  } else {

  
  const users = useSelector(state => state.users)
  const allSales = useSelector((state) => state.sales);
  console.log(allSales)
  const lastSalesIncrement = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale?.createdAt);
    const yesterday = new Date(lastSaleDate);
    yesterday.setDate(lastSaleDate.getDate() - 1);

    const contToday = allSales.reduce((total, sale) => {
      const saleDate = new Date(sale?.createdAt);
      if (saleDate.getTime() === lastSaleDate.getTime()) {
        return total + sale?.amount;
      } else {
        return total;
      }
    }, 0);

    const contYesterday = allSales.reduce((total, sale) => {
      const saleDate = new Date(sale?.createdAt);
      if (saleDate.getTime() === yesterday.getTime()) {
        return total + sale?.amount;
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
    const lastSaleDate = lastSale?.createdAt;
    let totalAmount = 0;

    for (let i = 0; i < allSales.length; i++) {
      if (allSales[i]?.createdAt === lastSaleDate) {
        totalAmount = totalAmount + allSales[i]?.amount;
      }
    }

    return totalAmount;
  };

  const salesLastWeek = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale?.createdAt);
    const lastWeekEnd = new Date(lastSaleDate);
    const lastWeekStart = new Date(lastSaleDate);
    lastWeekStart.setDate(lastSaleDate.getDate() - 6);
    const previousWeekEnd = new Date(lastWeekStart);
    previousWeekEnd.setDate(lastWeekStart.getDate() - 1);
    const previousWeekStart = new Date(previousWeekEnd);
    previousWeekStart.setDate(previousWeekEnd.getDate() - 6);

    const thisWeekSales = allSales
      .filter(
        (sale) =>
          sale?.createdAt >= lastWeekStart && sale?.createdAt <= lastWeekEnd
      )
      .reduce((total, sale) => total + sale?.amount, 0);

    const lastWeekSales = allSales
      .filter(
        (sale) =>
          sale?.createdAt >= previousWeekStart &&
          sale?.createdAt <= previousWeekEnd
      )
      .reduce((total, sale) => total + sale?.amount, 0);

    const diff = thisWeekSales - lastWeekSales;
    return diff
  };

  const salesLastMonth = () => {
    const lastSale = allSales[allSales.length - 1];
    const lastSaleDate = new Date(lastSale?.createdAt);
    const lastMonthEnd = new Date(lastSaleDate);
    const lastMonthStart = new Date(
      lastMonthEnd.getFullYear(),
      lastMonthEnd.getMonth() - 1,
      1
    );
    const previousMonthEnd = new Date(lastMonthStart);
    const previousMonthStart = new Date(
      previousMonthEnd.getFullYear(),
      previousMonthEnd.getMonth() - 1,
      1
      );
      previousMonthEnd.setDate(previousMonthStart.getDate() - 1);

    let contThisMonth = 0;
    let contLastMonth = 0;

    for (let i = 0; i < allSales.length; i++) {
      if (
        allSales[i]?.createdAt <= lastMonthEnd &&
        allSales[i]?.createdAt >= lastMonthStart
      ) {
        contThisMonth = contThisMonth + allSales[i]?.amount;
      } else if (
        allSales[i]?.createdAt <= previousMonthEnd &&
        allSales[i]?.createdAt >= previousMonthStart
      ) {
        contLastMonth = contLastMonth + allSales[i].amount;
      }
    }

    const diff = contThisMonth - contLastMonth;
    const color = diff < 0 ? "red" : "green";

    // return {
    //   quantity: contThisMonth,
    //   diff: diff,
    //   color: color,
    // };
    return contLastMonth
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
              <div className="resultAmount">$12.4k</div>
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
}


export default Featured;

