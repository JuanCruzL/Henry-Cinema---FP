const axios = require('axios');
const { Drink } = require('../db');

const getDrinkDb= async () => {

    const allDrinkDb = await Drink.findAll()
    return allDrinkDb;
}

module.exports = {getDrinkDb};