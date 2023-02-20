import React, { useState } from "react";
import { createCombo } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newcombo.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import swal from "sweetalert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewCombo = () => {
  // const loggedUser = useSelector((state) => state.currentUser);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
  //     navigate("/");
  //   }
  // });
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const validateAll = () => {
    const { name, description, price, image } = values;

    const validations = {
      name: "",
      description: "",
      price: "",
      image: "",
    };

    let isValid = true;

    if (!name) {
      validations.name = "Name is required";
      isValid = false;
    }

    if ((name && name.length < 2) || name.length > 40) {
      validations.name = "The name must contain between 2 and 40 characters";
      isValid = false;
    }

    if (!description) {
      validations.description = "Description is required";
      isValid = false;
    }

    if (!image) {
      validations.image = "An image of the food is required";
      isValid = false;
    }

    if (!price) {
      validations.price = "Price is required";
      isValid = false;
    }

    if (isNaN(price) === true || price < 0 || price > 100000) {
      validations.voteAverage = "Price must be a number betweeen 1 and 100000";
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

    if (value && name === "name" && (value.length < 2 || value.length > 40)) {
      message = "Name must contain between 2 and 40 characters";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result });
    }
  }

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    dispatch(createCombo(values)).then(() =>
      swal({
        title: `The combo ${values.name} has been created`,
        icon: "success",
        button: true,
      })
    );
    console.log(values);
  };

  const { name, description, image, price } = values;

  const { name: nameVal, description: descriptionVal, image: imageVal, price: priceVal } = validations;


  return (
    <div className="newCombo">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="formContainer">
          <div className="top">
            <h1>Add a New Combo</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                className="imageNC"
                id="imageNC"
                src={image ? image : "https://st3.depositphotos.com/1755257/13176/v/450/depositphotos_131760572-stock-illustration-popcorn-boxes-set.jpg"}
                alt=""
              />
            </div>
            <div className="right">
              <form name="newCombo" onSubmit={handleSubmit}>
                <div className="formNC">
                  <label>Name</label>
                  <input
                    className="inputNC"
                    type="text"
                    placeholder="Name of the meal..."
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={validateOne}
                  />
                  <div className="vals">{nameVal}</div>
                </div>
                <div className="formNC">
                  <label>Description</label>
                  <input
                    className="inputNC"
                    type="text"
                    placeholder="Description of the meal..."
                    name="description"
                    value={description}
                    onChange={handleChange}
                    onBlur={validateOne}
                  />
                  <div className="vals">{descriptionVal}</div>
                </div>
                <div className="formNC">
                  <label>Price</label>
                  <input
                    className="inputNC"
                    type="number"
                    placeholder="how much it cost..."
                    name="price"
                    value={price}
                    onChange={handleChange}
                    onBlur={validateOne}
                  />
                  <div className="vals">{priceVal}</div>
                </div>
                <div className="formNC">
                  <label>Image</label>
                  <div className="inputNUImage">
                    <input
                      className="image-charge"
                      type="file"
                      placeholder="img url"
                      name="image"
                      onChange={handleImageChange}
                      onBlur={validateOne}
                    />
                  </div>
                  <div className="vals">{imageVal}</div>
                </div>
                <button className="buttonNC" type="submit" value="SUBMIT COMBO">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCombo;
