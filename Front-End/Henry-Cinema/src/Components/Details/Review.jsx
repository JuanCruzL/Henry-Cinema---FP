import React, { useEffect } from "react";
import "./Details.css";
export default function Review(props) {
  let { username, review, date} = props;
  let image = props.image
    ? props.image
    : "https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg";

    date = date.slice(0, 10)
  return (
    <div className="review-container">
      <div className="user-info">
        <img className="user-image" src={image}></img>
        <div className="review-user-name">{username}</div>
      </div>
      <div className="decoration"></div>
      <div className="text-container-review">
        <div>"{review.trim()}"</div>
      </div>
      <div className="review-date">{date}</div>
    </div>
  );
}
