const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, //dee90e11r
    api_key: process.env.CLOUDINARY_API_KEY, //291193654835349
    api_secret: process.env.CLOUDINARY_API_SECRET, //mxJpU0WU5jQzM0SzmBgUC_wAQOk
});

module.exports = { cloudinary };

