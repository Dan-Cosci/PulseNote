import asyncHandler from "../middlewares/asyncHandler.middleware.js"
import AppError from "../utils/appError.js";

import User from "../models/Users.js";
import Note from "../models/PatientNotes.js"; 

// GET METHODS
// TODO:
export const getAllNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "All notes" });
});

// TODO:
export const getAllUserNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "User notes" });
});

// TODO:
export const searchNote = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "Search note" });
});
// TODO:
export const searchUserNote = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "Search user note" });
});


// POST n UPDATE METHODS
// TODO:
export const createNote = asyncHandler(async (req, res) => {
  res.status(201).json({ success: true, message: "Note created" });
});

// TODO:
export const updateNote = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "Note updated" });
});

export const alterNote = asyncHandler (async (req, res) => {
  res.status(200).json({ success: true, message: "Note altered" });
});


// DELETE METHODS
// TODO:
export const deleteNote = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, message: "Note deleted" });
});