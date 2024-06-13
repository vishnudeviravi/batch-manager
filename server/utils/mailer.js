const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "programlearn8@gmail.com",
      pass: "yvrr csml bmrq pula",
    },
  });
  exports.sendEmail=async(email, sub, text)=> {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'programlearn8@gmail.com', // sender address
      to: email, // list of receivers
      subject: sub, // Subject line
      text: text, // plain text body
       // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }