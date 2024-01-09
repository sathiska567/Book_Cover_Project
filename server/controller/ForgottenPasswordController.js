const nodemailer = require("nodemailer");

const forgottenPasswordController = async (req, res) => {
    try {
        const { mail } = req.body;

        const otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otp);

        const mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'bookcovertest@gmail.com',
                pass: 'nffu rqhr tkxr baru',
            },
        });

        const details = {
            from: "bookcovertest@gmail.com",
            to: mail,
            subject: "Password Reset",
            text: `Your OTP for password reset is: ${otp}`,
        };

        // Use async/await to handle asynchronous operation
        await mailTransporter.sendMail(details);

        console.log("Email sent successfully");
        res.status(200).send({
            message: "Email sent successfully",
        });


    } catch (error) {
        console.error('Error sending Email:', error);
        res.status(500).send({
            message: "Cannot send mail",
        });
    }
};


// // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_FROM, // Replace with your Gmail email
//     pass: process.env.EMAIL_PASSWORD, // Replace with your Gmail email password
//   },
// });

// // Function to send an email
// const sendEmail = async (email, resetCode) => {
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: email,
//         subject: 'Password Reset Code',
//         text: `Your password reset code is: ${resetCode}`,
//       };
//       console.log("email service started");

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } 

//   catch (error) {
//     console.error('Error sending email:', error.message);
//     throw new Error('Failed to send email');
//   }
// };

// module.exports = { sendEmail };

module.exports = forgottenPasswordController;
