import { Router } from "express";

import * as authCon from "../controllers/auth.controller.js";

const authRouter = Router();

// main functionality
authRouter.post("/login", authCon.Login);
authRouter.post("/register", authCon.Register);
authRouter.post("/logout", authCon.Logout);

// additional 
authRouter.post("/refresh-token", authCon.RefreshToken);
authRouter.post("/forgot-password", (req, res)=>{});
authRouter.post("/reset-password", (req, res)=>{});

export default authRouter;