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
              <TableCell className="tableCellMovies">{m.title}</TableCell>
              <TableCell className="tableCellMovies">{m.genres[0]}</TableCell>
              <TableCell className="tableCellMovies">
                {m.classification}
              </TableCell>
              <TableCell className="tableCellMovies">{m.voteAverage}</TableCell>
              <TableCell className="tableCellMovies">
                {m.createdAt.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCellMovies">
                <div className="cellWrapper">
                  <img
                    alt={m.title}
                    className="movieImage"
                    src={m.imageVertical}
                  />
                </div>
              </TableCell>
              <TableCell className="tableCellMovies">
                <button onClick={() => alert(m.id, m.title)}>
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
