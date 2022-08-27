const userStats = require('../Models/statsSchema')

exports.getStats = async (req, res) => {
  const id = await req.userID;
  const connectedPeople = await userStats.find({ userid : id });
//   console.log(connectedPeople)
  res.send(connectedPeople);
};