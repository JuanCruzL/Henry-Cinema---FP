/* developer */

const { Router } = require("express");
const { Screening, Movie } = require("../db");
const router = Router();

/* Controllers */

const {
  getScreeningsDb,
  addScreeningToMovie,
  getScreeningById,
  modifySeatsById,
} = require("../controllers/screenings");

/* routes */

router.get("/", async (req, res) => {
  let allScreeningsDb = await getScreeningsDb();
  try {
    res.status(200).send(allScreeningsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/:id", getScreeningById);

router.post("/", addScreeningToMovie);

router.put("/:id/seatIds", modifySeatsById);

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Screening.destroy({
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
