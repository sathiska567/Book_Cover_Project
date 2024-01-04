const createEventDetailsModel = require("../model/eventModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRETE
})


const createEventController = async(req,res)=>{

  try {

  const result = await cloudinary.uploader.upload(req.files.image.path)

  const createEventDetails = await createEventDetailsModel({EventName : req.body.EventName , EventDate:req.body.EventDate , EventLocation:req.body.EventLocation , EventDescription:req.body.EventDescription , imageUrl:result.secure_url})
  await createEventDetails.save()
  
  res.status(200).send({
        success : true,
        message : "Event Details Updated",
        createEventDetails
  })

        
  } catch (error) {
        res.status(200).send({
                success : false,
                message : "Event Details Updated have some error ",
                error
          }) 
  }


}


module.exports = {createEventController}