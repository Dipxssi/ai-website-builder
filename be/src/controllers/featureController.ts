import type { Request, Response } from "express";
import { saveBooking, saveOrder } from "../services/dbService.js";

export const bookSlot = async (req: Request, res: Response) => {
  try {
    const booking = await saveBooking(req.body);
    res.json({ success: true, booking });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const order = await saveOrder(req.body);
    res.json({ success: true, order });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};
