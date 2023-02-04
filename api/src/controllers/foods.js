const axios = require('axios');
const { Food } = require('../db');

const getFoodDb= async () => {

    const allFoodDb = await Food.findAll();
    
    if(!allFoodDb) {
        Food.Create({
            name: 'Small Popcorn',
            price: 9.10,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9461?width=171',
        });
        Food.Create({
            name: 'Regular Popcorn',
            price: 10.10,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9462?width=171',
        });
        Food.Create({
            name: 'Large Popcorn',
            price: 11.10,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9463?width=171',
        });
        Food.Create({
            name: 'Xtreme Popcorn',
            price: 12.10,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9464?width=171',
        });
        Food.Create({
            name: 'Sea Salt Caramel Gourmet Popcorn',
            price: 12.50,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9465?width=171',
        });
        Food.Create({
            name: 'Sweet Gourmet Popcorn',
            price: 12.50,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9468?width=171',
        });
        Food.Create({
            name: 'New York Mix Gourmet Popcorn',
            price: 12.50,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9466?width=171',
        });
        Food.Create({
            name: '2 Choc Tops for $10.80',
            price: 10.80,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10861?width=171',
        });
        Food.Create({
            name: 'Vanilla Bean Choc Top (contains egg)',
            price: 7.20,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11603?width=171',
        });
        Food.Create({
            name: 'Boysenberry Swirl Choc Top (contains egg)',
            price: 7.20,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11604?width=171',
        });
        Food.Create({
            name: 'Caramel Maple Choc Top (contains egg)',
            price: 7.20,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11606?width=171',
        });
        Food.Create({
            name: 'Mint & Cookies Choc Top (contains egg)',
            price: 7.20,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11605?width=171',
        });
        Food.Create({
            name: 'Sweet Potato Fries',
            price: 8.00,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9540?width=171',
        });
        Food.Create({
            name: 'Hot Chips',
            price: 7.00,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9539?width=171',
        });
        Food.Create({
            name: 'Garlic Bread',
            price: 6.00,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9541?width=171',
        });
        Food.Create({
            name: 'BBQ Meatlovers Pizza',
            price: 14.90,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9542?width=171',
        });
        Food.Create({
            name: 'BBQ Chicken & Bacon Pizza',
            price: 14.90,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9543?width=171',
        });
        Food.Create({
            name: 'Hawaiian Pizza',
            price: 14.90,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9546?width=171',
        });
        Food.Create({
            name: 'Margherita Pizza',
            price: 14.90,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10098?width=171',
        });
        Food.Create({
            name: '2 Confectionary Bags for $12.60',
            price: 12.60,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10857?width=171',
        });
        Food.Create({
            name: '2 Darrell Lea Bags for $12.40',
            price: 12.40,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11432?width=171',
        });
        Food.Create({
            name: 'Milk M&Ms 180g',
            price: 8.40,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9490?width=171',
        });
        Food.Create({
            name: 'Mars PODS 160g',
            price: 8.40,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//9488?width=171',
        });
        Food.Create({
            name: 'Fairy Floss',
            price: 9.30,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11416?width=171',
        });
        Food.Create({
            name: '2 Smiths Chips for $8.60',
            price: 8.60,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//10860?width=171',
        });
        Food.Create({
            name: 'Doritos Cheese Supreme 90g',
            price: 6.40,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11416?width=171',
        });
    }
    return allFoodDb;
}

module.exports = {getFoodDb};