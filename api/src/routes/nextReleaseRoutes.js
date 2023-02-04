const { Router } = require("express");
const router = Router();
const { getNextReleases } = require("../controllers/nextReleases");

router.get("/", async (req, res) => {
  try {
    const data = await getNextReleases();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
