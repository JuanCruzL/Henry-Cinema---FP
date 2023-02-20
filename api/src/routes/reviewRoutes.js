/* developer */

const { Router } = require("express");
const { Review } = require("../db");
const router = Router();

/* Controllers */

const { getReviewsDb } = require("../controllers/reviews");

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

router.post("/", async (req, res) => {
  try {
    let { score, commentary } = req.body;
    const date = new Date();
    await Review.create({ score, commentary, date });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

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