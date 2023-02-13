import React, { useState } from "react";
import { createFood } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newfoods.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import swal from "sweetalert";
import { useEffect } from "react";

export const NewFood = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const validateAll = () => {
    const { name, price, image } = values;

    const validations = {
      name: "",
      price: 0,
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

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    dispatch(createFood(newFood)).then(() =>
      swal({
        title: `The food ${newFood.name} has been created`,
        icon: "success",
        button: true,
      })
    );
    console.log(newFood);
  };

  const { name, image, price } = values;

  const { name: nameVal, image: imageVal, price: priceVal } = validations;

  return (
    <div className="newFood">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add New Food</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageNF"
              src="https://previews.123rf.com/images/foontntd/foontntd1705/foontntd170500070/77824901-menu-food-drawing-graphic-design-illustrate-objects-template.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form name="newFood" onSubmit={handleSubmit}>
              <div className="formNF">
                <label>Name</label>
                <input
                  className="inputNF"
                  type="text"
                  placeholder="Name of the meal..."
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{nameVal}</div>
              </div>
              <div className="formNF">
                <label>Price</label>
                <input
                  className="inputNF"
                  type="number"
                  placeholder="how much it cost..."
                  name="price"
                  value={price}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{priceVal}</div>
              </div>
              <div className="formNF">
                <label>Image</label>
                <input
                  className="inputNF"
                  type="text"
                  placeholder="img url"
                  name="image"
                  value={image}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{imageVal}</div>
              </div>
              <button className="buttonNF" type="submit" value="SUBMIT FOOD">
                <OutboxRoundedIcon className="iconSubmit" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFood;
