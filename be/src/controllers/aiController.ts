import type { Request, Response } from "express";
import { generateBusinessWebsite } from "../services/aiService.js";

export const generateWebsite = async (req: Request, res: Response) => {
  try {
    const { businessType, language } = req.body;

    const html = await generateBusinessWebsite(businessType, language);

    res.json({ success: true, html });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};
