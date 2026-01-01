const User= require('../models/user.model')
const bcrypt = require("bcryptjs");


const registerUser= async(req,res)=>{
    try{
        //if all fields 
const{name, email,password}=req.body;
console.log(req.body);

if(!name || !email || !password){
    return res.status(400).json({message:"All fields required"})
}
//if user already exists

const userExists= await User.findOne({email})
if(userExists){
    return res.status(409).json({message:"User already exists"})
}
const hashedPassword= await bcrypt.hash(password,10)
await User.create({
    name,
    email,
    password:hashedPassword
})
res.status(201).json({
    message:"User Registered Successfully"
})
    }catch(error){
res.status(500).json({
    message:"server error",
    error:error.message
})
    }
}

module.exports={registerUser}