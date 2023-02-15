import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { getasientos, getMovies} from "../../../redux/actions"


const RoomInputs = () => {
  const dispatch = useDispatch();
  const asientos = useSelector(state => state.seats);
  const movies = useSelector(state => state.movies);
  const [images, setImages] = useState([]);
  const roomLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const [roomLetter, setRoomLetter] = useState('A');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [definition, setDefinition] = useState('IMAX');
  const [language, setLanguage] = useState('Sub');
  const [seats, setSeats]= useState([]);
  const [id, setId]= useState('');
  const [reservation, setReservation] = useState({});
  
  useEffect(() => {
    dispatch(getasientos());
    dispatch(getMovies());
    setSeats(asientos)
  }, [reservation]);

  const handleSave = () => {
    setReservation({
      roomLetter,
      date,
      startTime,
      endTime,
      definition,
      language,
      seats,
      id
      
    });
  };

console.log(reservation)


  const getNext30Days = () => {
    const today = new Date();
    const days = [];
  
    for (let i = 0; i < 30; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString('en-US', { weekday: 'long' }));
    }
  
    return days;
  };
  

  const next30Days = getNext30Days() ;

  

  return (
    <div>
      <h1>Crear funcion</h1>
      
      <div>
      <label >Movie</label>
      <br />
      <select value={id} onChange={(e) => setId(e.target.value)}>
      {movies.map((movie) => (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
      <br />
      <label >Room</label>
      <br />
      <select value={roomLetter} onChange={(e) => setRoomLetter(e.target.value)}>
        {roomLetters.map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>
      <br />
      <label>Date:</label>
      <br />
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          {[...Array(30)].map((_, i) => {
            const nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + i);
            const dateString = nextDay.toISOString().split("T")[0];
            return (
              <option key={dateString} value={dateString}>
                {dateString}
              </option>
            );
          })}
        </select>
      
      <br />
      <label>
        Start Time:
        <br />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </label>
      <br />
      <label>
      End Time:
      <br />
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>
      <br />
      <label>
      Definition:
      <br />
      <select value={definition} onChange={(e) => setDefinition(e.target.value)}>
      <option value="IMAX">IMAX</option>
      <option value="3D">3D</option>
      <option value="2D">2D</option>
      </select>
      </label>
      <br />
      <label>
      Language:
      <br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="Sub">Sub</option>
      <option value="Dub">Dub</option>
      <option value="Origin">Origin</option>
      </select>
      </label>
      <br />
      <button onClick={handleSave}>Guardar</button>
</div>
<div>
       <h1>ID: {reservation.id}</h1>
       <h1>Room: {reservation.roomLetter}</h1>
       <h1>Date: {reservation.date}</h1>
       <h1>Start: {reservation.startTime}</h1>
       <h1>End: {reservation.endTime}</h1>
       <h1>Definition: {reservation.definition}</h1>
       <h1>Language: {reservation.language}</h1>
       <h1>Seats: {reservation.seats ? reservation.seats.length : 0}</h1>
</div>
</div>
);
};

export default RoomInputs;