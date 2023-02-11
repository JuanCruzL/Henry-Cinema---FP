import React, { useState } from "react";
import { createMovie } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import "./newmovie.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";

export const NewMovie = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: "",
    imageVertical: "",
    voteAverage: "",
    imageHorizontal: "",
    overview: "",
    review: "",
    status: "",
    productionCompanies: "",
    runtime: "",
    originalLanguage: "",
    genres: "",
    directors: "",
    actors: "",
    video: "",
    classification: "",
    distributor: "",
  });

  const [validations, setValidations] = useState({
    title: "",
    imageVertical: "",
    voteAverage: "",
    imageHorizontal: "",
    overview: "",
    review: "",
    status: "",
    productionCompanies: "",
    runtime: "",
    originalLanguage: "",
    genres: "",
    directors: "",
    actors: "",
    video: "",
    classification: "",
    distributor: "",
  });

  const validateAll = () => {
    const {
      title,
      imageVertical,
      voteAverage,
      imageHorizontal,
      overview,
      status,
      runtime,
      originalLanguage,
      genres,
      classification,
    } = values;

    const validations = {
      title: "",
      imageVertical: "",
      voteAverage: "",
      imageHorizontal: "",
      overview: "",
      status: "",
      runtime: "",
      originalLanguage: "",
      genres: "",
      classification: "",
    };

    let isValid = true;

    if (!title) {
      validations.title = "Title is required";
      isValid = false;
    }

    if ((title && title.length < 1) || title.length > 25) {
      validations.title = "The title must contain between 1 and 25 characters";
      isValid = false;
    }

    if (imageVertical.length == 0 || !/\.(jpg|png)$/i.test(imageVertical)) {
      validations.imageVertical =
        "At leat one jpg or png image for movie is required";
      isValid = false;
    }

    if (!/\.(jpg|png)$/i.test(imageHorizontal)) {
      validations.imageHorizontal = "The file must be a jpg or png image";
      isValid = false;
    }

    if (!voteAverage) {
      validations.voteAverage = "Score is required";
      isValid = false;
    }

    if (isNaN(voteAverage) === true || (voteAverage < 10 && voteAverage < 0)) {
      validations.voteAverage = "Score must be a number betweeen 0 and 10";
      isValid = false;
    }

    if (!overview) {
      validations.overview = "Overview is required";
      isValid = false;
    }

    if (!status) {
      validations.status = "Status is required";
      isValid = false;
    }

    if (!originalLanguage) {
      validations.originalLanguage = "Movie language is required";
      isValid = false;
    }

    if (!runtime) {
      validations.runtime = "Runtime is required";
      isValid = false;
    }

    if (!genres) {
      validations.genres = "Genres is required";
      isValid = false;
    }

    if (!classification) {
      validations.classification = "Classification is required";
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

    if (value && name === "title" && (value.length < 1 || value.length > 25)) {
      message = "Title must contain between 1 and 25 characters";
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }
    dispatch(createMovie(values)).then(() => alert("Movie added"));
    // si hay tiempo agregamos una alerta mejor de sweetalert
  };

  const {
    title,
    imageVertical,
    imageHorizontal,
    voteAverage,
    overview,
    review,
    status,
    productionCompanies,
    runtime,
    originalLanguage,
    genres,
    directors,
    actors,
    video,
    classification,
    distributor,
  } = values;

  const {
    title: titleVal,
    imageVertical: imageVerticalVal,
    voteAverage: voteAverageVal,
    imageHorizontal: imageHorizontalVal,
    overview: overviewVal,
    status: statusVal,
    runtime: runtimeVal,
    originalLanguage: originalLanguageVal,
    genres: genresVal,
    classification: classificationVal,
  } = validations;

  return (
    <div className="newMovie">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1>Add New Movie</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageNM"
              src="https://st4.depositphotos.com/3788621/24041/i/450/depositphotos_240418652-stock-photo-movie-time-concept-creative-template.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formNM">
                <label>Title</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Titanic..."
                  name="title"
                  value={title}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{titleVal}</div>
              </div>
              <div className="formNM">
                <label>Poster</label>
                <label htmlFor="file">
                  <CreateNewFolderIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  name="imageVertical"
                  value={imageVertical}
                  accept="image/png,image/jpeg"
                />
                <div className="vals">{imageVerticalVal}</div>
              </div>
              <div className="formNM">
                <label>Score</label>
                <input
                  className="inputNM"
                  type="number"
                  placeholder="img url"
                  name="voteAverage"
                  value={voteAverage}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{voteAverageVal}</div>
              </div>
              <div className="formNM">
                <label>Banner</label>
                <label htmlFor="file">
                  <CreateNewFolderIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  name="imageHorizontal"
                  value={imageHorizontal}
                  accept="image/png,image/jpeg,image/jpg"
                />
                <div className="vals">{imageHorizontalVal}</div>
              </div>
              <div className="formNM">
                <label>Overview</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="this movie is about..."
                  name="overview"
                  value={overview}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{overviewVal}</div>
              </div>
              <div className="formNM">
                <label>Review</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="what you think about this movie?"
                  name="review"
                  value={review}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <div className="formNM">
                <label>Status</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="already released or release soon?"
                  name="status"
                  value={status}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{statusVal}</div>
              </div>
              <div className="formNM">
                <label>Production Companies</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Warner Brothers..."
                  name="productionCompanies"
                  value={productionCompanies}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <div className="formNM">
                <label>Runtime</label>
                <input
                  className="inputNM"
                  type="number"
                  placeholder="total length of the film"
                  name="runtime"
                  value={runtime}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{runtimeVal}</div>
              </div>
              <div className="formNM">
                <label>Original Language</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="english..."
                  name="originalLanguage"
                  value={originalLanguage}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{originalLanguageVal}</div>
              </div>
              <div className="formNM">
                <label>Genres</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="action"
                  name="genres"
                  value={genres}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{genresVal}</div>
              </div>
              <div className="formNM">
                <label>Directors</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Martin Scorcece..."
                  name="directors"
                  value={directors}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <div className="formNM">
                <label>Actors</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Leonardo Dicaprio..."
                  name="actors"
                  value={actors}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <div className="formNM">
                <label>Video</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="link of the vieo"
                  name="video"
                  value={video}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <div className="formNM">
                <label>Classification</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="R or G ?"
                  name="classification"
                  value={classification}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
                <div className="vals">{classificationVal}</div>
              </div>
              <div className="formNM">
                <label>Distributor</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="..."
                  name="distributor"
                  value={distributor}
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </div>
              <button className="buttonNM" type="submit" value="SUBMIT RECIPE">
                <OutboxRoundedIcon className="iconSubmit" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
