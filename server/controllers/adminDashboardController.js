const express = require("express");
const router = express.Router();

//get all coordinators
router.get("/allcoordinator", async (req, res) => {
  try {
    const coordinator = await Coordinator.find();
    return res.status(200).json(coordinator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get coordinator by ID
router.get("/coordinator/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findById(id);
    if (!coordinator) {
      return res.status(404).json({ message: "Coordinator not found" });
    }
    return res.status(200).json(coordinator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new coordinator
router.post("/coordinator", async (req, res) => {
  try {
    const body = { ...req.body };
    await Coordinator.create(body);
    return res.status(201).json(body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing coordinator
router.patch("/coordinator/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const coordinator = await Coordinator.findByIdAndUpdate(id, req.body);
    return res
      .status(200)
      .json({ message: "Coordinator Updated", coordinator });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a coordinator
router.delete("/coordinator/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findByIdAndDelete(id);
    if (!coordinator) {
      return res.status(404).json({ message: "Coordinator not found" });
    }
    return res
      .status(200)
      .json({ message: "Coordinator deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all trainer
router.get("/alltrainer", async (req, res) => {
  try {
    const trainer = await Trainer.find();
    return res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all students
router.get("/allstudent", async (req, res) => {
  try {
    const student = await Student.find();
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
