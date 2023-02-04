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

  /* if (!allSeatsDb.length) {
    let num = 7;
    for (i = 6; i < 25; i++) {
      await Seat.create({
        row: "A",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    };

     num = 1;
    for (i = 0; i < 31; i++) {
      await Seat.create({
        row: "B",
        number: num,
        reserved: false,
        payed: false,        
      });
      num++;
    };

    
      num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "C",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "D",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "E",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "F",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "G",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "H",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };


    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "I",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "J",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "K",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "L",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "M",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "N",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "O",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

    num = 1;
    for (i = 0; i < 31; i++) {

      await Seat.create({
        row: "P",
        number: num,
        reserved: false,
        payed: false,
      });
      num++; 
    };

     num = 7;
    for (i = 6; i < 25; i++) {
      await Seat.create({
        row: "Q",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    };
   
    const newAllSeatsDb = await Seat.findAll();
    return newAllSeatsDb;
  } */
};

module.exports = { getSeatsDb };
