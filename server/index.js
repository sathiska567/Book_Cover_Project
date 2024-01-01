require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")


require("./db/db.js")

const adminRoute = require("./routes/adminRoute.js")
const eventRoute = require("./routes/eventRoute.js")
const uploadRoute = require("./routes/uploadRoute.js")

const app = express()

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/event",eventRoute)
app.use("/api/v1/upload",uploadRoute)

const PORT = process.env.PORT || 5050 ;


app.listen(PORT,()=>{
   console.log("Server is running");
})






