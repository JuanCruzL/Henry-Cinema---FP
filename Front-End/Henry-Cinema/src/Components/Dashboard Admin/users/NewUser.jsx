import React, { useState } from "react";
import { createAdminUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newdrink.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import swal from "sweetalert";
import { useEffect } from "react";

export const NewDrink = () => {
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

    if ((userName && userName.length < 2) || userName.length > 40) {
      validations.name =
        "The username must contain between 2 and 40 characters";
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
    const { userName } = e.target;
    const value = values[userName];
    let message = "";

    if (!value) {
      message = `${userName} is required`;
    }

    if (
      value &&
      userName === "userName" &&
      (value.length < 2 || value.length > 40)
    ) {
      message = "Username must contain between 2 and 40 characters";
    }

    setValidations({ ...validations, [userName]: message });
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

  const { name, image, price } = values;

  const { name: nameVal, image: imageVal, price: priceVal } = validations;

  return (
    <div className="newDrink">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add a New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageND"
              id="imageND"
              src="https://thumbs.dreamstime.com/b/takeaway-cold-brew-coffee-vector-minimalistic-line-art-illustration-isolated-white-background-216624208.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form name="newDrink" onSubmit={handleSubmit}>
              <div className="formND">
                <label>Name</label>
                <input
                  className="inputND"
                  type="text"
                  placeholder="Name of the meal..."
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{nameVal}</div>
              </div>
              <div className="formND">
                <label>Price</label>
                <input
                  className="inputND"
                  type="number"
                  placeholder="how much it cost..."
                  name="price"
                  value={price}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{priceVal}</div>
              </div>
              <div className="formND">
                <label>Image</label>
                <input
                  className="inputND"
                  type="text"
                  placeholder="img url"
                  name="image"
                  value={image}
                  onChange={(e) => handleChange(e, 1)}
                  onBlur={validateOne}
                />
                <div className="vals">{imageVal}</div>
              </div>
              <button className="buttonND" type="submit" value="SUBMIT DRINK">
                <OutboxRoundedIcon className="iconSubmit" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDrink;
