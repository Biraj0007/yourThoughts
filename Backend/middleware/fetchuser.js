var jwt = require('jsonwebtoken');
const JWT_SECRET = 'NotABigDeal';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token if block" })
    }
    try {
        // console.log("tyy 1");
        const data = jwt.verify(token, JWT_SECRET);
        // console.log(data);
        // console.log("try 2");
        req.user = data.user;
        console.log(req.user);
        next();
    } catch (error) {
        console.log(token);
        res.status(401).send({ error: "Please authenticate using a valid token catch block", error })
    }

}


module.exports = fetchuser;