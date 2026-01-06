import jwt from "jsonwebtoken";
import env from "../config/config.js"

const verifyToken = (req, res, next) =>{
  const token = req.header("auth-token");
  if (!token) return res.status(401).json("Access Denied");
  try {
    const verified = jwt.verify(token, env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json("Invalid Token");
  }

};

export default verifyToken;