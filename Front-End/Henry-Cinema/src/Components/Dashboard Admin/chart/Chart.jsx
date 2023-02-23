import React from "react";
import { useSelector } from "react-redux";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const allSales = useSelector((state) => state.sales);

const salesInMonth = (salesArray, month) => {
  const filteredSales = salesArray.filter((sale) => {
    const saleDate = new Date(sale.createdAt);
    return saleDate.getMonth() === month;
  });
  const totalAmount = filteredSales.reduce((acc, sale) => {
    return acc + sale.amount;
  }, 0);

  return totalAmount;
};

const salesForJanuary = salesInMonth(allSales, 0);
const salesForFebruary = salesInMonth(allSales, 1);
const salesForMarch = salesInMonth(allSales, 2);
const salesForApril = salesInMonth(allSales, 3);
const salesForMay = salesInMonth(allSales, 4);
const salesForJune = salesInMonth(allSales, 5);

const data = [
  { name: "January", Total: salesForJanuary },
  { name: "February", Total: salesForFebruary },
  { name: "March", Total: salesForMarch },
  { name: "April", Total: salesForApril },
  { name: "May", Total: salesForMay },
  { name: "June", Total: salesForJune },
];

export const Chart = () => {
  return (
    <div className="chart">
      <div className="title">{"LAST 6 MONTHS (REVENUE)"}</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffd900" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffd900" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="black" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#ffa200"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
