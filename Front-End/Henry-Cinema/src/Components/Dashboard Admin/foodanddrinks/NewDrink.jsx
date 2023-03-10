import React, { useState } from "react";
import { createDrink } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newdrink.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import swal from "sweetalert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewDrink = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
      navigate("/");
    }
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    dispatch(createDrink(values)).then(() =>
      swal({
        title: `The drink ${values.name} has been created`,
        icon: "success",
        button: true,
      })
    );
    setValues({
      name: "",
      price: "",
      image: "",
    });
  };

  const { name, image, price } = values;

  const { name: nameVal, image: imageVal, price: priceVal } = validations;

  return (
    <div className="newDrink">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add a New Drink</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageND"
              id="imageND"
              src={
                image
                  ? image
                  : "https://thumbs.dreamstime.com/b/takeaway-cold-brew-coffee-vector-minimalistic-line-art-illustration-isolated-white-background-216624208.jpg"
              }
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
              <button className="buttonND" type="submit" value="SUBMIT DRINK">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDrink;
