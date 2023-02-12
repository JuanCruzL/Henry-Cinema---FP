import React from "react";
import "./foodstable.scss";
import { useState, useEffect } from "react";
import { getFoods, deleteFoods } from "../../../redux/actions";
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

export const FoodsTable = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foods);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getFoods());
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
        dispatch(deleteFoods(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log("HOLAA");
        }, 1500);
        swal({
          text: "The food has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="foodsTable">
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
          {allFoods.map((f) => (
            <TableRow key={f.id}>
              <TableCell className="tableCellFoods">{f.name}</TableCell>
              <TableCell className="tableCellFoods">${f.price}</TableCell>
              <TableCell className="tableCellFoods">
                <div className="cellWrapper">
                  <img alt={f.name} className="foodImage" src={f.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellFoods">
                <button onClick={() => deleteAlert(f.id, f.name)}>
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

export default FoodsTable;
