const { Seat } = require("../db");

const getSeatsDb = async () => {
  const allSeatsDb = await Seat.findAll();
  if (!allSeatsDb.length) {
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
    let num1 = 1;
    for (i = 0; i < 31; i++) {
      await Seat.create({
        row: "B",
        number: num1,
        reserved: false,
        payed: false,        
      });
      num1++;
    };
    const num2 = 1;
    for (i = 0; i < 31; i++) {

      Seat.Create({
        row: "C",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "D",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "E",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "F",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "G",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "H",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "I",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "J",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "K",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "L",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "M",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "N",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "O",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "P",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }    
    for (i = 6; i < 25; i++) {
      const num = 7;
      Seat.Create({
        row: "Q",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    const newAllSeatsDb = await Seat.findAll();
    return newAllSeatsDb;
  }
};

module.exports = { getSeatsDb };
