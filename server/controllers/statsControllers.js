const userStats = require('../Models/statsSchema')
const business = require('../Models/businessSchema')
exports.getStats = async (req, res) => {
  const id = await req.userID;
  const connectedPeople = await userStats.find({ userid : id });
//   console.log(connectedPeople)
  res.send(connectedPeople);
};

exports.connectMe = async (req, res) => {
  var { name, businessname, website, phone, email, instagram,businessid} =
    req.body;
  var userid = ""; 
  try{
    const findBusiness = await business.findOne({_id: businessid.id});
    userid = findBusiness.userid; 
  }catch(err){
    console.log(err); 
  }
  console.log("userid: " + userid); 
  businessid = businessid.id;
  console.log("businessid "+ businessid); 
  const newStats = new userStats({
    name,
    businessname,
    website,
    phone,
    email,
    instagram,
    businessid,
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