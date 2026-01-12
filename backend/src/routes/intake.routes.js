import { Router } from "express";

import * as intakeCon from "../controllers/intake.controller.js";

const intakeRouter = Router();

intakeRouter.get("/", intakeCon.getAllRecord);
intakeRouter.get("/:id/search", intakeCon.searchRecords);
intakeRouter.get("/:id", intakeCon.getRecord);

intakeRouter.post("/create", intakeCon.createRecord);
intakeRouter.put("/:id", intakeCon.updateRecord);
intakeRouter.patch("/:id", intakeCon.alterRecord);

intakeRouter.delete("/:id", intakeCon.deleteRecord);

export default intakeRouter;