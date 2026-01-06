import dotenv from "dotenv";

dotenv.config({path: ".env.local"});

const env = {
  MONGO_URI: process.env.MONGO_URI,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  PORT: process.env.PORT || 6969,
  NODE_ENV: process.env.NODE_ENV,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
}

export default env;