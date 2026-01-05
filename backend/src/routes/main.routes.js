import { Router } from "express";

import authRouter from "./auth.routes.js";
import conditionRouter from "./condition.routes.js";
import medicationRouter from "./medication.routes.js";
import intakeRouter from "./intake.routes.js";
import NotesRouter from "./note.routes.js"

const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/condition", conditionRouter);
mainRouter.use("/medication", medicationRouter);
mainRouter.use("/intake", intakeRouter);
mainRouter.use("/notes", NotesRouter);

export default mainRouter;