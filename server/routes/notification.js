const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification/notificationController')

router.post('/add-notification', notificationController.scheduleNotification);
router.post('/delete-notification', notificationController.deleteNotification);


module.exports = router;
