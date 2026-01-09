import { Router } from "express";

import * as noteCon from "../controllers/note.controller.js";

const NotesRouter = Router();

NotesRouter.get("/", noteCon.getAllNotes);
NotesRouter.get("/search", noteCon.searchNote);
NotesRouter.get("/search/:id", noteCon.searchUserNote);
NotesRouter.get("/:id", noteCon.getAllUserNotes);

NotesRouter.post("/create/:userid", noteCon.createNote);
NotesRouter.put("/:id", noteCon.updateNote);
NotesRouter.patch("/:id", noteCon.alterNote);

NotesRouter.delete("/:id", (req, res)=>{});

export default NotesRouter;