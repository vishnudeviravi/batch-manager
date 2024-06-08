// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // In-memory storage for OTPs (for demonstration purposes)
// const otps = {};

// // Generate a random 6-digit OTP
// function generateOtp() {
//     return Math.floor(100000 + Math.random()*900000).toString();
// }

// // Send OTP to user's email
// async function sendOtpEmail(email, otp) {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail', // Use any email service you prefer
//         auth: {
//             user: 'your-email@gmail.com', // Replace with your email
//             pass: 'your-email-password', // Replace with your email password or app password
//         },
//     });

//     let mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Your OTP Code',
//         text: `Your OTP code is ${otp}`,
//     };

//     await transporter.sendMail(mailOptions);
// }

// // Route to request OTP
// app.post('/request-otp', async (req, res) => {
//     const { email } = req.body;
//     const otp = generateOtp();
//     otps[email] = otp;

//     try {
//         await sendOtpEmail(email, otp);
//         res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error sending OTP', error });
//     }
// });

// // Route to verify OTP
// app.post('/verify-otp', (req, res) => {
//     const { email, otp } = req.body;
//     if (otps[email] && otps[email] === otp) {
//         res.status(200).json({ message: 'OTP verified successfully' });
//     } else {
//         res.status(400).json({ message: 'Invalid OTP' });
//     }
// });


// const nodemailer = require('nodemailer');

// const otps = {}; // In-memory storage for OTPs (for demonstration purposes)

// const otpService = {
//     generateOtp: function () {
//         return Math.floor(100000 + Math.random() * 900000).toString();
//     },

//     sendOtpEmail: async function (email, otp) {
//         let transporter = nodemailer.createTransport({
//             service: 'gmail', // Use any email service you prefer
//             auth: {
//                 user: 'your-email@gmail.com', // Replace with your email
//                 pass: 'your-email-password', // Replace with your email password or app password
//             },
//         });

//         let mailOptions = {
//             from: 'your-email@gmail.com',
//             to: email,
//             subject: 'Your OTP Code',
//             text: `Your OTP code is ${otp}`,
//         };

//         await transporter.sendMail(mailOptions);
//     },

//     storeOtp: function (email, otp) {
//         otps[email] = otp;
//     },

//     verifyOtp: function (email, otp) {
//         return otps[email] && otps[email] === otp;
//     }
// };

// module.exports = otpService;


