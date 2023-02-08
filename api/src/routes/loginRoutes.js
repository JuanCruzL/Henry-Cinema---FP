require('dotenv').config();
const { Router } = require('express');
const { verifyLogin }  = require("../controllers/login");
const router = Router();

router.post("/", async (req, res) => {
    const loginForm = req.body;
    try {
        const login = await verifyLogin(loginForm)
        res.header('authorization', login.accessToken);
        console.log(req.header('authorization'));
        res.status(201).send(login);
    } catch (error) {
        return res.status(400).send(error);
    }

});

module.exports = router;
