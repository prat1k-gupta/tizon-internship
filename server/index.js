//server port 3000 
//dot env port 
//home route "server is running"
const express= require("express"); 
require('dotenv').config(); 

const app = express(); 


app.get('/',(req,res)=>{
    res.send("server is running!!")
})

const PORT = process.env.PORT; 
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}!!`)
})