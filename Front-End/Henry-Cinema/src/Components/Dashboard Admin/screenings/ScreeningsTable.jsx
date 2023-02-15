import React from "react";
import "./screeningstable.scss";
import { useState, useEffect } from "react";
import { getScreenings } from "../../../redux/actions";
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

export const ScreeningsTable = () => {
  const dispatch = useDispatch();
  const allScreenings = useSelector((state) => state.screenings);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getScreenings());
  }, [dispatch, count]);

  // const deleteAlert = (id, name) => {
  //   swal({
  //     title: "Are you sure?",
  //     text: `this will remove ${name} from the database.`,
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((r) => {
  //     if (r) {
  //       dispatch(deleteFoods(id));
  //       setTimeout(() => {
  //         setCount(count + 1);
  //         console.log("HOLAA");
  //       }, 1500);
  //       swal({
  //         text: "The screening has been successfully removed.",
  //         icon: "success",
  //       });
  //     } else {
  //       swal("Remove cancelled");
  //     }
  //   });
  // };

  return (
    <TableContainer component={Paper} className="screeningsTable">
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
          {allScreenings.map((f) => (
            <TableRow key={f.id}>
              <TableCell className="tableCellScreenings">{f.name}</TableCell>
              <TableCell className="tableCellScreenings">${f.price}</TableCell>
              <TableCell className="tableCellScreenings">
                <div className="cellWrapper">
                  <img alt={f.name} className="screeningImage" src={f.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellScreenings">
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

export default ScreeningsTable;
