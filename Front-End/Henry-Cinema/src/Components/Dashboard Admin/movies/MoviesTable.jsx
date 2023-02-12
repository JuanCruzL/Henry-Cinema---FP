import React from "react";
import "./moviestable.scss";
import { useState, useEffect } from "react";
import { getMovies, deleteMovie } from "../../../redux/actions";
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

export const MoviesTable = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.allMovies);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getMovies());
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
    <TableContainer component={Paper} className="moviesTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow">
            <TableCell className="title">TITLE</TableCell>
            <TableCell className="title">GENRE</TableCell>
            <TableCell className="title">CLASSIFICATION</TableCell>
            <TableCell className="title">SCORE</TableCell>
            <TableCell className="title">CREATED AT</TableCell>
            <TableCell className="title">IMAGE</TableCell>
            <TableCell className="title">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="list">
          {allMovies.map((m) => (
            <TableRow key={m.id}>
              <TableCell className="tableCellMovies">
                {m.title.slice(0, 20)}
              </TableCell>
              {/* <TableCell className="tableCellMovies">{m.genres[0]}</TableCell> */}
              <TableCell className="tableCellMovies">
                {m.classification}
              </TableCell>
              <TableCell className="tableCellMovies">{m.voteAverage}</TableCell>
              <TableCell className="tableCellMovies">
                {m.createdAt.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCellMovies">
                <div className="cellWrapper">
                  <Link to={`/movie/${m.apiId}`}>
                    <img
                      alt={m.title}
                      className="movieImage"
                      src={m.imageVertical}
                    />
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCellMovies">
                <button onClick={() => deleteAlert(m.id, m.title)}>
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

export default MoviesTable;
