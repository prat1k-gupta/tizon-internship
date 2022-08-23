const mongoose = require("mongoose")
require("dotenv").config(); 
const DB_URL = process.env.DB_URL;
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        if(conn){
            console.log("DB connected successfully!!"); 
        }else{
            console.log("DB not connected!!"); 
        }
    }catch(err){
        throw err; 
    }
}

module.exports = connectDB; 