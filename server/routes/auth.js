// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const validateMiddleware = require('../middlewares/validateMiddleware');

// router.get('/login', (req, res) => {
//     res.render('login');
// });

// router.post('/send-otp', validateMiddleware.validateLogin, authController.sendotp);
// router.post('/verify-otp', authController.verifyotp);
 
// router.get('/logout', authMiddleware.isAuthenticated, authController.logout);

// module.exports = router;