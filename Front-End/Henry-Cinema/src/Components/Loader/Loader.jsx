import React from "react";
import Nav from "../Nav/Nav";
import "../Loader/Loader.css";

function Loader() {
  return (
    <div className="container-loader">
      <Nav/>
      <div className="wrapper-loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span className="text-loader">Loading</span>
    </div>
    </div>
  
  );
}

export default Loader;
