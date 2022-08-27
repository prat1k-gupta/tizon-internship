const user = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
// console.log("authenticate was working")
  try {
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      token = req.cookies.jwtoken;
    }
    const verifyToken = await jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await user.findOne({ _id: verifyToken._id });

    if (!rootUser) {
      return res.json({ error: "user not found" });
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = verifyToken._id; 
    next();
  } catch (err) {
    res.status(401).json({error:"unauthorized: no token provided"});
  }
};

module.exports = authenticate;
