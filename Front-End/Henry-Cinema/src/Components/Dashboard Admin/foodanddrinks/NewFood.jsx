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
    price: "",
    image: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    price: "",
    image: "",
  });

  const validateAll = () => {
    const { name, price, image } = values;

    const validations = {
      name: "",
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

  const handleChange = (e, im = 0) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (im == 1) {
      let img = e.target.value;
      cambiarImagen(img);
    }
  };

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    dispatch(createFood(values)).then(() =>
      swal({
        title: `The food ${values.name} has been created`,
        icon: "success",
        button: true,
      })
    );
    console.log(values);
  };

  const { name, image, price } = values;

  const { name: nameVal, image: imageVal, price: priceVal } = validations;

  const cambiarImagen = (img = "") => {
    let comprobar = document.getElementById("imageNF");
    let defaultImg =
      "https://previews.123rf.com/images/foontntd/foontntd1705/foontntd170500070/77824901-menu-food-drawing-graphic-design-illustrate-objects-template.jpg";
    let imgPoster = img;
    comprobar.src = imgPoster;
    if (comprobar.src == imgPoster && comprobar.naturalHeight > 0) {
      comprobar.src = imgPoster;
    } else {
      comprobar.src = defaultImg;
    }
  };

  return (
    <div className="newFood">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add a New Food</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageNF"
              id="imageNF"
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
                  onChange={(e) => handleChange(e, 1)}
                  onBlur={validateOne}
                />
                <div className="vals">{imageVal}</div>
              </div>
              <button className="buttonNF" type="submit" value="SUBMIT FOOD">
                SUMBIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFood;
