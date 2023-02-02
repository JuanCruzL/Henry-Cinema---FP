
const { Review } = require('../db');

const getReviewsDb = async () => {

    const allReviewsDb = await Review.findAll()
    return allReviewsDb;
}

module.exports = {getReviewsDb};