const { Auditorium } = require("../db");

const getAuditoriumsDb = async () => {
  const allAuditoriums = await Auditorium.findAll();
  if (!allAuditoriums) {
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
  return allAuditoriums;
};

module.exports = { getAuditoriumsDb };
