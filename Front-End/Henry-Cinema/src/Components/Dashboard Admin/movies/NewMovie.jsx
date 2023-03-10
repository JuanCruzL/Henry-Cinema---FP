import React, { useState, useEffect } from "react";
import { createMovie, getGenres } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newmovie.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const NewMovie = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
      navigate("/");
    }
  });

  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.newGenres);
  const [selectedGenre, setSelectedGenre] = useState();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const [values, setValues] = useState({
    title: "",
    imageVertical: "",
    voteAverage: "",
    imageHorizontal: "",
    overview: "",
    status: "",
    productionCompanies: "",
    runtime: "",
    originalLanguage: "",
    genres: [],
    directors: "",
    video: "",
    classification: "",
  });

  const [validations, setValidations] = useState({
    title: "",
    imageVertical: "",
    voteAverage: "",
    imageHorizontal: "",
    overview: "",
    status: "",
    runtime: "",
    originalLanguage: "",
    genres: [],
    classification: "",
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
      genres: [],
      classification: "",
    };

    let isValid = true;

    if (!title) {
      validations.title = "Title is required";
      isValid = false;
    }

    if ((title && title.length < 1) || title.length > 40) {
      validations.title = "The title must contain between 1 and 25 characters";
      isValid = false;
    }

    if (!imageVertical) {
      validations.imageVertical = "A Poster of the movie is required";
      isValid = false;
    }

    if (!imageHorizontal) {
      validations.imageHorizontal = "A banner of the movie is required";
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

    // if (values.classification !== "R" || values.classification !== "G") {
    //   validations.classification = "Classification must be G or R";
    //   isValid = false;
    // }

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

  const handleChangeSelect = (e) => {
    e.preventDefault();
    const genre = e.target.value;

    if (values.genres.includes(genre)) {
      setValues({
        ...values,
        genres: values.genres.filter((g) => g !== genre),
      });
    } else if (values.genres.length < 3) {
      setValues({
        ...values,
        genres: [...values.genres, genre],
      });
    }
  };

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    setPosterFileToBase(file);
  };

  const setPosterFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setValues({ ...values, imageVertical: reader.result });
    };
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setBannerFileToBase(file);
  };

  const setBannerFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setValues({ ...values, imageHorizontal: reader.result });
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    console.log(values.genres);
  }, [values.genres]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }

    const newMovie = {
      ...values,
    };

    dispatch(createMovie(newMovie)).then(() => {
      swal({
        title: `The movie ${newMovie.title} has been created`,
        icon: "success",
        button: true,
      });
      setValues({
        title: "",
        imageVertical: "",
        voteAverage: "",
        imageHorizontal: "",
        overview: "",
        status: "",
        productionCompanies: "",
        runtime: "",
        originalLanguage: "",
        genres: [],
        directors: "",
        video: "",
        classification: "",
      });
    });
  };

  const {
    title,
    imageVertical,
    imageHorizontal,
    voteAverage,
    overview,
    status,
    productionCompanies,
    runtime,
    originalLanguage,
    genres,
    directors,
    video,
    classification,
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
          <h1>Add a New Movie</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="imageNM"
              id="imageNM"
              src={
                imageVertical
                  ? imageVertical
                  : "https://st4.depositphotos.com/3788621/24041/i/450/depositphotos_240418652-stock-photo-movie-time-concept-creative-template.jpg"
              }
              alt=""
            />
            <img
            className="imageNMB"
            id="imageNMB"
            src={
              imageHorizontal
                ? imageHorizontal
                : "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-film-and-television-film-festival-retro-wind-camera-film-poster-image_215411.jpg"
            }
            alt=""
          />
          </div>
          <div className="right">
            <form name="newMovie" onSubmit={handleSubmit}>
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
                <div className="inputNUImage">
                  <input
                    className="image-charge"
                    type="file"
                    placeholder="image url..."
                    name="imageVertical"
                    onChange={handlePosterChange}
                    onBlur={validateOne}
                  />
                </div>
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
                <div className="inputNUImage">
                  <input
                    className="image-charge"
                    type="file"
                    placeholder="image url..."
                    name="imageHorizontal"
                    onChange={handleBannerChange}
                    onBlur={validateOne}
                  />
                </div>
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
                <label>
                  Genres
                  <select onChange={(e) => handleChangeSelect(e)}>
                    {allGenres.map((genre) => (
                      <option
                        key={genre.id}
                        value={genre.name}
                        name={genre.name}
                        onBlur={validateOne}
                      >
                        {genre.name}
                      </option>
                    ))}
                  </select>
                </label>
                <input type="text" value={values.genres.join(", ")} readOnly />

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

              <button
                className="buttonNM"
                type="submit"
                value="SUBMIT RECIPE"
                onClick={() => console.log("hola")}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
