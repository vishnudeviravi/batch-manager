const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');
// dfgsg
// test route
router.get('/', testController.test);

module.exports = router;
