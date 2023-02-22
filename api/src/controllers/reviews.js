const { Review, User, Movie, Like, Dislike } = require("../db");

const getReviewsDb = async () => {
  const allReviewsDb = await Review.findAll();
  return allReviewsDb;
};

const postReview = async (req, res) => {
  const { review, userId, movieId } = req.body;

  try {
    // Crear el comentario
    const movieReview = await Review.create({
      review,
    });
    const userbyid = await User.findByPk(userId);
    const moviebyid = await Movie.findByPk(movieId);

    await moviebyid.addReview(movieReview);
    await userbyid.addReview(movieReview);

    return res.status(200).send(movieReview);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const postLike = async(req,res) => {
  const { userId, movieId, type } = req.body;
  // console.log("userId: ",userId, "movieID: ", movieId )

  try {
  const like = await Like.create({userId: userId , movieId: movieId})
  console.log(like)
  const userbyid = await User.findByPk(userId);
  const moviebyid = await Movie.findByPk(movieId);
    if(type === "like"){
      await moviebyid.addLike(like)
      await userbyid.addLike(like)
      // let foundlike = await Like.findByPk(like.id)
      return res.status(200).send(like)
    }else if (type === "dislike"){

    }else if(type === "dislikeToLike" ) {

    }else if(type === "likeToDislike"){

    }

  }catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
}

const getLikes = async(req,res) => {
  const {userId, movieId} =req.body
  try{
    if(movieId) {
      let likes = await Like.find(movieId)
      console.log(likes)
    }
  }catch(error){
    res.status(404).send(error)
    console.log(error)
  }
}

const getDislikes = async(req,res) => {
  const {userId, movieId} =req.body
  try{
    if(movieId) {
      let dislikes = await Dislike.find(movieId)
      console.log(dislikes)
    }
  }catch(error){
    res.status(404).send(error)
    console.log(error)
  }
}

module.exports = { getReviewsDb, postReview, postLike, getLikes, getDislikes };
