import express from "express";
import aiRoutes from "./routes/aiRoute.js"; 
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Root working"));
app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});