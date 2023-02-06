import React, { useState } from "react";
import "./Login.css";
import logo from "../Utils/logo-henry-cinema.png";


export default function Login() {

  const [sign, setSign] = useState("sign-in");
  const [checked2, setChecked] = useState(false)

  const handleSign = (signstring) => {
    setSign(signstring);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  if (sign === "sign-in") {
    return (
      <div className="loginContainer">
        <div className="form-imageContainer">
          <div className="image-container">
            <img src={logo} className="logo-image"></img>
          </div>
          <div className="prueba">
            <div className="form-container">
              <div className="sign">
                <p className="sign-inP" onClick={() => handleSign("sign-in")}>
                  Sign in
                </p>
                <p className="signP">or</p>
                <p className="sign-upP" onClick={() => handleSign("sign-up")}>
                  Sign up
                </p>
              </div>
              <p className="desc-p">PASSWORD</p>
              <input
                placeholder="Enter your password"
                type="password"
                className="formInput"
              />
              <p className="desc-p">E-MAIL</p>
              <input placeholder="Enter your Email" className="formInput" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (sign === "sign-up") {
    return (
      <div className="loginContainer">
        <div className="form-imageContainer">
          <div className="image-container">
            <img src={logo} className="logo-image"></img>
          </div>
          <div className="prueba">
            <div className="form-container">
              <div className="sign">
                <p className="sign-inP" onClick={() => handleSign("sign-in")}>
                  Sign in
                </p>
                <p className="signP">or</p>
                <p className="sign-upP" onClick={() => handleSign("sign-up")}>
                  Sign up
                </p>
              </div>
              <p className="desc-p">FULL NAME</p>
              <input placeholder="Enter your full name" className="formInput" />
              <p className="desc-p">PASSWORD</p>
              <input
                placeholder="Enter your password"
                type="password"
                className="formInput"
              />
              <p className="desc-p">E-MAIL</p>
              <input placeholder="Enter your Email" className="formInput" />
              <label className="container">
                <input  type="checkbox" className="checkinput" onClick={(e)=> handleCheck(e)}/>
                <span className="checkmark"></span>
                <div className="textdiv">I want to recieve e-mail notifications</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
