import React from "react";
import "./reviews.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import { ReviewsTable } from "../reviews/ReviewsTable";

export const ReviewsDash = () => {
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
