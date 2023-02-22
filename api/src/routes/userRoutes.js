/* developer */

const { Router } = require("express");
const { User } = require("../db");
const router = Router();
const validateToken = require('../middlewares/validateToken');

/* Controllers */

const { getUsersDb, postUsersDb } = require("../controllers/users");

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

router.get("/:id", async (req,res) => {
  try {
    let { id } = req.params
   let user = await User.findByPk(id)
   res.status(200).send(user)
  }catch(error) {
    res.send(404).send(error)
    console.log(error)
  }
})

router.post("/", async (req, res) => {
  const formPostUsers = req.body;

  try {
    res.status(201).send(await postUsersDb(formPostUsers));
  } catch (error) {
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


module.exports = router;