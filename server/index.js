require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")


require("./db/db.js")

const adminRoute = require("./routes/adminRoute.js")
const eventRoute = require("./routes/eventRoute.js")
const uploadRoute = require("./routes/uploadRoute.js")
const CoveruploadRoute = require("./routes/coverImageUploadRoute.js");
const  registerRoute  = require("./routes/registerRoute.js");
const loginRoute = require("./routes/loginRoute.js")
const videoUploadRoute = require("./routes/uploadVideoRoute.js")
const forgottenPasswordRoute = require("./routes/forgottenPasswordRoute.js")
const validateOtpRoute = require("./routes/validateOtpRoute.js")
const changePasswordRoute = require("./routes/changePasswordRoute.js");
const requestRoute  = require("./routes/requestRoute.js");
const deleteRoute = require("./routes/deleteRoute.js")

const app = express()

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/event",eventRoute)
app.use("/api/v1/upload",uploadRoute)
app.use("/api/v1/coverUpload",CoveruploadRoute)
app.use("/api/v1/videoUpload",videoUploadRoute)

app.use("/api/v1/registerUser",registerRoute)
app.use("/api/v1/loginUser",loginRoute)
app.use("/api/v1/forgottenPassword",forgottenPasswordRoute)
app.use("/api/v1/validate",validateOtpRoute)
app.use("/api/v1/reset",changePasswordRoute)
app.use("/api/v1/request",requestRoute)
app.use("/api/v1/delete",deleteRoute)


const PORT = process.env.PORT || 5050 ;


app.listen(PORT,()=>{
   console.log("Server is running");
})






