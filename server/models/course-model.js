const {Schema , model} = require('mongoose')

const courseSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const CourseModel = new model('Course',courseSchema)

module.exports = CourseModel