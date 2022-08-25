//server port 3000
//dot env port
//home route "server is running"
const express = require("express");
const stats = require("./data/stats");
const connectDB = require("./config/connectDB");
require("dotenv").config();
// console.log(connectDB);
const userRoutes = require("./routes/userRoutes")
const userStats = require("./Models/statsSchema");
const cookieParser = require("cookie-parser");
const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser()); 
app.get("/api/stats", (req, res) => {
  res.send(stats);
});

app.get("/api/stats/:id", (req, res) => {
  const statsCard = stats.find((s) => req.params.id == s.id);
  res.send(statsCard);
});

app.use("/api/users",userRoutes)



app.post("/api/stats",(req,res)=>{
    const {name,email,business,phone,website,instagram} = req.body;
    const newStats = new userStats({
      name,
      email,
      business,
      phone,
      website,
      instagram
    });
    try{
        const saveStats = newStats.save(); 
        if(saveStats){
            res.status(200).json({message: "connected sucessfully"})
        }
    }catch(err){
        throw err; 
    }
})
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}!!`);
});
