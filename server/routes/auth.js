const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/authController');
const checkToken = require('../middlewares/checkToken');
const validateMiddleware = require('../middlewares/validateMiddleware');

// router.get('/login-sentotp', (req, res) => {
//     res.render('login');
// });

router.post('/login-sentotp', validateMiddleware.validateMobile_no, authController.sendOTP);
router.post('/login-verifyotp', validateMiddleware.validateOtp, authController.verifyOTP);
 
router.get('/logout', checkToken.checkToken(['trainer']), authController.logout);

module.exports = router;