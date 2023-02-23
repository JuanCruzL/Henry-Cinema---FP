import React from "react";
import "./salestable.scss";
import { useState, useEffect } from "react";
import { getSales } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
//mport { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const SalesTable = () => {
  const dispatch = useDispatch();
  const allSales = useSelector((state) => state.sales);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch, count]);

  return (
    <TableContainer component={Paper} className="salesTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allSales.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="tableCellSales">${s.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
