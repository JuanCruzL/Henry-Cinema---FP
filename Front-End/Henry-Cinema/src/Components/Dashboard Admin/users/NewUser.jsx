import React, { useState } from "react";
import { createAdminUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newuser.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import swal from "sweetalert";
import { useEffect } from "react";

export const NewUser = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
    isAdministrator: "",
  });

  const [validations, setValidations] = useState({
    userName: "",
    password: "",
    email: "",
    isAdministrator: "",
  });

  const validateAll = () => {
    const { userName, password, email, isAdministrator } = values;

    const validations = {
      userName: "",
      password: "",
      email: "",
      isAdministrator: "",
    };

    let isValid = true;

    if (!userName) {
      validations.name = "Name is required";
      isValid = false;
    }

    if ((userName && userName.length < 2) || userName.length > 30) {
      validations.name =
        "The username must contain between 2 and 30 characters";
      isValid = false;
    }

    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      validations.password = "Password is required";
      isValid = false;
    }

    if (!isAdministrator) {
      validations.price = "This field is required";
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }

    if (
      value &&
      name === "userName" &&
      (value.length < 2 || value.length > 30)
    ) {
      message = "Username must contain between 2 and 40 characters";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    dispatch(createAdminUser(values)).then(() =>
      swal({
        title: `The user ${values.userName} has been created`,
        icon: "success",
        button: true,
      })
    );
    console.log(values);
  };

  const { userName, password, email, isAdministrator } = values;

  const {
    userName: userNameVal,
    password: passwordVal,
    email: emailVal,
    isAdministrator: isAdminVal,
  } = validations;

  return (
    <div className="newUser">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add a New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageNU"
              id="imageNU"
              src="https://img.freepik.com/vector-premium/usuario-gafas-realidad-virtual-icono-doodle-contorno-dibujado-mano-casco-realidad-virtual-concepto-gadget-vr-ilustracion-dibujo-vectorial-impresion-web-movil-e-infografia-sobre-fondo-blanco_107173-18905.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form name="newUser" onSubmit={handleSubmit}>
              <div className="formNU">
                <label>USERNAME</label>
                <input
                  className="inputNU"
                  type="text"
                  placeholder="Name of the user..."
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{userNameVal}</div>
              </div>
              <div className="formNU">
                <label>EMAIL</label>
                <input
                  className="inputNU"
                  type="text"
                  placeholder="The email of the user."
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e, 1)}
                  onBlur={validateOne}
                />
                <div className="vals">{emailVal}</div>
              </div>
              <div className="formNU">
                <label>PASSWORD</label>
                <input
                  className="inputNU"
                  type="text"
                  placeholder="set your password here..."
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{passwordVal}</div>
              </div>
              <div className="formNU">
                <label>IS ADMINISTRATOR?</label>
                <input
                  className="inputNU"
                  type="text"
                  placeholder="true or false"
                  name="isAdministrator"
                  value={isAdministrator}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{isAdminVal}</div>
              </div>
              <button className="buttonNU" type="submit" value="SUBMIT USER">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
