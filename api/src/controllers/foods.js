const axios = require("axios");
const { Food } = require("../db");

const getFoodDb = async () => {
  const allFoodDb = await Food.findAll();
  if (!allFoodDb.length) {
    Food.bulkCreate([
      {
        name: "Small Popcorn",
        price: 9.1,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9461?width=171",
      },
      {
        name: "Regular Popcorn",
        price: 10.1,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9462?width=171",
      },
      {
        name: "Large Popcorn",
        price: 11.1,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9463?width=171",
      },
      {
        name: "Xtreme Popcorn",
        price: 12.1,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9464?width=171",
      },
      {
        name: "Sea Salt Caramel Gourmet Popcorn",
        price: 12.5,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9465?width=171",
      },
      {
        name: "Sweet Gourmet Popcorn",
        price: 12.5,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9468?width=171",
      },
      {
        name: "New York Mix Gourmet Popcorn",
        price: 12.5,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9466?width=171",
      },
      {
        name: "2 Choc Tops for $10.80",
        price: 10.8,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10861?width=171",
      },
      {
        name: "Vanilla Bean Choc Top (contains egg)",
        price: 7.2,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11603?width=171",
      },
      {
        name: "Boysenberry Swirl Choc Top (contains egg)",
        price: 7.2,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11604?width=171",
      },
      {
        name: "Caramel Maple Choc Top (contains egg)",
        price: 7.2,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11606?width=171",
      },
      {
        name: "Mint & Cookies Choc Top (contains egg)",
        price: 7.2,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11605?width=171",
      },
      {
        name: "Sweet Potato Fries",
        price: 8.0,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9540?width=171",
      },
      {
        name: "Hot Chips",
        price: 7.0,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9539?width=171",
      },
      {
        name: "Garlic Bread",
        price: 6.0,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9541?width=171",
      },
      {
        name: "BBQ Meatlovers Pizza",
        price: 14.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9542?width=171",
      },
      {
        name: "BBQ Chicken & Bacon Pizza",
        price: 14.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9543?width=171",
      },
      {
        name: "Hawaiian Pizza",
        price: 14.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9546?width=171",
      },
      {
        name: "Margherita Pizza",
        price: 14.9,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10098?width=171",
      },
      {
        name: "2 Confectionary Bags for $12.60",
        price: 12.6,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10857?width=171",
      },
      {
        name: "2 Darrell Lea Bags for $12.40",
        price: 12.4,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11432?width=171",
      },
      {
        name: "Milk M&Ms 180g",
        price: 8.4,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9490?width=171",
      },
      {
        name: "Mars PODS 160g",
        price: 8.4,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9488?width=171",
      },
      {
        name: "Fairy Floss",
        price: 9.3,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11416?width=171",
      },
      {
        name: "2 Smiths Chips for $8.60",
        price: 8.6,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10860?width=171",
      },
      {
        name: "Doritos Cheese Supreme 90g",
        price: 6.4,
        image:
          "https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11416?width=171",
      },
    ]);
  }
  const newAllFoodDb = await Food.findAll();
  return newAllFoodDb;
};

module.exports = { getFoodDb };
