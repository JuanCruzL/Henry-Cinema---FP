require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { getProfileById, putProfileById } = require("../controllers/profile");
const validateToken = require("../middlewares/validateToken");
const { User } = require("../db");
const { cloudinary } = require("../utils/cloudinary");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);

router.get("/:id", validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await getProfileById(id));
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put("/:id/account", async (req, res) => {
  const { id } = req.params;

  const userFound = await User.findByPk(id);
  if (userFound.activated === true) {
    userFound.activated = false;
  } else if (userFound.activated === false) {
    userFound.activated = true;
  }
  await userFound.save();
  res.status(200).send("success");
});
router.put("/:id/password", async (req, res) => {
  const { id } = req.params;
  let { password } = req.body;
  password = bcrypt.hashSync(password, salt);

  const userFound = await User.findByPk(id);
  userFound.password = password;
  await userFound.save();
  res.status(200).send("success");
});

router.put("/:id/name", async (req, res) => {
  const { id } = req.params;
  const { userName } = req.body;

  const userFound = await User.findByPk(id);
  userFound.userName = userName;
  await userFound.save();
  res.status(200).send("success");
});

router.put("/:id/image", async (req, res) => {
  const { id } = req.params;
  const { file } = req.body;
  try {
    const userFound = await User.findByPk(id);
    if (!userFound) {
      return res.status(400).send("The user doesn't exist");
    }
    if (userFound.image) {
      // console.log(file);
      const imgId = userFound.image_id;
      const response = await cloudinary.uploader.destroy(imgId);
      // console.log(imgId);
      // console.log(response);
      const newImage = await cloudinary.uploader.upload(file, {
        upload_preset: "preset_hcinema",
      });
      console.log(newImage);
      await userFound.update({
        image: newImage.secure_url,
        image_id: newImage.public_id,
      });
      return res.status(200).send("success");
    }
    console.log(file);
    const image = await cloudinary.uploader.upload(file, {
      upload_preset: "preset_hcinema",
    });
    await userFound.update({
      image: image.secure_url,
      image_id: image.public_id,
    });

    return res.status(200).send("success");
  } catch (error) {
    throw { message: error };
  }
});

router.put("/:id", validateToken, async (req, res) => {
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
