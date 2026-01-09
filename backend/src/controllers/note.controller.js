import asyncHandler from "../middlewares/asyncHandler.middleware.js"
import AppError from "../utils/appError.js";

import User from "../models/Users.js";
import Note from "../models/PatientNotes.js"; 

// GET METHODS
export const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({ 
    success: true, 
    message: "All notes",
    data:notes 
  });
});

export const getAllUserNotes = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const notes = await Note.find({ userid: user._id });

  res.status(200).json({ 
    success: true, 
    message: "User notes",
    data: notes
  });
});

export const searchNote = asyncHandler(async (req, res) => {
  const al = req.query;
  if (!al.q || !al.op) {
    throw new AppError("Usage: ?q=<query>&op=<content|title|visibility>", 400);
  }

  // TODO: can search weird params like deletedAt
  const notes = await Note.find({ [al.op] : { $regex: al.q, $options: 'i' } }).limit(parseInt(al.limit) || 10);

  res.status(200).json({ 
    success: true, 
    message: "Search note",
    data: notes
  });
});

export const searchUserNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const al = req.query;
  if (!al.q || !al.op) {
    throw new AppError("Usage: ?q=<query>&op=<content|title|visibility>", 400);
  }
  
  const user = await User.findById(id);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  
  // TODO: can search weird params like deletedAt
  const notes = await Note.find({ userid: user._id, [al.op] : { $regex: al.q, $options: 'i' } }).limit(parseInt(al.limit) || 10);

  res.status(200).json({ 
    success: true, 
    message: "Search user note", 
    data: notes
  });
});


// POST n UPDATE METHODS
export const createNote = asyncHandler(async (req, res) => {
  const { userid } = req.params;
  const { title, content, visibility } = req.body;
  if (!title || !content) {
    throw new AppError("Title and content are required", 400);
  }

  const user = await User.findById(userid);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const newNote = new Note({
    userid:user._id,
    title:title,
    content:content
  })

  await newNote.save();
  
  res.status(201).json({ 
    success: true, 
    message: "Note created",
    date: newNote
  });
});

export const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content, visibility } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(id, { 
    title, 
    content, 
    visibility,
    updatedAt: Date.now()
  }, { 
    new: true 
  });

  if (!updatedNote) {
    throw new AppError("Note not found", 404);
  }
  
  res.status(200).json({ 
    success: true, 
    message: "Note updated",
    data: updatedNote
  });
});

export const alterNote = asyncHandler (async (req, res) => {
  const { id } = req.params;
  const patch = req.body;

  const patchedNote = await Note.findByIdAndUpdate(id, 
    {$set: patch, updatedAt: Date.now()}, 
    { new: true });
  if (!patchedNote) {
    throw new AppError("Note not found", 404);
  }

  res.status(200).json({ 
    success: true, 
    message: "Note altered" 
  });
});


// DELETE METHODS
export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);
  if (!note){
    throw new AppError("Note not found", 404);
  }

  const del = Note.findByIdAndDelete(note._id);

  res.status(200).json({ 
    success: true, 
    message: "Note deleted", 
    data:del
    });
});