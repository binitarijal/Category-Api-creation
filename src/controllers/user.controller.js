const User= require('../models/user.model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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


const userLogin= async(req,res)=>{

try{

    const {email,password}= req.body;
    console.log(req.body)
    // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // 2. Compare passwords (Hashed vs Plain Text)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // 3. Create a JWT Token
        const token = jwt.sign(
            { userId: user._id }, 
            'YOUR_SECRET_KEY', 
            { expiresIn: '1h' }
        );

        // 4. Send success response
        res.status(200).json({
            message: "Login successful",
            token: token,
            user: { id: user._id, name: user.name }
        });
}catch(error){
res.status(500).json({ message: "Server Error" });
}

}




module.exports={registerUser,userLogin}