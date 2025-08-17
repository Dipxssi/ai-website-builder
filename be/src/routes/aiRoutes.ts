import { Router } from "express";
import { generateWebsite } from "../controllers/aiController.js";

const router = Router();

router.post("/generate", generateWebsite);

export default router;
