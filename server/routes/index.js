const express = require('express');
const router = express.Router();

const auth = require('./auth')
// const registration = require('./registration')
// const notification = require('./notification')

//  team 1 routes 
router.use('/auth', auth)
// router.use('/registration', auth)
// router.use('/notification', auth)

module.exports = router;
