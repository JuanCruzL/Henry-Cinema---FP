const { OAuth2Client } = require("google-auth-library");
const { GOOGLE_CLIENT_ID } = process.env;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function validateGoogleToken(req, res, next){
    // const accessToken = req.headers['authorization'] || req.query.accessToken;
    console.log(accessToken);
    const ticket = await client.verifyIdToken({
        idToken: accessToken,
        audience: GOOGLE_CLIENT_ID,
    });
    console.log(ticket);
    if (!ticket) {
        res.send('Access denied, token expired or incorrect');
    } else {
        req.user = user;
        next();
    }

}

module.exports = { validateGoogleToken };
