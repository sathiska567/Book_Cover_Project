const reviewModel = require("../model/reviewModel")

const reviewController = async(req,res)=>{
    
  try {
     const {userName,review} = req.body
     const user = new reviewModel({
        userName:userName,
        review:review     
          })
     
       await user.save()

       res.status(200).send({
         success:true,
         message:"Review send Successfull"
       })


  } catch (error) {
        res.status(400).send({
                success:true,
                message:"Review send Unsuccessfull.please try again!"
              })
  }
}


const getreviewController = async(req,res)=>{
   try {

     const review = await reviewModel.find({})

     res.status(200).send({
        success:true,
        message:"Review get Successfull",
        review
     })
        
   } catch (error) {
        res.status(200).send({
                success:true,
                message:"Review get Unsuccessfull",
                error
             })
   }
}


module.exports = {reviewController,getreviewController}