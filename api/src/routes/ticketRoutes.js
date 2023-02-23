/* developer */

const { Router } = require("express");
const { Ticket } = require("../db");
const router = Router();

/* Controllers */

const { getTicketsDb } = require("../controllers/ticket");

/* routes */

router.get("/", async (req, res) => {
  let allTicketsDb = await getTicketsDb();
  try {
    console.log(allTicketsDb)
    res.status(200).send(allTicketsDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    let amount = 0
    let ticketinfo = req.body;
    ticketinfo.forEach(e => amount = amount + Number(e.price * e.quantity))
    const date = new Date();
    await Ticket.create({ reserved: true, ticket_contact:"contacto", movie_title: 3, date, amount: Math.floor(amount) });
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