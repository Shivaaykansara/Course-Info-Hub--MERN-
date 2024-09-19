const mongoose = require('mongoose')
const URI = process.env.MONGO_URI

const connectDb = async()=>{
    try {
         await mongoose.connect(URI)
            console.log("connection established")
        
    } catch (error) {
        console.log("Error while establishing connection")
    }
}

module.exports= connectDb