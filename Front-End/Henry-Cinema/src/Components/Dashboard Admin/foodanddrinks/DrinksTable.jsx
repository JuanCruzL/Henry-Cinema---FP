import React from "react";
import "./foodstable.scss";
import { useState, useEffect } from "react";
import { getDrinks, deleteDrink } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const DrinksTable = () => {
  const dispatch = useDispatch();
  const allDrinks = useSelector((state) => state.drinks);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch, count]);

  const deleteAlert = (id, name) => {
    swal({
      title: "Are you sure?",
      text: `this will remove ${name} from the database.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((r) => {
      if (r) {
        dispatch(deleteDrink(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log("HOLAA");
        }, 1500);
        swal({
          text: "The drink has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="drinksTable">
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
          {allDrinks.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="tableCellDrinks">{d.name}</TableCell>
              <TableCell className="tableCellDrinks">${d.price}</TableCell>
              <TableCell className="tableCellDrinks">
                <div className="cellWrapper">
                  <img alt={d.name} className="drinkImage" src={d.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellDrinks">
                <button onClick={() => deleteAlert(d.id, d.name)}>
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

export default DrinksTable;
