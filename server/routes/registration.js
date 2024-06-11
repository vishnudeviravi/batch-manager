const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registration-request', authController.sendotp);

router.get(
  '/request-manage',
  authMiddleware.checkToken,
  authController.verifyotp
);

router.post(
  '/request-manage',
  authMiddleware.checkToken,
  authController.verifyotp
);

router.get('/logout', authMiddleware.checkToken, authController.logout);

module.exports = router;
