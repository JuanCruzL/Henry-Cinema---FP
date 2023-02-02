
const { Auditorium } = require('../db');

const getAuditoriumsDb = async () => {

    const allAuditoriumsDb = await Auditorium.findAll()
    return allAuditoriumsDb;
}

module.exports = {getAuditoriumsDb};