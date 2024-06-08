// const otpService = require('../services/verifyOTP');

// exports.sendotp = async (req, res, next) => {

//    // verify mobile no in dataBase 
//    ...
//    otpService.generateOtp(req.body.mobile)
//    otpService.sendOtpMobile(req.body.mobile)
//    ...
// };

// exports.verifyotp = async (req, res, next) => {

//     // verify mobile no in dataBase 
//     ...
//     otpService.verifyOtp(req.body.mobile)
//     ...
//  };

// exports.logout = (req, res) => {
//     req.session.destroy(err => {
//         if (err) {
//             return res.status(500).send('Error logging out');
//         } else {
//             return res.send('Logged out successfully');
//         }
//     });
// };
