const adminModel = require("../model/adminModel");

const valideOtpController = async(req,res)=>{

       const {email , otp} = req.body;

       const user = await adminModel.findOne({email});
       const givenOtp = user.otp;
    
       //check otp are valid or not
       if(givenOtp == otp){
         res.status(200).send({
                success:true,
                message:"otp verified",
         })
       }

       else{
        res.status(400).send({
                success:false,
                message:"invalid otp",
        })
       }

}


module.exports = {valideOtpController}