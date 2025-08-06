
import express from "express";
import { aiResponse } from "../controller/aiControllers.js";

const router = express.Router();

router.get("/ask", aiResponse);

export default router;
