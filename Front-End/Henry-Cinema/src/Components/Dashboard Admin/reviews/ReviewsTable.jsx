import React from "react";
import "./reviewstable.scss";
import { useState, useEffect } from "react";
import { getReviews, deleteReview, getUserById } from "../../../redux/actions";
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
import axios from "axios";

export const ReviewsTable = () => {
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch, count]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const promises = allReviews.map((r) => axios.get(`/users/${r.User_Review}`));
        const results = await Promise.all(promises);
        const users = results.map((r) => r.data);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [allReviews]);

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
  const requestUserById = async(id) => {
    let response = await axios.get(`/users/${id}`)
    return response.data
  }
  const promises = allReviews.map(r => requestUserById(r.User_Review));

  

  return (
    <TableContainer component={Paper} className="reviewsTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">USERNAME</TableCell>
            <TableCell className="title">REVIEW</TableCell>
            <TableCell className="title">DATE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allReviews?.map((r, i) => { let user = requestUserById(r.User_Review); return(<TableRow key={r.id}>
              <TableCell className="tableCellReviews">{users[i]?.userName}</TableCell>
              <TableCell className="tableCellReviews">
                {r.review.slice(0, 30)}
              </TableCell>
              <TableCell className="tableCellReviews">{r.createdAt.slice(0,10)}</TableCell>
              <TableCell className="tableCellReviews">
                <button onClick={() => deleteAlert(r.id, r.name)}>
                  <div>
                    <DeleteForeverRoundedIcon className="bin" />
                  </div>
                </button>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReviewsTable;