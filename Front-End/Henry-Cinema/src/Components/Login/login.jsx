import React, { useState } from "react";
import "./Login.css";
import logo from "../Utils/logo-henry-cinema.png";

export default function Login() {
  
  const [sign, setSign] = useState("sign-in");
  const [checked2, setChecked2] = useState(false);
  const [errors, setErrors] = useState({
    forminPassword: false,
    forminEmail: false,
    formupFullname: false,
    formupPassword: false,
    formupEmail: false,
  });

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


//-------------------------------------------HANDLERS-----------------------------------------------------


//--------------------------------------SIGN IN VALIDATOR-------------------------------------------
  (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g).test(formIn.email) ? errors.forminEmail = false : errors.forminEmail = true;

 /([\da-zA-Z]){8,}/.test(formIn.password) ? errors.forminPassword = false : errors.forminPassword = true;

 const validate = (formUp) => {
  if(errors.formupFullname === false && errors.formupEmail === false && errors.formupPassword === false) {
    return true
  }
 }

 //----------------------------------------SIGN UP VALIDATOR--------------------------------------
 (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g).test(formUp.email) ? errors.formupEmail = false : errors.formupEmail = true;
    
 /([\da-zA-Z]){8,}/.test(formUp.password) ? errors.formupPassword = false : errors.formupPassword = true;

 /^(?!.* $)+[a-zA-Z][A-Za-z ]+$/.test(formUp.fullName) ? errors.formupFullname = false : errors.formupFullname = true


  const handleSign = (signstring) => {
    setSign(signstring);
  };

  const handleCheck = (e) => {
    setChecked2(e.target.checked)
    formUp.notifications = e.target.checked
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
    alert("notificaciones en " + formUp.notifications)
    setFormUp({
      fullName:"",
      email: "",
      password: "",
      notifications: checked2,
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
                <p className="sign-inPselect" onClick={() => handleSign("sign-in")}>
                  Sign in
                </p>
                <p className="signP">or</p>
                <p className="sign-upP" onClick={() => handleSign("sign-up")}>
                  Sign up
                </p>
              </div>
              <form onSubmit={(e) => handleSubmitIn(e)} className="formsignin">
                <p className={errors.forminEmail ? "baddesc-p": "desc-p"}>E-MAIL</p>
                <input
                  placeholder="Enter your Email"
                  className={errors.forminEmail ? "badinput" : "formInput"}
                  name="email"
                  value={formIn.email}
                  onChange={(e) => handleChangeIn(e)}
                />
                <p className={errors.forminPassword ? "baddesc-p": "desc-p"}>PASSWORD</p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className={errors.forminPassword ? "badinput" : "formInput"}
                  name="password"
                  value={formIn.password}
                  onChange={(e) => handleChangeIn(e)}
                />
                <button className="buttonSubmit" type="submit">Sign in</button>
              </form>
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
                <p className="sign-upPselect" onClick={() => handleSign("sign-up")}>
                  Sign up
                </p>
                <p>{String(formUp.notifications)}</p>
              </div>
              <form onSubmit={(e) => handleSubmitUp(e)}>
                <p className={errors.formupFullname ? "baddesc-p": "desc-p"}>FULL NAME</p>
                <input
                  placeholder="Enter your full name"
                  className={errors.formupFullname ? "badinput" : "formInput"}
                  onChange={e => handleChangeUp(e)}
                  value={formUp.fullName}
                  name="fullName"
                />
                <p className={errors.formupPassword ? "baddesc-p": "desc-p"}>PASSWORD</p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className={errors.formupPassword ? "badinput" : "formInput"}
                  value={formUp.password}
                  name="password"
                  onChange={e => handleChangeUp(e)}
                />
                <p className={errors.formupEmail ? "baddesc-p" : "desc-p"}>E-MAIL</p>
                <input
                  placeholder="Enter your Email"
                  className={errors.formupEmail ? "badinput" : "formInput"}
                  value={formUp.email}
                  name="email"
                  onChange={e => handleChangeUp(e)}
                />
                <button className="buttonSubmitup" type="submit">Sign Up</button>
              </form>
                <label className="container">
                  <input
                    type="checkbox"
                    className="checkinput"
                    onClick={(e) => handleCheck(e)}
                    name="notifications"
                  />
                  <span className="checkmark"></span>
                  <div className="textdiv">
                    I want to recieve e-mail notifications
                  </div>
                </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

