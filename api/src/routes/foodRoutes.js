/* developer */
const { Router } = require("express");
const { Food } = require("../db");
const router = Router();

/* Controllers */
const { getFoodDb } = require("../controllers/foods.js");
const { cloudinary } = require("../utils/cloudinary");

/* routes */

router.get("/", async (req, res) => {
  let allFoodDb = await getFoodDb();
  try {
    res.status(200).send(allFoodDb);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  let { name, price, image } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, {
      upload_preset: 'preset_hcinema',
    });
     await Food.create({
      name,
      price,
      image: result.secure_url,
      image_id: result.public_id,
    });
    res.status(200).send('CREATED');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Food.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204)
    console.log("eliminado")
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
