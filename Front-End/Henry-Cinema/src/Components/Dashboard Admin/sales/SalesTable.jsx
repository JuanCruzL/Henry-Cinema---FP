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
            <TableCell className="title">NAME</TableCell>
            <TableCell className="title">PRICE</TableCell>
            <TableCell className="title">IMAGE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allSales.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="tableCellSales">{s.name}</TableCell>
              <TableCell className="tableCellSales">${s.price}</TableCell>
              <TableCell className="tableCellSales">
                <div className="cellWrapper">
                  <img alt={f.name} className="saleImage" src={s.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellSales">
                <button onClick={() => deleteAlert(s.id, s.name)}>
                  <div>
                    <DeleteForeverRoundedIcon className="bin" />
                  </div>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
