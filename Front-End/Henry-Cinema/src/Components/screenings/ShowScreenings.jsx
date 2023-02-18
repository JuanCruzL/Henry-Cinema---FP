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
            {movie.Screenings?.map((screening) => (
              <div key={screening.id}>
                <div className="poster-container">
                  <img
                    className="poster"
                    key={screening.id}
                    src={movie.imageVertical}
                  />

                  <div className="cardinfo">
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

                  <button
                    className="buy"
                    id="bottone1"
                    onClick={() => handleCardClick(screening.id)}
                  >
                    SEATS
                  </button>
                </div>

                {selectedId === screening.id && (
                  <div className="ticketsseats">
                    <label
                      className="tickets"
                      htmlFor={`input-${screening.id}`}
                    >
                      How many tickets do you want?
                    </label>
                    <input
                      id={`input-${screening.id}`}
                      type="number"
                      onChange={(e) => setNumberOfEntries(e.target.value)}
                    />
                    <Link to={`/seating/${screening.id}/${numberOfEntries}`}>
                      <button>select seats</button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ShowScreenings;
