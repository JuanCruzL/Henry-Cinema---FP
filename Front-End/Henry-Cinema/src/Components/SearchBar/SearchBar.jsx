import React, {useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import {searchMovie} from "../../redux/actions/index";
import "./SearchBar.css";

export const SearchBar = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleInpuChange = (e) => {
    e.preventDefault();
    dispatch(searchMovie(e.target.value))
    setCurrentPage(1)
  }
  
  return (
    <div className="search-container">
      <div className="input-icons">
        <input
        onChange={e => handleInpuChange(e)}
          className="input-field"
          type="text"
          placeholder="Search..."
          maxLength={20}
        />

        <button className="button-search" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
