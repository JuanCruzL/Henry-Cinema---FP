
const { Review, User, Movie } = require('../db');

const getReviewsDb = async () => {

    const allReviewsDb = await Review.findAll()
    return allReviewsDb;
}

const postReview = async() => {
    const {
        review,
        userId,
        movieId
      } = req.body; 
    
      try {   
        // Crear el comentario
        const movieReview = await Review.create({
          review,
        });
        const userbyid = await User.findByPk(userId)
        const moviebyid = await Movie.findByPk(movieId)

        await moviebyid.addReview(movieReview)
        await userbyid.addReview(movieReview)

        return res.status(200).send(movieReview)

}catch(error) {
    res.status(400).send(error)
    console.log(error)
}
}

module.exports = {getReviewsDb, postReview};