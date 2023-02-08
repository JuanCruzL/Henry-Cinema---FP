import React from "react";
import "./moviestable.scss";
import { useState, useEffect } from "react";
import { getMovies } from "../../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

export const MoviesTable = () => {
  function alert(id, title) {
    var respuesta = confirm({ title });
    if (respuesta === true) {
      console.log("movie deleted");
      // hacer el dispatch para eliminar con el id.
    } else {
      console.log(id);
    }
  }

  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [allMovies]);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Genre</TableCell>
            <TableCell className="tableCell">Classification</TableCell>
            <TableCell className="tableCell">Score</TableCell>
            <TableCell className="tableCell">Created At</TableCell>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMovies.map((m) => (
            <TableRow key={m.id}>
              <TableCell className="tableCell">{m.title}</TableCell>
              <TableCell className="tableCell">{m.genres[0]}</TableCell>
              <TableCell className="tableCell">{m.classification}</TableCell>
              <TableCell className="tableCell">{m.voteAverage}</TableCell>
              <TableCell className="tableCell">
                {m.createdAt.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    alt={m.title}
                    className="movieImage"
                    src={m.imageVertical}
                  />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <button
                  className="bintrash"
                  onClick={() => alert(m.id, m.title)}
                >
                  <div className="bin">
                    <DeleteForeverRoundedIcon />
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
