const otpService = require('../services/otpService');
const numberVerificationService = require('../../services/numberVerificationService')
const mailer = require('../utils/mailer');

exports.sendOTP = async (req, res, next) => {
    // const position = numberVerificationService.verifyNumber(req.body.phoneNumber)
    try {
        const { email } = req.body;
        const otp = otpService.generateOTP(email);
        await mailer.sendMail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
        res.send('OTP sent successfully');
    } catch (error) {
        next(error);
    }
};

exports.verifyOTP = (req, res, next) => {
    const { email, otp } = req.body;
    if (otpService.verifyOTP(email, otp)) {
        req.session.email = email;
        res.send('OTP verified successfully');
    } else {
        res.status(401).send('Invalid or expired OTP');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        } else {
            return res.send('Logged out successfully');
        }
    });
};
