
const { Seat } = require('../db');

const getSeatsDb = async () => {

    const allSeatsDb = await Seat.findAll()
    return allSeatsDb;
}

module.exports = { getSeatsDb };