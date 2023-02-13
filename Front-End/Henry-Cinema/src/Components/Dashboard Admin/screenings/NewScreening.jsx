import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getasientos } from "../../../redux/actions";

const RoomInputs = () => {
  const dispatch = useDispatch();
  const asientos = useSelector((state) => state.seats);
  const roomLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [roomLetter, setRoomLetter] = useState("A");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [definition, setDefinition] = useState("IMAX");
  const [language, setLanguage] = useState("Sub");
  const [seats, setSeats] = useState([]);
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    dispatch(getasientos());
    setSeats(asientos);
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
    });
  };

  console.log(reservation);

  const getNext5Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 5; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString("en-US", { weekday: "long" }));
    }

    return days;
  };

  const next5Days = getNext5Days();

  return (
    <div>
      <label>Room</label>
      <select
        value={roomLetter}
        onChange={(e) => setRoomLetter(e.target.value)}
      >
        {roomLetters.map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>
      <br />
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
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        Definition:
        <br />
        <select
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        >
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
  );
};

export default RoomInputs;
