const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const middlewareChecks = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization.split(" ")[1];
        if (!authHeader || authHeader.startsWith("Bearer ")) {
            return res.status(401).json("Authorization token is missing or invalid");
        }
        const token = authHeader.split(" ")[1];
        const checkToken = jwt.verify(token, process.env.JWT_SCRET);

        req.user = token;

        next();

    }
    catch (err) {
        console.log("Token verification Failed ", err);
        res.status(401).send({ message: "Token Invalid" });
    }



}