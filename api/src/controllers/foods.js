const axios = require('axios');
const { Food } = require('../db');

const getFoodDb= async () => {

    const allFoodDb = await Food.findAll()
    return allFoodDb;
}

module.exports = {getFoodDb};