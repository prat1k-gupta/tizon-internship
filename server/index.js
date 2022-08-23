//server port 3000
//dot env port
//home route "server is running"
const express = require("express");
const stats = require("./data/stats");
const connectDB = require("./config/connectDB");
require("dotenv").config();
// console.log(connectDB);
const app = express();
connectDB();

app.get("/api/stats", (req, res) => {
  res.send(stats);
});

app.get("/api/stats/:id", (req, res) => {
  const statsCard = stats.find((s) => req.params.id == s.id);
  res.send(statsCard);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}!!`);
});
