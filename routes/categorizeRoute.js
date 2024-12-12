import express from "express";
import { createCategorizeController } from "../controller/categorizeController.js";

const router = express.Router();

// post request
router.post("/create-categorize", createCategorizeController);

export default router;
