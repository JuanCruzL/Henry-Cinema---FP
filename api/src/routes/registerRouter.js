/* developer */

const { Router } = require("express");
const router = Router();

/* Controllers */

const { registerToDb } = require("../controllers/register");

/* routes */

router.post("/", async (req, res) => {
    const formPostUsers = req.body;
  
    try {
      res.status(201).send(await registerToDb(formPostUsers));
    } catch (error) {
      res.status(400).send(error);
    }
});

module.exports = router;
