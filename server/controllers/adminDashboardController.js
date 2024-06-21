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

// Get trainer by ID
router.get("/trainer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trainer = await Trainer.findById(id);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    return res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new trainer
router.post("/trainer", async (req, res) => {
  try {
    const body = { ...req.body };
    await Trainer.create(body);
    return res.status(201).json(body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing trainer
router.patch("/trainer/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const trainer = await Trainer.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "Trainer Updated", trainer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a trainer
router.delete("/trainer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trainer = await Trainer.findByIdAndDelete(id);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }
    return res.status(200).json({ message: "Trainer deleted successfully" });
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

// Get student by ID
router.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new student
router.post("/student", async (req, res) => {
  try {
    const body = { ...req.body };
    await Student.create(body);
    return res.status(201).json(body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing student
router.patch("/student/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "Student Updated", trainer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student
router.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
