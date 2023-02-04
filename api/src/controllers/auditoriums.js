const { Auditorium } = require("../db");

const getAuditoriumsDb = async () => {
  const allAuditoriums = await Auditorium.findAll();

  if (!allAuditoriums.length) {
    Auditorium.bulkCreate([
      {
        name: "A",
      },
      {
        name: "B",
      },
      {
        name: "C",
      },
      {
        name: "D",
      },
      {
        name: "E",
      },
    ]);
  }
  const newAllAuditoriums = await Auditorium.findAll();
  return newAllAuditoriums;
};

module.exports = { getAuditoriumsDb };
