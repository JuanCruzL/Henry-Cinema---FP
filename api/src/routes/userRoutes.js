/* developer */

const { Router } = require("express");
const { User } = require("../db");
const router = Router();

/* Controllers */

const { getUsersDb } = require("../controllers/users");

/* routes */

router.get("/", async (req, res) => {
  let allUsersDb = await getUsersDb();
  try {
    res.status(200).send(allUsersDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    await User.create({ username, email, password });
    res.status(200).send("USER CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
    console.log("USER ELIMINATED");
  } catch (error) {
    res.status(500).send(error);
  }
});

// falta ruta PUT

module.exports = router;