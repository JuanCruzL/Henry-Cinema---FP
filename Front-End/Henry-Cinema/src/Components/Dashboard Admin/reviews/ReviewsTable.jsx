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
import swal from "sweetalert";

export const ReviewsTable = () => {
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch, count]);

  const deleteAlert = (id, userName) => {
    swal({
      title: "Are you sure?",
      text: `this will remove the review of ${userName} from the database.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((r) => {
      if (r) {
        dispatch(deleteReview(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log(userName);
        }, 1500);
        swal({
          text: "The review has been successfully removed.",
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
            <TableCell className="title">USERNAME</TableCell>
            <TableCell className="title">SCORE</TableCell>
            <TableCell className="title">COMMENTARY</TableCell>
            <TableCell className="title">DATE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="tableCellReviews">{r.userName}</TableCell>
              <TableCell className="tableCellReviews">${r.score}</TableCell>
              <TableCell className="tableCellReviews">
                {r.commentary.slice(0, 30)}
              </TableCell>
              <TableCell className="tableCellReviews">{r.createdAt}</TableCell>
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
