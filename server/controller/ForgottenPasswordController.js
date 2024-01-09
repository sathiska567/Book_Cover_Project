const nodemailer = require("nodemailer");


const forgottenPasswordController = async (req, res) => {
    try {

   let testAccount = await nodemailer.createTestAccount();

   const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'walton.batz85@ethereal.email',
            pass: 'Rr2k53VQCWFxGZzawh'
        }
    });


    const info = await transporter.sendMail({
        from: '"sathiska sasindu" <info@ethereal.email>', // sender address
        to: "sasindusathiska@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
    console.log("mail send success");

    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);

    } catch (error) {
        console.error('Error sending Email:', error);
        res.status(400).send({
            message: "Cannot send mail",
        });
    }
}

module.exports = forgottenPasswordController;
