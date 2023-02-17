import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Nav from "../../Components/Nav/Nav";
import Footer from "../footer/footer";

function ShowScreenings() {
  const [showInput, setShowInput] = useState({});
  const [numberOfEntries, setNumberOfEntries] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch]);

  const movie = useSelector((state) => state.movieId);
  console.log(movie);

  const handleCardClick = (screeningId) => {
    setSelectedId(screeningId);
    setShowInput((prevState) => ({ ...prevState, [screeningId]: true }));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          {movie.Screenings.map((screening) => (
            <div key={screening.id} className="cardfuncion">
              <img key={screening.id} src={movie.imageVertical} />
              <div
                className="cardinfo"
                onClick={() => handleCardClick(screening.id)}
              >
                <h1>Room: {screening.roomLetter} </h1>
                <h1>Title: {screening.title}</h1>
                <h1>Date: {screening.date}</h1>
                <h1>Start Time: {screening.startTime}</h1>
                <h1>Language: {screening.language}</h1>
                <h1>Definition: {screening.definition}</h1>
              </div>
              {selectedId === screening.id && (
                <div>
                  <label htmlFor={`input-${screening.id}`}>
                    How many tickets do you want?
                  </label>
                  <input
                    id={`input-${screening.id}`}
                    type="number"
                    onChange={(e) => setNumberOfEntries(e.target.value)}
                  />
                  <Link to={`/seating/${screening.id}`}>
                    <button>select seats</button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ShowScreenings;
