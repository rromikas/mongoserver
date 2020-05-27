const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

//user token verificaton
module.exports = verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  let bearerToken = bearerHeader.split(" ")[1];
  jwt.verify(bearerToken, secret, (err, decoded) => {
    if (err) {
      res.json({ error: err });
    } else {
      req.user = decoded.data;
      next();
    }
  });
};
