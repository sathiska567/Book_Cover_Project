const requestModel = require("../model/requestModel");


const requestController = async(req,res)=>{

  try {
   const {nameOfOrganization,nameOfTheRequest,requestDescription} = req.body;
   
   const request = new requestModel({
    nameOfOrganization:nameOfOrganization,
    nameOfTheRequest:nameOfTheRequest,
    requestDescription:requestDescription
   })

   await request.save();

   res.status(200).send({
        success:true,
        message:"Request has been sent successfully",
        request
   })


  } catch (error) {
        res.status(400).send({
                success:false,
                message:"Request has not sent successfully",
                request
           })
  }


}


const getRequestController= async(req,res)=>{
try {
    const request = await requestModel.find({});
    res.status(200).send({
        success:true,
        message:"Request has been fetched successfully",
        request
    })

  } catch (error) {
        res.status(400).send({
                success:false,
                message:"Request has not been fetched successfully",
                error
           })
  }
}


module.exports = {requestController,getRequestController};