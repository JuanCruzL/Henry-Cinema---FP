import React from "react";
import "./screeningstable.scss";
import { useState, useEffect } from "react";
<<<<<<< HEAD
//import { getReleases, deleteRelease } from "../../../redux/actions";
=======
import { getScreenings } from "../../../redux/actions";
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
//mport { Link, useNavigate } from "react-router-dom";
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
import swal from "sweetalert";

export const ScreeningsTable = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const allReleases = useSelector((state) => state.allReleases);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getReleases());
  }, [dispatch]);

  const deleteAlert = (id, title) => {
    swal({
      title: "Are you sure?",
      text: `this will remove ${title} from the database.`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((r) => {
      if (r) {
        dispatch(deleteMovie(id));
        setTimeout(() => {
          setCount(count + 1);
          console.log("HOLAA");
        }, 1500);
        swal({
          text: "The movie has been successfully removed.",
          icon: "success",
        });
      } else {
        swal("Remove cancelled");
      }
    });
  };

  return (
    <TableContainer component={Paper} className="releasesTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">TITLE</TableCell>
            <TableCell className="title">GENRE</TableCell>
            <TableCell className="title">CLASSIFICATION</TableCell>
            <TableCell className="title">SCORE</TableCell>
            <TableCell className="title">CREATED AT</TableCell>
=======
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
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
            <TableCell className="title">IMAGE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
<<<<<<< HEAD
          {/* {allReleases.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="tableCellReleases">
                {r.title.slice(0, 20)}
              </TableCell>
              <TableCell className="tableCellReleases">{r.genres[0]}</TableCell>
              <TableCell className="tableCellReleases">
                {r.classification}
              </TableCell>
              <TableCell className="tableCellReleases">
                {r.voteAverage}
              </TableCell>
              <TableCell className="tableCellReleases">
                {r.createdAt.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCellReleases">
                <div className="cellWrapper">
                  <Link to={`/movie/${r.apiId}`}>
                    <img
                      alt={r.title}
                      className="releaseImage"
                      src={r.imageVertical}
                    />
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCellReleases">
                <button onClick={() => deleteAlert(r.id, r.title)}>
=======
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
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
                  <div>
                    <DeleteForeverRoundedIcon className="bin" />
                  </div>
                </button>
<<<<<<< HEAD
              </TableCell> */}
          {/* </TableRow>
          ))} */}
=======
              </TableCell>
            </TableRow>
          ))}
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScreeningsTable;
