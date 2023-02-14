import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getasientos } from "../../../redux/actions"
import NavBarDash from '../NavbarDash/NavBarDash';
import SideBarDash from '../SideBarDash/SideBarDash';
import "./newscreenings.scss";


const RoomInputs = () => {
  const dispatch = useDispatch();
  const asientos = useSelector(state => state.seats);
  const roomLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const [roomLetter, setRoomLetter] = useState('A');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [definition, setDefinition] = useState('IMAX');
  const [language, setLanguage] = useState('Sub');
  const [seats, setSeats] = useState([])
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    dispatch(getasientos());
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
      seats
    });
  };

  console.log(reservation)

  const getNext5Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 5; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString('en-US', { weekday: 'long' }));
    }

    return days;
  };

  const next5Days = getNext5Days();



  return (
    <div className='NewScreen'>
      <SideBarDash />
      <div className='ContainerNewScreen'>
        <NavBarDash />
        <div className='InfoNewScreen'>
          <div className="top">
            <h1>Add New Screenings</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                className="imageNF"
                src="https://previews.123rf.com/images/foontntd/foontntd1705/foontntd170500070/77824901-menu-food-drawing-graphic-design-illustrate-objects-template.jpg"
                alt=""
              />
            </div>
            <div className="right">

              <label >Room</label>
              <select value={roomLetter} onChange={(e) => setRoomLetter(e.target.value)}>
                {roomLetters.map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
               
              <label>
                Date:
                <select value={date} onChange={(e) => setDate(e.target.value)}>
                  {[...Array(5)].map((_, i) => {
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
              </label>
               
              <label>
                Start Time:
                 
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </label>
               
              <label>
                End Time:
                 
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              </label>
               
              <label>
                Definition:
                 
                <select value={definition} onChange={(e) => setDefinition(e.target.value)}>
                  <option value="IMAX">IMAX</option>
                  <option value="3D">3D</option>
                  <option value="2D">2D</option>
                </select>
              </label>
               
              <label>
                Language:
                 
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="Sub">Sub</option>
                  <option value="Dub">Dub</option>
                  <option value="Origin">Origin</option>
                </select>
              </label>
               
              <button onClick={handleSave}>Guardar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInputs;