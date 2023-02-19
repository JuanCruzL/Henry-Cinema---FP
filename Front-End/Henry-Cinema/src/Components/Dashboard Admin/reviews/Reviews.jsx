import React from "react";
import "./reviews.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { ReviewsTable } from "../reviews/ReviewsTable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ReviewsDash = () => {
  // const loggedUser = useSelector((state) => state.currentUser);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
  //     navigate("/");
  //   }
  // });
  return (
    <div className="list">
      <SideBarDash />
      <div className="listContainer">
        <NavBarDash location="Review" />
        <ReviewsTable />
      </div>
    </div>
  );
};

export default ReviewsDash;
