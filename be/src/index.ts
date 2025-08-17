import dotenv from "dotenv";
import express from "express";
import aiRoutes from "./routes/aiRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/features", featureRoutes);

app.listen(PORT , () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
