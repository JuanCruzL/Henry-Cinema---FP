require('dotenv').config();
const { SECRET } = process.env; // Can create your own SECRET with comand line 'openssl rand -hex 32'
const jwt = require("jsonwebtoken");

// middleware required to check for 'authorization' header
// and look if there's an access token for the local user
function validateToken(req, res, next) {
    const authHeader = req.headers['authorization'] || req.query.accessToken;
    if(!authHeader) res.status(401).send('Access denied');
    
    const token = authHeader.split(" ")[1];// "Bearer ${accessToken}"" =>  "${accessToken}"
    jwt.verify(token, SECRET, (err, user) => { // verify the access token with the SECRET key
        if(err) {
            res.status(403).send('Access denied, token expired or incorrect');
        } else {
            req.user = user;
            next();
        }
    })
}

module.exports = validateToken;