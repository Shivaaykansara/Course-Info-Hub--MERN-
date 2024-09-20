const jwt = require('jsonwebtoken')
const UserModel = require('../models/user-model')

const authMiddleware = async(req,res,next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(400).json({msg:"Unauthorized HTTP, token not provided"})
    }

    const jwtToken = token.replace("Bearer","").trim()
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_TOKEN)
        const userData = await UserModel.findOne({email:isVerified.email}).select({password:0})
        req.user = userData
        req.token = token
        req.userId = userData._id
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = authMiddleware