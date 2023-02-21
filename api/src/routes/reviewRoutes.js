/* developer */

const { Router } = require("express");
const { Review } = require("../db");
const router = Router();

/* Controllers */

const { getReviewsDb, postReview } = require("../controllers/reviews");

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