import express from "express";
import morgan from "morgan";
import hpp from "hpp";
import helmet from "helmet";

import env from "./config/config.js";
import genAi from "./services/services.gemini.js";

// database
import connectDB from "./config/db.js";
import "./models/Users.js";
import "./models/PatientNotes.js";
import "./models/Medication.js"


// express app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(hpp());
app.use(helmet());

// routes
import testRoutes from "./test/test.routes.js"; app.use("/test", testRoutes);

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
    console.log(`Server is running on port ${env.PORT}`);
  });
});

export default app;