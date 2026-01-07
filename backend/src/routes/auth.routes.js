import { Router } from "express";

import * as authCon from "../controllers/auth.controller.js";

const authRouter = Router();

// main functionality
authRouter.post("/login", authCon.Login);
authRouter.post("/register", authCon.Register);
authRouter.post("/logout", (req, res)=>{});

// additional 
authRouter.post("/refresh-token", (req, res)=>{});
authRouter.post("/forgot-password", (req, res)=>{});
authRouter.post("/reset-password", (req, res)=>{});
authRouter.post("/verify-email", (req, res)=>{});
authRouter.post("/resend-verification-email", (req, res)=>{});

export default authRouter;