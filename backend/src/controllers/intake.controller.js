import Medication from "../models/Medication.js"
import User from "../models/Users.js"
import IntakeLog from "../models/IntakeLog.js"

import AppError from "../utils/appError.js";
import asyncHandler from "../middlewares/asyncHandler.middleware.js"


// GET METHODS
export const getAllRecord = asyncHandler(async (req, res) => {
  const r = await IntakeLog.find();
  res.status(200).json({ 
    success: true, 
    message: "All records",
    data:r 
  });
});

export const getRecord = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;

  const filter = date ? { userid: id, taken_at: date } : 
                        { userid: id };   

  const r = await IntakeLog.find(filter);
  if (!r) {
    throw new AppError("Record not found", 404);
  }

  res.status(200).json({ 
    success: true, 
    message: "Record",
    data:r 
  });

});

export const searchRecords = asyncHandler(async (req, res) => {
  const al = req.query;
  if (!al.q || !al.op) {
    throw new AppError("Usage: ?q=<query>&op=<date>", 400);
  }

  const r = await IntakeLog.find({ [al.op] : { $regex: al.q, $options: 'i' } })
  .limit(parseInt(al.limit) || 10);

  res.status(200).json({
    success: true,
    message: "Searched records",
    data: r
  })
});

// POST METHODS
export const createRecord = asyncHandler(async (req, res) => {
  const { userid, medicationid } = req.body;
  if (!userid || !medicationid){
    throw new AppError("Userid and medicationid are required", 400);
  }

  const timeTaken = new Date;
  const hasTakenMeds = await IntakeLog.find({taken_at: timeTaken})
  if (hasTakenMeds.length > 0){
    throw new AppError("You have already taken this medication", 400);
  }

  const user = await User.findById(userid);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const medication = await Medication.findById(medicationid);
  if (!medication) {
    throw new AppError("Medication not found", 404);
  }

  const newRecord = new IntakeLog({
    userid:user._id,
    medicationid:medication._id,
    taken_at: timeTaken
  })

  await newRecord.save();


  res.status(201).json({
    success: true,
    message: "Record created successfully",
    data: newRecord
  })
});

// UPDATE METHODS
export const updateRecord = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userid, medicationid, date } = req.body;
  if (!userid || !medicationid){
    throw new AppError("Userid and medicationid are required", 400);
  }
  const timeTaken = new Date(date) ? new Date(date) : new Date;

  const user = await User.findById(userid);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const medication = await Medication.findById(medicationid);
  if (!medication) {
    throw new AppError("Medication not found", 404);
  }

  const updatedRecord = await IntakeLog.findByIdAndUpdate(
    id,
    { userid: user._id, medicationid: medication._id, taken_at: timeTaken },
    { new: true, runValidators: true }
  );
  
  if (!updatedRecord) {
    throw new AppError("Record not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Record updated successfully",
    data: updatedRecord
  });

});
export const alterRecord = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { field, value } = req.body;

  const updatedRecord = await IntakeLog.findByIdAndUpdate(
    id,
    { [field]: value },
    { new: true, runValidators: true }
  );

  if (!updatedRecord) {
    throw new AppError("Record not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Record altered successfully",
  });
});

// DELETE METHODS 

export const deleteRecord = asyncHandler(async (req, res) => {
  const { id } = req.params;Medication
  const deletedRecord = await IntakeLog.findByIdAndDelete(id);
  if (!deletedRecord) {
    throw new AppError("Record not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "Record deleted successfully",
  });
  
});