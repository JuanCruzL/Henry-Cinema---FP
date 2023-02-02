
const { Screening } = require('../db');

const getScreeningsDb = async () => {

    const allScreeningsDb = await Screening.findAll()
    return allScreeningsDb;
}

module.exports = {getScreeningsDb};