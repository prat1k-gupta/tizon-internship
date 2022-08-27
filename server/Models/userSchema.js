const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config(); 
const userSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true
        },
        password: { 
            type: String, 
            required: true
        }, 
        pic:{
            type: String,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        },
        token: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

userSchema.pre('save',async function(){
    if(this.isModified('password')){
        this.password = await bcrypt.hashSync(this.password,12); 
    }
})

userSchema.methods.generateAuthToken = async function(){
    const SECRET_KEY = process.env.SECRET_KEY;
    try{
        let token = jwt.sign({_id: this._id,name: this.name}, SECRET_KEY); 
        this.token =  token;
        this.save(); 
        return token; 
    }catch(err){
        throw err; 
    }
} 

const user = mongoose.model("user",userSchema)

module.exports = user; 