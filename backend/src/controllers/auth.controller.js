import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import env from "../config/config.js";
import User from "../models/Users.js";

export const Login = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const u = await User.findOne({ email });
  if (!u) {
    throw new AppError("Invalid email or password", 400);
  }

  const isMatch = await bycrypt.compare(password, u.password);
  if (!isMatch){
    throw new AppError("Invalid email or password", 400);
  }

  const token = jwt.sign({id:u._id}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN})
  const refreshToken = jwt.sign({id:u._id}, env.JWT_REFRESH_SECRET, {expiresIn: env.JWT_REFRESH_EXPIRES_IN})
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path:"/api/pulsenote/v1/auth/refresh-token"
  });
  return res.status(200).json({ success: true, message: "Login successful", token:token });

});

export const Register = async (req, res) => {
  const { email, password, name, role, regNumber, regDate, regValid} = req.body;
  if (!email || !password || !name ) {
    throw new AppError("Email, password and name are required", 400);
  }

  const u = await User.findOne({ email });
  if (u) {
    throw new AppError("User already exists", 400);
  }

  const salt = await bycrypt.genSalt(10);
  const hasedPassword = await bycrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hasedPassword,
    role,
    regNumber,
    regDate,
    regValid

  });
  await newUser.save();
  return res.status(201).json({ 
    success: true, 
    message: "User created successfully",
    data: newUser
  });

}

export const Logout = asyncHandler(async (req, res) => {
  res.cookie("refreshToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path:"/api/pulsenote/v1/auth/refresh-token"
  });
  return res.status(200).json({ success: true, message: "Logout successful" });
});

export const RefreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken){
    throw new AppError("Refresh Token not found", 404);
  }

  const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
  const user = await User.findById(decoded.id);
  if(!user){
    throw new AppError("User not found", 404);
  }

  const token = jwt.sign({id:user._id}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN})
  return res.status(200).json({ success: true, message: "Token refreshed successfully", token:token });

});