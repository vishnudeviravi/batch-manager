const express = require('express');
const router = express.Router();

const auth = require('./auth')
const notification = require('./notification')

// const registration = require('./registration')
// const notification = require('./notification')

//  team 1 routes 
router.use('/auth', auth)
router.use('/notification', notification)
// router.use('/registration', auth)
// router.use('/notification', auth)

module.exports = router;
