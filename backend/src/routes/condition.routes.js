import { Router } from "express";

const conditionRouter = Router();

conditionRouter.get("/", (req, res)=>{}); // get all condition -admin-
conditionRouter.get("/:id", (req, res)=>{}); // by id requires auth
conditionRouter.get("/search", (req, res)=>{}); // search condition by name

conditionRouter.post("/create", (req, res)=>{}); // post new condition
conditionRouter.put("/update/:id", (req, res)=>{}); // by id requires auth
conditionRouter.patch("/update/:id", (req, res)=>{}); // by id requires auth

conditionRouter.delete("/:id", (req, res)=>{}); // by id requires auth

export default conditionRouter;