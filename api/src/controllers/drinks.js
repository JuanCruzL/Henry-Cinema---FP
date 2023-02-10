const axios = require("axios");
const { Drink } = require("../db");

const getDrinkDb = async () => {
  const allDrinkDb = await Drink.findAll();
  if (!allDrinkDb.length) {
    Drink.bulkCreate([
      {
        name: "2 Cool Ridge Waters",
        price: 7.8,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11234?width=171",
      },
      {
        name: "Small Drink",
        price: 7.8,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11322?width=171",
      },
      {
        name: "Regular Drink",
        price: 8.8,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11323?width=171",
      },
      {
        name: "Large Drink",
        price: 9.8,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11324?width=171",
      },
      {
        name: "Cool Ridge Water 600ml",
        price: 6.1,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11040?width=171",
      },
      {
        name: "Cool Ridge Sparkling Water 500ml",
        price: 6.55,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11042?width=171",
      },
      {
        name: "Lemon Lipton Ice Tea 500ml",
        price: 7.15,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11043?width=171",
      },
      {
        name: "Peach Lipton Ice Tea 500ml",
        price: 7.15,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11044?width=171",
      },
      {
        name: "Charlies Orange Juice 300ml",
        price: 6.25,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11045?width=171",
      },
      {
        name: "Charlies Apple Juice 300ml",
        price: 6.25,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11046?width=171",
      },
      {
        name: "Lemon Lime Gatorade 600ml",
        price: 7.15,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11047?width=171",
      },
      {
        name: "Blue Bolt Gatorade 600ml",
        price: 7.15,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11048?width=171",
      },
    ]);
  }
  const newAllDrinkDb = Drink.findAll();
  return newAllDrinkDb;
};

module.exports = { getDrinkDb };
