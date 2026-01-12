import Medication from "../models/Medication.js"
import User from "../models/Users.js"

import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js"


// GET METHODS
export const getAllMedication = asyncHandler(async (req, res) =>{
  const r = await Medication.find();
  res.status(200).json({ 
    success: true, 
    message: "All medications",
    data:r 
  });
});

export const getMedication = asyncHandler(async (req, res) =>{
  const { id } = req.params;
  if (!id) {
    throw new AppError("Id is required", 400);
  }

  const r = await Medication.findById(id);
  if (!r) {
    throw new AppError("Medication not found", 404);
  }

  res.status(200).json({ 
    success: true, 
    message: "Medication",
    data:r 
  });

});

export const searchMedication = asyncHandler(async (req, res) =>{
  const { id } = req.params;
  const al = req.query;

  if (!al.q || !al.op){
    throw new AppError("Usage: ?q=<query>&op=<medicine|dosage|frequency>", 400);
  }

  const filter = {
    userid: id,
    [al.op] : { $regex: al.q, $options: 'i' }
  };

  const r = await Medication.find(filter);
  if (r < 0) {
    throw new AppError("Medication not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Searched medications",
    data: r
  })

});


// POST METHODS
export const createMedication = asyncHandler(async (req, res) =>{
  const { userid, medicine, dosage, frequency } = req.body;
  if (!userid || !medicine || !dosage || !frequency){
    throw new AppError("Userid, medicine, dosage and frequency are required", 400);
  }

  const user = await User.findById(userid);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newMedication = new Medication({
    userid:user._id,
    medicine:medicine,
    dosage:dosage,
    frequency:frequency
  })

  await newMedication.save();
  res.status(201).json({
    success: true,
    message: "Medication created successfully",
    data: newMedication
  })
});

export const updateMedication = asyncHandler(async (req, res) =>{});
export const alterMedication = asyncHandler(async (req, res) =>{});

export const deleteMedication = asyncHandler(async (req, res) =>{});