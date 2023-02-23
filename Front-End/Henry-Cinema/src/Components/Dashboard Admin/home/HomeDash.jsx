import React, { useEffect, useState} from "react";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { Widget } from "../widgets/Widget";
import { Featured } from "../featured/Featured";
import { Chart } from "../chart/Chart";
import { List } from "../table/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReviews, getSales, getScreenings, getUsers } from "../../../redux/actions";
import Loader from "../../Loader/Loader";
import "./homedash.scss";

export const HomeDash = () => {
  const dispatch = useDispatch()
  const [load, setLoad] = useState(false)
    useEffect(()=>{
      dispatch(getSales())
      dispatch(getScreenings())
      dispatch(getUsers())
      dispatch(getReviews())
      setLoad(true)
    }, [])

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  console.log(loggedUser);
  useEffect(() => {
    if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
      navigate("/");
    }
  });


  if (load === false) {
    return <Loader />
  } else if (load === true)
  return (
    <div className="home">
      <SideBarDash />
      <div className="homeContainer">
        <NavBarDash location="Home" />
        <div className="widgets">
          <Widget type="users" className="widget" load={load}/>
          <Widget type="reviews" className="widget" load={load}/>
          <Widget type="screenings" className="widget" load={load}/>
          <Widget type="sales" className="widget" load={load}/> 
        </div>
        <div className="charts">
          <Featured className="featured" load={load}/>
          <Chart className="chart" load={load}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">LATEST TRANSACTIONS</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
