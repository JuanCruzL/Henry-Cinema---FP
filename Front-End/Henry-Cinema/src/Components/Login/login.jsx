import React, { useState } from "react";
import "./Login.css";
import logo from "../Utils/logo-henry-cinema.png";

export default function Login() {
  const validate = (form) => {};

  const [formUp, setFormUp] = useState({
    fullName: "",
    email: "",
    password: "",
    notifications: false,
  });

  const [formIn, setFormIn] = useState({
    email: "",
    password: "",
  });

  const [sign, setSign] = useState("sign-in");
  const [checked2, setChecked] = useState(false);

  //----------------------------------------HANDLERS------------------------------------------

  const handleSign = (signstring) => {
    setSign(signstring);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmitIn = (e) => {
    console.log(formIn)
    e.preventDefault();
    setFormIn({
      email: "",
      password: "",
    })
  };

  const handleSubmitUp=(e) => {
    e.preventDefault()
    setFormUp({
      fullName:"",
      email: "",
      password: "",
      notifications: false,
    })
  }

  const handleChangeIn = (e) => {
    setFormIn({
      ...formIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeUp = (e) => {
    setFormUp({
      ...formUp,
      [e.target.name]: e.target.value,
    });
  };

  //-------------------------------------------SIGN IN FORM-----------------------------------

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
              <form onSubmit={(e) => handleSubmitIn(e)} className="">
                <p className="desc-p">E-MAIL</p>
                <input
                  placeholder="Enter your Email"
                  className="formInput"
                  name="email"
                  value={formIn.email}
                  onChange={(e) => handleChangeIn(e)}
                />
                <p className="desc-p">PASSWORD</p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="formInput"
                  name="password"
                  value={formIn.password}
                  onChange={(e) => handleChangeIn(e)}
                />
                {/* <button className="buttonSubmit">Sign in</button> */}
              </form>
              <p>{formIn.email}</p>
              <p>{formIn.password}</p>
            </div>
          </div>
        </div>
      </div>
    );



//--------------------------------------SIGN UP FORM-------------------------------------------

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
              <form>
                <p className="desc-p">FULL NAME</p>
                <input
                  placeholder="Enter your full name"
                  className="formInput"
                  onChange={e => handleChangeUp(e)}
                  value={formUp.fullName}
                  name="fullName"
                />
                <p className="desc-p">PASSWORD</p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="formInput"
                  value={formUp.password}
                  name="password"
                  onChange={e => handleChangeUp(e)}
                />
                <p className="desc-p">E-MAIL</p>
                <input
                  placeholder="Enter your Email"
                  className="formInput"
                  value={formUp.email}
                  name="email"
                  onChange={e => handleChangeUp(e)}
                />
                <label className="container">
                  <input
                    type="checkbox"
                    className="checkinput"
                    onClick={(e) => handleCheck(e)}
                    value={formUp.notifications}
                    name="notifications"
                  />
                  <span className="checkmark"></span>
                  <div className="textdiv">
                    I want to recieve e-mail notifications
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
