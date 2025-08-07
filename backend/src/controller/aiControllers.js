import { generateFromPrompt } from "../logics/aiLogic.js";

export const aiResponse = async (req, res) => {
  const code = req.body.code;
  if (!code) return res.status(400).send("Prompt is required");

  try {
    const reply = await generateFromPrompt(code);
    res.send({ response: reply });
  } catch (err) {
    res.status(500).send("Gemini Error: " + err.message);
  }
}