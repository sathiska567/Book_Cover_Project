const mongoose = require("mongoose")

const CreateEventSchema = new mongoose.Schema({
  
 EventName:{
    type:String,
    required : [true , "Event Name is required"]
 },

 EventDate:{
    type: Object,
    required: [true, "Event date is required"],
},

 EventLocation: {
    type:String,
    required : [true , "Event location is required"]
 },

 EventDescription: {
    type:String,
    required : [true , "Event Description is required"]
 },
 coverimgUrl:{
   type:String
},

publicId:{
  type:String
}

})


const createEventDetails = mongoose.model("createEventModel",CreateEventSchema)
module.exports = createEventDetails