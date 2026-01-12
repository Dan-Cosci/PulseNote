import { Router } from "express";

import * as mediCon from "../controllers/medication.controller.js";

const medicationRouter = Router();

medicationRouter.get("/", mediCon.getAllMedication);
medicationRouter.get("/:id/search", mediCon.searchMedication);
medicationRouter.get("/:id", mediCon.getMedication);

medicationRouter.post("/create", mediCon.createMedication);
medicationRouter.put("/update/:id", mediCon.updateMedication);
medicationRouter.patch("/update/:id", mediCon.alterMedication);

medicationRouter.delete("/:id", mediCon.deleteMedication);

export default medicationRouter;