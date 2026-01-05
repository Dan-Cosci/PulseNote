import { Router } from "express";

const intakeRouter = Router();

intakeRouter.get("/", (req, res)=>{});
intakeRouter.get("/:id", (req, res)=>{});

intakeRouter.post("/create", (req, res)=>{});
intakeRouter.put("/:id", (req, res)=>{});
intakeRouter.patch("/:id", (req, res)=>{});

intakeRouter.delete("/:id", (req, res)=>{});

export default intakeRouter;