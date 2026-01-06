import express from "express";
import morgan from "morgan";
import hpp from "hpp";
import helmet from "helmet";

import env from "./config/config.js";
import genAi from "./services/services.gemini.js";

// database
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import "./models/Users.js";
import "./models/Medication.js"
import "./models/IntakeLog.js";
import "./models/PatientNotes.js";
import "./models/condition.js";

// custom middlewares
import errorHandler from "./middlewares/errorHandler.middleware.js";
import asyncHandler from "./middlewares/asyncHandler.middleware.js";


// express app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(hpp());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler)
app.use(asyncHandler)

// routes
import testRoutes from "./test/test.routes.js";
import mainRouter from "./routes/main.routes.js";
app.use("/test", testRoutes);
app.use("/api/pulsenote/v1", mainRouter)

// foe route
app.get("/", async (req, res) => {
  res.json({
    sucess:true, 
    message:"The api is working as intended"
  });

});

// listens on port
connectDB().then(() => {
  app.listen(env.PORT, () => {
    console.log(`server running on http://localhost:${env.PORT}`)
    console.log("loaded models:")
    mongoose.modelNames().map((model) => console.log(`- ${model}`))
  });
});

export default app;