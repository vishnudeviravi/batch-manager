const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminDashboardController");

router.get("/", adminController);

module.exports = router;
