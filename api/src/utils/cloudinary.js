const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dee90e11r',
    api_key: '291193654835349',
    api_secret: 'mxJpU0WU5jQzM0SzmBgUC_wAQOk',
});

module.exports = { cloudinary };

