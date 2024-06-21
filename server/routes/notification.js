const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification/notificationController')

router.post('/add-notification', notificationController.addNotification);
router.post('/delete-notification', notificationController.deleteNotification);


module.exports = router;
