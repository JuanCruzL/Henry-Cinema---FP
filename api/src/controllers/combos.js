const { Combo } = require("../db");

const getComboDb = async () => {
  const allComboDb = await Combo.findAll();

  if (!allComboDb.length) {
    Combo.bulkCreate([
      {
        name: "Avatar 2 Cup Large Combo",
        description:
          "Large Popcorn and and Regular Drink Flavours Promo Cup 36oz",
        price: 23.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11737?width=171",
      },
      {
        name: "Avatar 2 Cup Regular Combo",
        description:
          "Regular Popcorn and and Regular Drink Flavours Promo Cup 36oz",
        price: 22.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11736?width=171",
      },
      {
        name: "Avatar 2 Cup Small Combo",
        description: "Small Popcorn and Regular Drink Flavours Promo Cup 36oz",
        price: 21.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11735?width=171",
      },
      {
        name: "Avatar 2 Cup",
        description: "2 Regular Drink Flavours Promo Cup 36oz",
        price: 16.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11734?width=171",
      },
      {
        name: "Summer Treat Combo",
        description:
          "Large Popcorn, Large 2 Drink Flavour and Choc Top Selection",
        price: 29.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11738?width=171",
      },
      {
        name: "Complete Treat Combo",
        description:
          "Regular Popcorn, Small Drink Flavour, Mountain Dew and Choc Top Selection",
        price: 23.0,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11139?width=171",
      },
      {
        name: "Small Pizza Combo",
        description: "Small Pizza, Small Drink and Garlic Bread",
        price: 21.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11136?width=171",
      },
      {
        name: "Regular Pizza Combo",
        description: "Regular Pizza, Regular Drinks and Garlic Bread",
        price: 22.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11137?width=171",
      },
      {
        name: "Large Pizza Combo",
        description: "Large Pizza, Large Drink and Garlic Bread",
        price: 23.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11138?width=171",
      },
    ]);
  }
  const newAllComboDb = await Combo.findAll();
  return newAllComboDb;
};

module.exports = { getComboDb };
