import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

import env from "../config/config.js";
import User from "../models/Users.js";

export const Login = async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    const u = await User.findOne({ email });
    if (!u) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bycrypt.compare(password, u.password);
    if (!isMatch){
      res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({id:u._id}, env.JWT_SECRET)
    return res.status(200).json({ success: true, message: "Login successful", token:token });


  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const Register = async (req, res) => {
  const { email, password, name, role, regNumber, regDate, regValid} = req.body;
  if (!email || !password || !name ) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }
  
  try {
    const u = await User.findOne({ email });


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }

}

export const Logout = async (req, res) => {}