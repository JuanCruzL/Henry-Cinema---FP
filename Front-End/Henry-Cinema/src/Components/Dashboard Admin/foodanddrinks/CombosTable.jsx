import React from "react";
import "./combostable.scss";
import { useState, useEffect } from "react";
import { getCombos, deleteCombo } from "../../../redux/actions";
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

export const CombosTable = () => {
  const dispatch = useDispatch();
  const allCombos = useSelector((state) => state.combos);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getCombos());
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
        dispatch(deleteCombo(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log("HOLAA");
        }, 1500);
        swal({
          text: "The combo has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="combosTable">
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
          {allCombos.map((c) => (
            <TableRow key={c.id}>
              <TableCell className="tableCellCombos">{c.name}</TableCell>
              <TableCell className="tableCellCombos">${c.price}</TableCell>
              <TableCell className="tableCellCombos">
                <div className="cellWrapper">
                  <img alt={c.name} className="comboImage" src={c.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellCombos">
                <button onClick={() => deleteAlert(c.id, c.name)}>
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

export default CombosTable;
