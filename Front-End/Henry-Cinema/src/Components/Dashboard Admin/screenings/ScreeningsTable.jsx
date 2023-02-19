import React from "react";
import "./screeningstable.scss";
import { useState, useEffect } from "react";
import { getScreenings, deleteScreening } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import swal from "sweetalert";

export const ScreeningsTable = () => {
  const dispatch = useDispatch();
  const allScreenings = useSelector((state) => state.screenings);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getScreenings());
  }, [dispatch, count]);

  const deleteAlert = (id, title) => {
    swal({
      title: "Are you sure?",
      text: `this will remove the screening of ${title} from the database.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((r) => {
      if (r) {
        dispatch(deleteScreening(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log(title);
        }, 1500);
        swal({
          text: "The screening has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="screeningsTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">TITLE</TableCell>
            <TableCell className="title">AUDITORIUM</TableCell>
            <TableCell className="title">DATE</TableCell>
            <TableCell className="title">START TIME</TableCell>
            <TableCell className="title">DEFINITION</TableCell>
            <TableCell className="title">LANGUAGE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allScreenings.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="tableCellScreenings">{s.title}</TableCell>
              <TableCell className="tableCellScreenings">
                ${s.roomLetter}
              </TableCell>
              <TableCell className="tableCellScreenings">{s.date}</TableCell>
              <TableCell className="tableCellScreenings">
                {s.startTime}
              </TableCell>
              <TableCell className="tableCellScreenings">
                {s.definition}
              </TableCell>
              <TableCell className="tableCellScreenings">
                {s.language}
              </TableCell>
              <TableCell className="tableCellScreenings">
                <button onClick={() => deleteAlert(s.id, s.title)}>
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
