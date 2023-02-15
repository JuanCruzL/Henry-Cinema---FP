import React, { useState } from "react";
import { createMovie, getGenres } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./newmovie.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
import swal from "sweetalert";
import { useEffect } from "react";

export const NewMovie = () => {
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

<<<<<<< HEAD
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   /* console.log(e.target.value) */
  //   setValues({
  //     ...values,
  //     genres : [...values.genres,e.target.value]
  //   })
  //   console.log(values.genres)
  // };

  const handleChange = (e) => {
=======
  const handleChangeSelect = (e) => {
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
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
<<<<<<< HEAD
=======

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

  };
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08

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

    dispatch(createMovie(newMovie)).then(() =>
      swal({
        title: `The movie ${newMovie.title} has been created`,
        icon: "success",
        button: true,
      })
    );
    console.log(newMovie);
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
                <input
                  className="inputNM"
                  type="text"
                  placeholder="image url..."
                  name="imageVertical"
                  value={imageVertical}
                  onChange={handleChange}
                  onBlur={validateOne}
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
                <input
                  className="inputNM"
                  type="text"
                  placeholder="image url..."
                  name="imageHorizontal"
                  value={imageHorizontal}
                  onChange={handleChange}
                  onBlur={validateOne}
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
<<<<<<< HEAD
=======

>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
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
<<<<<<< HEAD
                <label>Genres</label>
                <input value={values.genres.join(", ")} readOnly />
                <select
                  className="selectorGenre"
                  onChange={(e) => handleChange(e)}
                >
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
=======
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

>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
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
<<<<<<< HEAD
=======

>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
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
<<<<<<< HEAD
              <button className="buttonNM" type="submit" value="SUBMIT RECIPE">
                <OutboxRoundedIcon className="iconSubmit" />
=======

              <button
                className="buttonNM"
                type="submit"
                value="SUBMIT RECIPE"
                onClick={() => console.log("hola")}
              >
                <OutboxRoundedIcon />
>>>>>>> 1065860e4ba60ccd75a75f48010e2780e600ef08
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
