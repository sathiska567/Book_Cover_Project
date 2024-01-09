const nodemailer = require("nodemailer");

const forgottenPasswordController = async (req, res) => {
    try {
        const { email } = req.body;

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
            to: email,
            subject: "Password Reset",
            text: `Your OTP for password reset is: ${otp}`,
        };

        // Use async/await to handle asynchronous operation
        await mailTransporter.sendMail(details);

        console.log("Email sent successfully");
        res.status(200).send({
            success:true,
            message: "Email sent successfully",
        });


    } catch (error) {
        console.error('Error sending Email:', error);
        res.status(500).send({
            message: "Cannot send mail",
        });
    }
};


module.exports = forgottenPasswordController;
