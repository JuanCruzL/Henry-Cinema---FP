import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Nav from "../../Components/Nav/Nav";
import Footer from "../footer/footer";
import "./ShowScreeming.css";

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
          <div className="screening-container">
            <div>
              <img
                className="poster"
                key={movie.Screenings.id}
                src={movie.imageVertical}
              />
            </div>
            <div className="posters-container">
              {movie.Screenings?.map((screening) => {
                console.log("screening dentro del map", screening);
                return (
                  <div key={screening.id}>
                    <div className="poster-container">
                      <div
                        className="cardinfo"
                        onClick={() => handleCardClick(screening.id)}
                      >
                        <div className="cardinfo-1">
                          <h1>Title: {screening.title}</h1>

                          <div className="room">
                            <h1>Definition: {screening.definition}</h1>
                          </div>
                          <div className="room">
                            <h1>Room: {screening.roomLetter}</h1>
                          </div>
                        </div>

                        <div className="cardinfo-2">
                          <h1>Date: {screening.date}</h1>
                          <div className="room">
                            <h1>Start Time: {screening.startTime}</h1>
                          </div>

                          <h1>Language: {screening.language}</h1>
                        </div>
                      </div>
                    </div>
                    {/* <button
                        className="buy"
                        id="bottone1"
                        onClick={() => handleCardClick(screening.id)}
                      >
                        <strong>SEATS</strong>
                      </button> */}

                    {selectedId === screening.id && (
                      <div className="ticketsseats">
                        <label
                          className="tickets"
                          htmlFor={`input-${screening.id}`}
                        >
                          Select tickets
                        </label>
                        <input
                          className="number-1"
                          id={`input-${screening.id}`}
                          placeholder="0"
                          type="number"
                          value={numberOfEntries}
                          onChange={(e) => setNumberOfEntries(e.target.value)}
                        />
                        <Link
                          className="seat-selector"
                          to={`/seating/${screening.id}/${numberOfEntries}`}
                        >
                          <button>select seats</button>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ShowScreenings;
