import express from "express";
import aiRoutes from "./routes/aiRoute.js"; 


const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Root working"));
app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
