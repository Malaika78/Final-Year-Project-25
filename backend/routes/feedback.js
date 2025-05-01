// routes/feedback.js
import express from "express";

import Feedback from "../models/feedback.js";

const router = express.Router();

// POST: Submit feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET: Get all feedback for a specific restaurant
router.get("/restaurant/:id", async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ restaurantId: req.params.id }).sort(
      { createdAt: -1 }
    );
    res.status(200).json({ success: true, data: feedbacks });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

export default router;
