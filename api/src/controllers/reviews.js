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
  try {
    const userbyid = await User.findByPk(userId);
    const moviebyid = await Movie.findByPk(movieId);
    if(type === "uplike"){

      const like = await Like.create({userId: userId , movieId: movieId})
      await moviebyid.addLike(like)
      await userbyid.addLike(like)
      let foundlike = await Like.findByPk(like.id)
      return res.status(200).send(foundlike)
    }
  }catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
}

const postDislike = async(req,res) => {
  const { userId, movieId} = req.body;
  try {
    const userbyid = await User.findByPk(userId);
    const moviebyid = await Movie.findByPk(movieId);
    const dislike = await Dislike.create({userId: userId , movieId: movieId})
    await moviebyid.addDislike(dislike)
    await userbyid.addDislike(dislike)
    let foundislike = await Dislike.findByPk(dislike.id)
    console.log(foundislike)
    return res.status(200).send(foundislike)
  }catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
}

const deleteLike = async(req,res) => {
  try{

    const { userId, movieId} = req.body;
    const like = await Like.findAll({where: {
      movieId: movieId,
      userId: userId
    }})
    let user = await User.findByPk(userId)
    let movie = await Movie.findByPk(movieId)
  
    await user.removeLikes()
    await movie.removeLikes()
  
    await Like.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    })
    let likes = await Like.findAll()
    let filteredlikes = likes.filter(e => e.movieId === movieId)
  
    res.status(200).send(filteredlikes)
  }catch(error) {
    res.status(404).send(error)
  }
}

const deleteDislike = async(req,res) => {
  const { userId, movieId} = req.body;
  try{
    const dislike = await Dislike.findAll({where: {
      movieId: movieId,
      userId: userId
    }})
    console.log(dislike)
    let user = await User.findByPk(userId)
    let movie = await Movie.findByPk(movieId)
  
    await user.removeDislikes()
    await movie.removeDislikes()
  
    await Dislike.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    })
    let dislikes = await Dislike.findAll({
      where: {
        movieId: movieId,
    }
    })
    let filtereddislikes = dislikes.filter(e => e.movieId === movieId)
    
    res.status(200).send(filtereddislikes)
  }catch(error) {
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
      res.status(200).send(filteredDislikes)
    }
  }catch(error){
    res.status(404).send(error)
    console.log(error)
  }
}

module.exports = { getReviewsDb, postReview, postLike, postDislike, getLikes, getDislikes, deleteLike, deleteDislike };
