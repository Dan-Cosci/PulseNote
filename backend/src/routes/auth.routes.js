import { Router } from "express";

const authRouter = Router();

// main functionality
authRouter.post("/login", (req, res)=>{});
authRouter.post("/register", (req, res)=>{});
authRouter.post("/logout", (req, res)=>{});

// additional 
authRouter.post("/refresh-token", (req, res)=>{});
authRouter.post("/forgot-password", (req, res)=>{});
authRouter.post("/reset-password", (req, res)=>{});
authRouter.post("/verify-email", (req, res)=>{});
authRouter.post("/resend-verification-email", (req, res)=>{});

export default authRouter;