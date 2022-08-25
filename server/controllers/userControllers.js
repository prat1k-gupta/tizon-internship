const user = require("../Models/userSchema")
const bcrypt = require("bcryptjs")
exports.registerUser = async(req,res)=>{
    const {name , email, password,pic} = req.body;
    
    if(!name || !email || !password){
        return res.status(422).json({error: "please enter the required fields"});
    }
    const userExist = await user.findOne({email});
    if(userExist){
        return res.status(422).json({error: "user already exist"}); 
    }

    const newUser = new user({name,email,password,pic}); 

    try{
        const saveUser = await newUser.save(); 
        if(saveUser){
            res.status(201).json({message: "user registered successfully"})
        }else{
            res.status(422).json({error: "Error occured"})
        }
    }catch(err){
        throw err; 
    }
}

exports.authUser = async (req,res)=>{
    const {email,password} = req.body; 

    if(!email || !password){
        return res.status(422).json({error: "please enter the required field "});
    }

    const currentUser = await user.findOne({email}); 

    if(!currentUser){
        return res.status(422).json({error: "user doesn't exist"})
    }

    const isCorrect = await bcrypt.compare(password,currentUser.password); 
    
    if(isCorrect){
        const token = currentUser.generateAuthToken(); 
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        return res.status(201).json({
            name: currentUser.name,
            email: currentUser.email,
            pic: currentUser.pic
        }); 
    }else{
        return res.status(422).json({error: "Invalid Credentials"}); 
    }

}