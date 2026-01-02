import express from "express";
import morgan from "morgan";

import env from "./config/config.js";


const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

export default app;