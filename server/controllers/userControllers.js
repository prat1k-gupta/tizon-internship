const user = require("../Models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const business = require("../Models/businessSchema");
exports.registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "please enter the required fields" });
  }
  const userExist = await user.findOne({ email });
  if (userExist) {
    return res.status(422).json({ error: "user already exist" });
  }

  const newUser = new user({ name, email, password, pic });

  try {
    const saveUser = await newUser.save();
    if (saveUser) {
      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(422).json({ error: "Error occured" });
    }
  } catch (err) {
    throw err;
  }
};

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "please enter the required field " });
  }

  const currentUser = await user.findOne({ email });

  if (!currentUser) {
    return res.status(422).json({ error: "user doesn't exist" });
  }

  const isCorrect = await bcrypt.compare(password, currentUser.password);

  if (isCorrect) {
    const token = await currentUser.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: false,
    });
    return res.status(201).json({
      name: currentUser.name,
      email: currentUser.email,
      pic: currentUser.pic,
    });
  } else {
    return res.status(422).json({ error: "Invalid Credentials" });
  }
};

exports.addBusiness = async (req, res) => {
  //request token from cookies

  const {
    businessname,
    description,
    facebook,
    instagram,
    linkedin,
    phone,
    logo,
    pics,
    twitter,
    website,
    ytlinks,
  } = req.body;

  let token = req.cookies.jwtoken;
  const verify = await jwt.verify(token, process.env.SECRET_KEY);
  
  const userid = verify._id;
  const newBusiness = new business({
    businessname,
    description,
    facebook,
    instagram,
    linkedin,
    phone,
    logo,
    pics,
    twitter,
    website,
    ytlinks,
    userid,
  });
  try {
    const saveBusiness = await newBusiness.save();
    if (saveBusiness) {
      return res.status(201).json({ message: "business is saved" });
    }
  } catch (err) {
    console.log("this is error is from business");
    console.log(err);
  }

  res.status(200).json({ message: "done" });
};

exports.editBusiness = async (req,res)=>{
  const userId = req.userID; 
  const {
    businessname,
    description,
    facebook,
    instagram,
    linkedin,
    phone,
    logo,
    pics,
    twitter,
    website,
    ytlinks
  } = req.body;

  const currentUser = await business.findOne({userid: userId}); 
  try{
    currentUser.businessname = businessname || currentUser.businessname; 
    currentUser.description = description || currentUser.description; 
    currentUser.facebook = facebook || currentUser.facebook; 
    currentUser.instagram = instagram || currentUser.instagram; 
    currentUser.linkedin = linkedin || currentUser.linkedin; 
    currentUser.phone = phone || currentUser.phone; 
    currentUser.logo = logo || currentUser.logo; 
    currentUser.twitter = twitter || currentUser.twitter; 
    currentUser.website = website || currentUser.website; 
    currentUser.ytlinks = ytlinks || currentUser.ytlinks; 
    if(pics.length !== 0){
      currentUser.pics = pics;  
    } 
    const response = await currentUser.save(); 
    res.send(response)

  }catch(err){
    console.log(err); 
  }


}


exports.editProfile = async(req,res)=>{
  const userId = req.userID;
  const currentUser = await user.findOne({_id: userId}); 
  const {name,email,currentpassword,newpassword} = req.body;  
  if(currentpassword){
    const isCorrect = await bcrypt.compare(currentpassword, currentUser.password);
    if(!isCorrect){
      return res.status(404).json({error: "current password incorrect!!"})
    }
  }
  try{
    currentUser.name = name || currentUser.name
    currentUser.email = currentUser.email
    if(newpassword){
      currentUser.password = newpassword || currentUser.password
    }
    const response = await currentUser.save(); 
    res.send(response)
  }catch(err){
    console.log(err); 
  }

}