require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getProfileById, putProfileById } = require("../controllers/profile");
const validateToken = require('../middlewares/validateToken');

router.get('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await getProfileById(id));
    } catch (error) {
        res.status(404).send(error);
    }
});

router.put("/:id", validateToken, async (req,res) => {
    const { id } = req.params;
    let formUpdate = req.body;
    try {
        res.status(200).send(await putProfileById(id, formUpdate));
    } catch (error) {
        res.status(401).send(error);
    }
    // let {
    //   email,
    //   userName,
    //   password
    // } = req.body;
  
    // password = bcrypt.hashSync(password, salt);
  
    // try {
    //   const user = await User.findByPk(id);
    //   console.log(user);
  
    //   if (user) {
    //     await user.update({
    //       email: email ? email : user.email,
    //       userName: userName ? userName : user.userName,
    //       password: password ? password : user.password,
    //     })
    //     res.status(201).send("Updated correctly");
    //   }
    // } catch (error) {
  
    //   res.status(500).send(error);
    // }
  });

module.exports = router;