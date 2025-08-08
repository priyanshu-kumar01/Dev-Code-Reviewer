
import express from "express";
import { aiResponse } from "../controller/aiControllers.js";



const router = express.Router();

router.post("/ask", aiResponse);




export default router;