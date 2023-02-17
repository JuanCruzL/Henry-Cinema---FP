import React from "react";
import "./userstable.scss";
import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../../../redux/actions";
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

export const UsersTable = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, count]);

  const deleteAlert = (id, userName) => {
    swal({
      title: "Are you sure?",
      text: `this will remove ${userName} from the database.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((r) => {
      if (r) {
        dispatch(deleteUser(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log(userName);
        }, 1500);
        swal({
          text: "The user has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="screeningsUsers">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">USERNAME</TableCell>
            <TableCell className="title">EMAIL</TableCell>
            <TableCell className="title">IMAGE</TableCell>
            <TableCell className="title">ADMIN</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allUsers.map((u) => (
            <TableRow key={u.id}>
              <TableCell className="tableUsers">{u.userName}</TableCell>
              <TableCell className="tableUsers">{u.email}</TableCell>
              <TableCell className="tableUsers">
                <div className="cellWrapper">
                  <img alt={u.image} className="userImage" src={u.image} />
                </div>
              </TableCell>
              <TableCell className="isAdmin">{u.isAdministrator}</TableCell>
              <TableCell className="tableUsers">
                <button onClick={() => deleteAlert(u.id, u.name)}>
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

export default UsersTable;
