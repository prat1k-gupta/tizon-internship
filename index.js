//server port 3000
//dot env port
//home route "server is running"
const express = require("express");
const stats = require("./server/data/stats");
const jwt = require("jsonwebtoken")
const connectDB = require("./server/config/connectDB");
const vCardJs = require('vcards-js')
require("dotenv").config();
// console.log(connectDB);
const statsRoutes = require('./server/routes/statsRoutes')
const userRoutes = require("./server/routes/userRoutes");
const userStats = require("./server/Models/statsSchema");
const business = require("./server/Models/businessSchema");
const path = require("path");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const authenticate = require("./server/middlewares/authenticate");
const app = express();
const vcard = vCardJs(); 

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



//user routes
app.use("/api/users", userRoutes);
//stats routes
app.use("/api/stats",statsRoutes);

//to check authorization
app.use('/api/authorized',authenticate,async (req,res)=>{
  const userid = req.userID; 
  const businessExist = await business.findOne({userid})
  res.status(200).json({userData: {name: req.rootUser.name, email: req.rootUser.email},business: businessExist });
})


// tap card api 
app.get("/api/user/:id", async (req, res) => {
  const id = req.params.id;
  try{
    var findBusinessProfile = await business
      .findOne({ _id: id })
      .populate("userid");

      if (findBusinessProfile) {
        findBusinessProfile.userid.password = undefined;
        findBusinessProfile.userid.token = undefined;
        return res.send(findBusinessProfile);
      }
    }catch(err){
      res.status(404).json({error: "business doesn't exist"})
  }
});

//logout api 
app.get("/api/logout",(req,res)=>{
  res.clearCookie('jwtoken',{path:'/'}); 
  res.status(200).json({message: "logged out!!"})
})


app.post("/api/savecontact",(req,res)=>{
  const{name,logo,phone,email,website} = req.body;
  vcard.firstName = name; 
  vcard.photo.attachFromUrl(
    logo,
    "JPEG"
  );
  vcard.email = email;
  vcard.workPhone = phone;
  vcard.workUrl = website;
  res.send(vcard.getFormattedString()); 
})
// app.get('/api/business',authenticate,async (req,res)=>{
//   try{
//     const businessExist = await business.findOne({userid: req.userID});
//     if(businessExist){
//       return res.send(businessExist); 
//     }
//   }catch(err){
//     console.log(err); 
//   }
// })
//server running here
// ----------deployment---------------------------

if(process.env.NODE_ENV === "production"){
  console.log(path.join(__dirname, "client", "build", "index.html"))
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

// ----------deployment---------------------------

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}!!`);
});