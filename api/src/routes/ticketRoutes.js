/* developer */

const { Router } = require("express");
const { Ticket } = require("../db");
const router = Router();

/* Controllers */

const { getTicketsDb } = require("../controllers/tickets");

/* routes */

router.get("/", async (req, res) => {
  let allTicketsDb = await getTicketsDb();
  try {
    res.status(200).send(allTicketsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let { reserved, ticket_contact, movie_title } = req.body;
    await Ticket.create({ reserved, ticket_contact, movie_title });
    res.status(200).send("CREATED");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Ticket.destroy({
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