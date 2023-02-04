const axios = require('axios');
const { Drink } = require('../db');

const getDrinkDb= async () => {

    const allDrinkDb = await Drink.findAll();
    if (!allDrinkDb) {
        Drink.Create({
            name: '2 Cool Ridge Waters',
            price: 7.80,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11234?width=171'
        });
        Drink.Create({
            name: 'Small Drink',
            price: 7.80,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11322?width=171'
        });
        Drink.Create({
            name: 'Regular Drink',
            price: 8.80,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11323?width=171'
        });
        Drink.Create({
            name: 'Large Drink',
            price: 9.80,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11324?width=171'
        });
        Drink.Create({
            name: 'Cool Ridge Water 600ml',
            price: 6.10,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11040?width=171'
        });
        Drink.Create({
            name: 'Cool Ridge Sparkling Water 500ml',
            price: 6.55,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11042?width=171'
        });
        Drink.Create({
            name: 'Lemon Lipton Ice Tea 500ml',
            price: 7.15,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11043?width=171'
        });
        Drink.Create({
            name: 'Peach Lipton Ice Tea 500ml',
            price: 7.15,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11044?width=171'
        });
        Drink.Create({
            name: 'Charlies Orange Juice 300ml',
            price: 6.25,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11045?width=171'
        });
        Drink.Create({
            name: 'Charlies Apple Juice 300ml',
            price: 6.25,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11046?width=171'
        });
        Drink.Create({
            name: 'Lemon Lime Gatorade 600ml',
            price: 7.15,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11047?width=171'
        });
        Drink.Create({
            name: 'Blue Bolt Gatorade 600ml',
            price: 7.15,
            image: 'https://ws.hoyts.com.au/CDN/media/entity/get/Concessions//11048?width=171'
        });

    };
    return allDrinkDb;
};

module.exports = {getDrinkDb};