const { Seat } = require("../db");

const getSeatsDb = async () => {
  const allSeatsDb = await Seat.findAll();

  if (!allSeatsDb) {
    for (i = 6; i < 25; i++) {
      const num = 7;
      Seat.Create({
        row: "A",
        number: num,
        reserved: false,
        payed: false,
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
      Seat.Create({
        row: "B",
        number: num,
        reserved: false,
        payed: false,        
      });
      num++;
    }
    for (i = 0; i < 31; i++) {
      const num = 1;
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
    return allSeatsDb;
  }
};

module.exports = { getSeatsDb };
