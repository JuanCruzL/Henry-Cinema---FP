require('dotenv').config();
const { Router } = require('express');
const { verifyLogin }  = require("../controllers/login");
const router = Router();

router.post("/", async (req, res) => {
    const loginForm = req.body;
    try {
        res.status(200).send(await verifyLogin(loginForm));
    } catch (error) {
        return res.status(400).send(error);
    }

});

module.exports = router;
