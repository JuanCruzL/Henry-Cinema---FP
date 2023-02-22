import React, { useState } from "react";
import { createFood } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newfoods.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import swal from "sweetalert";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NewFood = () => {
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

  const handleChange = (e, im = 0) => {
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
    dispatch(createFood(values)).then(() =>
      swal({
        title: `The food ${values.name} has been created`,
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
              src={
                image
                  ? image
                  : "https://thumbs.dreamstime.com/b/objeto-vectorial-de-la-vista-superior-pizza-blanco-y-negro-con-diferentes-ingredientes-o-elemento-dise%C3%B1o-en-estilo-monocromo-185052567.jpg"
              }
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
              <button className="buttonNF" type="submit" value="SUBMIT FOOD">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFood;
