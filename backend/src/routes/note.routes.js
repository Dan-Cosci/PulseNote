import { Router } from "express";

const NotesRouter = Router();

NotesRouter.get("/", (req, res)=>{});
NotesRouter.get("/:id", (req, res)=>{});

NotesRouter.post("/create", (req, res)=>{});
NotesRouter.put("/:id", (req, res)=>{});
NotesRouter.patch("/:id", (req, res)=>{});

NotesRouter.delete("/:id", (req, res)=>{});

export default NotesRouter;