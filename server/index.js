//server port 3000
//dot env port
//home route "server is running"
const express = require("express");
const stats = require("./data/stats");
const jwt = require("jsonwebtoken")
const connectDB = require("./config/connectDB");

require("dotenv").config();
// console.log(connectDB);
const statsRoutes = require('./routes/statsRoutes')
const userRoutes = require("./routes/userRoutes");
const userStats = require("./Models/statsSchema");
const business = require("./Models/businessSchema");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const authenticate = require("./middlewares/authenticate");
const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.post("/api/connect", async (req, res) => {
  const { name, businessname, website, phone, email, instagram, userid } =
    req.body;

  const newStats = new userStats({
    name,
    businessname,
    website,
    phone,
    email,
    instagram,
    userid,
  });

  try {
    const saveStats = newStats.save();
    if (saveStats) {
      return res.status(201).json({ message: "Thanks for connecting" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.use("/api/users", userRoutes);

app.use('/api/authorized',authenticate,(req,res)=>{
  res.status(200).json({message: "authenticated"});
})
app.post("/api/user/:id", async (req, res) => {
  const id = req.params.id;
  var findBusinessProfile = await business
    .findOne({ _id: id })
    .populate("userid");

  findBusinessProfile.userid.password = undefined;
  findBusinessProfile.userid.token = undefined;

  res.send(findBusinessProfile);
});

app.use("/api/stats",statsRoutes);

app.get("/api/logout",(req,res)=>{
  res.clearCookie('jwtoken',{path:'/'}); 
  res.status(200).json({message: "logged out!!"})
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}!!`);
});