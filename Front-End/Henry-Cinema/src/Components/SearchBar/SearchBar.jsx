import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { searchMovie } from "../../redux/actions";
import "./SearchBar.css";

export const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInpuChange = (e) => {
    e.preventDefault();
    dispatch(searchMovie(e.target.value));
    setCurrentPage(1);
  };
  return (
    <div class="search">
      <input
        onChange={(e) => handleInpuChange(e)}
        type="text"
        class="search__input"
        placeholder="Search Movies..."
      />
      <button class="search__button">
        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};
{
  /* /*  
    <div className="search-container">
      <div className="input-icons">
        <input
          onChange={(e) => handleInpuChange(e)}
          className="input-field"
          type="text"
          placeholder="Search Movies..."
          maxLength={20}
        />
      </div>
      <div className="button-search">
        <SearchRoundedIcon />
      </div>
    </div>
 */
}
export default SearchBar;
