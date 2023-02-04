import React from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="input-icons">
        <input
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
