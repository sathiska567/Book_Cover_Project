const mongoose = require("mongoose")

const imageDetailsSchema = new mongoose.Schema(
        {
                image: String
        },
        {
                collection: "ImageDetails"
        }
)


mongoose.model("ImageDetails", imageDetailsSchema)