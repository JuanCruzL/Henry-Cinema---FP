import React from "react";
import "./reviewstable.scss";
import { useState, useEffect } from "react";
import { getReviews, deleteReview } from "../../../redux/actions";
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

export const ReviewsTable = () => {
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getReviews());
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
        dispatch(deleteReview(id));
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
    <TableContainer component={Paper} className="reviewsTable">
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
          {allReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="tableCellReviews">{r.name}</TableCell>
              <TableCell className="tableCellReviews">${r.price}</TableCell>
              <TableCell className="tableCellReviews">
                <div className="cellWrapper">
                  <img alt={r.name} className="foodImage" src={r.image} />
                </div>
              </TableCell>
              <TableCell className="tableCellReviews">
                <button onClick={() => deleteAlert(r.id, r.name)}>
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

export default ReviewsTable;
