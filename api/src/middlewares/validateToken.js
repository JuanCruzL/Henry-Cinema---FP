require('dotenv').config();
const { SECRET } = process.env; // Can create your own SECRET with comand line 'openssl rand -hex 32'
const jwt = require("jsonwebtoken");

// middleware required to check for 'authorization' header
// and look if there's an access token for the local user
function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.accessToken;
    if(!accessToken) res.send('Access denied');
    
    const token = accessToken.split(" ")[1];// "Bearer ${accessToken}"" =>  "${accessToken}"
    jwt.verify(token, SECRET, (err, user) => { // verify the access token with the SECRET key
        if(err) {
            res.send('Access denied, token expired or incorrect');
        } else {
            req.user = user;
            next();
        }
    })
}

module.exports = validateToken;