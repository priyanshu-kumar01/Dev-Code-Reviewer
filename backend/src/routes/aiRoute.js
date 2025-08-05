
import express from "express";
import { generateFromPrompt } from "../logics/aiLogic.js";

const router = express.Router();

router.get("/ask", async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) return res.status(400).send("Prompt is required");

  try {
    const reply = await generateFromPrompt(prompt);
    res.send({ response: reply });
  } catch (err) {
    res.status(500).send("Gemini Error: " + err.message);
  }
});

export default router;
