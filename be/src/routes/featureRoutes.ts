import { Router } from "express";
import { bookSlot, placeOrder } from "../controllers/featureController.js";

const router = Router();

router.post("/book", bookSlot);
router.post("/order", placeOrder);

export default router;
