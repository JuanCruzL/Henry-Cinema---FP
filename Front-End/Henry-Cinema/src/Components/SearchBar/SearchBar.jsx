import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../../redux/actions";
import "./SearchBar.css";
import logoSearch from "../../img/busqueda.png";

export const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInpuChange = (e) => {
    e.preventDefault();
    dispatch(searchMovie(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="search-container">
      <div className="input-icons">
        <input
          onChange={(e) => handleInpuChange(e)}
          className="input-field"
          type="text"
          placeholder="Search..."
          maxLength={20}
        />

        <img src={logoSearch} className="button-search" />
      </div>
    </div>
  );
};
export default SearchBar;
