const {Schema, model} = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
 const userSchema = new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
 })

 userSchema.pre('save',async function(next){
    const user = this
    const saltRound = await bcryptjs.genSalt(10);
    try {
        const hashPassword = await bcryptjs.hashSync(user.password,saltRound)
        user.password = hashPassword
    } catch (error) {
        next(error)
    }
 })


 userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.JWT_TOKEN,
        {
            expiresIn:'10d'
        }
    )
    } catch (error) {
        console.log(error)
    }
 }

 userSchema.methods.comparePassword = async function(password){
    return bcryptjs.compare(password,this.password)
 }

 const UserModel = new model('User',userSchema)

 module.exports = UserModel