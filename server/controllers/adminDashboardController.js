
import express from "express";

const router = express.Router();

//get all co-ordinators
router.get("admin/get-coordinator", async (req, res) => {
  try {
    const coordinator = await Coordinator.find();
    return res.status(200).json(coordinator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all trainer
router.get("admin/get-trainer", async (req, res) => {
  try {
    const trainer = await Trainer.find();
    return res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


