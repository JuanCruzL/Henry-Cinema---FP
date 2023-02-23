/* developer */

const { Router } = require("express");
const { Review } = require("../db");
const router = Router();

/* Controllers */

const { getReviewsDb, postReview, postLike, postDislike, getLikes, getDislikes, deleteLike, deleteDislike } = require("../controllers/reviews");

/* routes */

router.get("/", async (req, res) => {
  let allReviewsDb = await getReviewsDb();
  try {
    res.status(200).send(allReviewsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", postReview);

router.post("/likes", getLikes)

router.post("/unlike", deleteLike)

router.post("/postlike", postLike)

router.post("/dislikes", getDislikes)

router.post("/deletedislike", deleteDislike)

router.post("/postdislike", postDislike)


router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Review.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("ELIMINATED");
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;