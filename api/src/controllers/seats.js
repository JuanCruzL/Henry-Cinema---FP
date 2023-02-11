const { Seat } = require("../db");

// const getSeatsDb = async () => {
//   const allSeatsDb = await Seat.findAll();

//   if (!allSeatsDb.length) {
//     const rows = [
//       "A",
//       "B",
//       "C",
//       "D",
//       "E",
//       "F",
//       "G",
//       "H",
//       "I",
//       "J",
//       "K",
//       "L",
//       "M",
//       "N",
//       "O",
//       "P",
//       "Q",
//     ];
//     const numOfSeats = [
//       19, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 19,
//     ];

//     for (let i = 0; i < rows.length; i++) {
//       let num = 1;
//       if (rows[i] === "A" || rows[i] === "Q") {
//         num = 7;
//       }
//       for (let j = 0; j < numOfSeats[i]; j++) {
//         if (rows[i] === "A" || rows[i] === "Q") {
//           if (num > 25) {
//             break;
//           }
//         }
//         await Seat.create({
//           row: rows[i],
//           number: num,
//           reserved: false,
//           payed: false,
//         });
//         num++;
//       }
//     }

//     const newAllSeatsDb = await Seat.findAll();
//     return newAllSeatsDb;
//   }
// };
const getSeatsDb = async () => {
  const existingSeats = await Seat.findAll();
  if (existingSeats[399]) {
    return existingSeats;
  }

  const seatsToCreate = [];
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numOfSeats = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40];

  for (let i = 0; i < rows.length; i++) {
    for (let j = 1; j <= numOfSeats[i]; j++) {
      seatsToCreate.push({
        row: rows[i],
        number: j,
        reserved: false,
        payed: false,
      });
    }
  }

  await Seat.bulkCreate(seatsToCreate, { ignoreDuplicates: true });
  return await Seat.findAll();
};

module.exports = { getSeatsDb };
