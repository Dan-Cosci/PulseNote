import dotenv from "dotenv";

dotenv.config({path: ".env.local"});

const env = {
  MONGO_URI:process.env.MONGO_URI,
  PORT:process.env.PORT || 6969,
}

export default env;