import React from "react";
import "../Loader/Loader.css";

function Loader() {
  return (
    
      <div className="loaderRectangle">
        <div className="loaderDivRectangle"></div>
        <div className="loaderDivRectangle"></div>
        <div className="loaderDivRectangle"></div>
        <div className="loaderDivRectangle"></div>
        <div className="loaderDivRectangle"></div>
        <h2 className="textLoading">Loading</h2>
      </div>
  
  );
}

export default Loader;
