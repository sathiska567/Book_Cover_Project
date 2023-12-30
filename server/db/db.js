const mongoose = require("mongoose")

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url);

const connection = mongoose.connection;

connection.once("open",()=>{
   console.log("Mongodb connected");
})