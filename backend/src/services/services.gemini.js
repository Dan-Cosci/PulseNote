import { GoogleGenAI } from "@google/genai";
import env from "../config/config.js";

const client = new GoogleGenAI({apiKey:env.GEMINI_API_KEY});
async function genAi(prompt) {
  const response = await client.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents:prompt
  });
  return response;
}

export default genAi;