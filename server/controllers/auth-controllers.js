const UserModel = require("../models/user-model");

const register = async(req,res)=>{
    try {
        const {username,email,phone,password} = req.body;
        const userExisted = await UserModel.findOne({email})

        if(userExisted){
            res.status(400).json({msg:"Email already existed please login"})
        }

        const userCreated = await UserModel.create({
            username,
            email,
            phone,
            password
        })
        res.status(200).json({msg:"Registered Successfully",token:await userCreated.generateToken(),userId:userCreated._id.toString()})        
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExisted = await UserModel.findOne({email})
        if(!userExisted){
           return res.status(400).json({msg:"Invalid credentials"})
        }

        const user = await userExisted.comparePassword(password)
        if(user){
           res.status(200).json({
            msg:"Login Successfully",
            token:await userExisted.generateToken(),
            userId:userExisted._id.toString()
           }) 
        }
        else{
            res.status(400).json({msg:"Invalid email or password"})
        }      
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const user = async(req,res)=>{
    try {
        const userData = req.user;
        return res.status(200).json({userData})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

module.exports = {register,login,user}