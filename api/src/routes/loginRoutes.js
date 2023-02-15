require('dotenv').config();
const { Router } = require('express');
const { verifyLogin, verifyGoogleLogin }  = require("../controllers/login");
const router = Router();

router.post("/", async (req, res) => {
    const loginForm = req.body;
    try {
        res.status(201).send(await verifyLogin(loginForm));
    } catch (error) {
        return res.status(400).send(error);
    }

});

router.post("/google", async (req, res) => {
    const googleData = req.body;
    try {
        res.status(201).send(await verifyGoogleLogin(googleData));
    } catch (error) {
        return res.status(400).send(error);

    }
});


module.exports = router;