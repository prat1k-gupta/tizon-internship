const userStats = require('../Models/statsSchema')

exports.getStats = async (req, res) => {
  const id = await req.userID;
  const connectedPeople = await userStats.find({ userid : id });
//   console.log(connectedPeople)
  res.send(connectedPeople);
};

exports.connectMe = async (req, res) => {
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
};