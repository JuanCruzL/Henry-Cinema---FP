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
  console.log("type: ",type )

  try {
    const userbyid = await User.findByPk(userId);
    const moviebyid = await Movie.findByPk(movieId);
    if(type === "uplike"){

      const like = await Like.create({userId: userId , movieId: movieId})
      await moviebyid.addLike(like)
      await userbyid.addLike(like)
      let foundlike = await Like.findByPk(like.id)
      return res.status(200).send(foundlike)

    }else if(type === "downlike"){
      const like = await Like.findAll()
      const likefound = like.find(e => e.movieId === movieId)
      await Like.destroy({where:{
        id: likefound.id,
        userId: userId
      }})
      res.status(200).send(likefound)
    }else if (type === "dislike"){

      const dislike = await Dislike.create({userId: userId , movieId: movieId})
      await moviebyid.addDislike(dislike)
      await userbyid.addDislike(dislike)
      let foundislike = await Dislike.findByPk(Dislike.id)
      return res.status(200).send(foundislike)
    }else if(type === "dislikeToLike" ) {

    }else if(type === "likeToDislike") {

    }

  }catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
}

const getLikes = async(req,res) => {
  const {movieId} =req.body
  try{
    if(movieId) {
      let likes = await Like.findAll()
      let filteredlikes = likes.filter(e => e.movieId === movieId)
      res.status(200).send(filteredlikes)
    }
  }catch(error){
    res.status(404).send(error)
    console.log(error)
  }
}

const getDislikes = async(req,res) => {
  const {movieId} =req.body
  try{
    if(movieId) {
      let dislikes = await Dislike.findAll()
      let filteredDislikes = dislikes.filter(e => e.movieId === movieId)
      res.status(200).send()
    }
  }catch(error){
    res.status(404).send(error)
    console.log(error)
  }
}

module.exports = { getReviewsDb, postReview, postLike, getLikes, getDislikes };
