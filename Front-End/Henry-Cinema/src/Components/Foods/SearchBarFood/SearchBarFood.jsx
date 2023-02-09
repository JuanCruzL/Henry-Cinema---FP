import React from 'react'
import "./SearchBarFood.css"
import { useSelector , useDispatch } from "react-redux";
import SearchButton from '../../../img/busqueda.png'
import { searchFood } from '../../../redux/actions';

function SearchBarFood() {
    const dispatch = useDispatch();
  
    const handleInpuChange = (e) => {
      e.preventDefault();
      if (e.key === "Enter") {
        e.target.value = "";
      } else {
        dispatch(searchFood(e.target.value));
        
      }
    };
  
    return (
      <div className="food-bar">
        <div className="container-input-bar">
          <input
            onKeyUp={e => handleInpuChange(e)}
            onChange={e => handleInpuChange(e)}
            className="input-food"
            type="text"
            placeholder="Search Food ..."
            maxLength={20}
          />
  
          <img className="search-image" src={SearchButton} />
        </div>
      </div>
    );
  }

export default SearchBarFood;