// Requires
const { Router } = require("express");
const { Combo } = require("../db");
const router = Router();

// Controllers
const { getComboDb } = require("../controllers/combos.js");

router.get("/", async (req, res) => {
    try {
        res.status(200).send(await getComboDb());
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async(req, res) => {
    try {
        let { name, description, price, image } = req.body;
        await Combo.create({
            name,
            description,
            price,
            image,
        });
        res.status(200).send("CREATED");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.delete("/", async (req, res) => {
    try {
        let { id } = req.params;
        await Combo.destroy({
            where: {
                id,
            },
        });
        res.status(204).send("DELETED");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;



