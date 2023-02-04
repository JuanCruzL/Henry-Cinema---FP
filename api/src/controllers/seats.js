const { Seat } = require("../db");

const getSeatsDb = async () => {

  const allSeatsDb = await Seat.findAll();
  
  if (!allSeatsDb.length) {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"];
    const numOfSeats = [19, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 19];

    for (let i = 0; i < rows.length; i++) {
      let num = 1;
      if (rows[i] === "A" || rows[i] === "Q") {
        num = 7;
      }
      for (let j = 0; j < numOfSeats[i]; j++) {
        if (rows[i] === "A" || rows[i] === "Q") {
          if (num > 25) {
            break;
          }
        }
        await Seat.create({
          row: rows[i],
          number: num,
          reserved: false,
          payed: false,
        });
        num++;
      }
    }

    const newAllSeatsDb = await Seat.findAll();
    return newAllSeatsDb;
  }

};

module.exports = { getSeatsDb };
