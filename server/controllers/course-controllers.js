
const CourseModel = require("../models/course-model")

const course = async(req,res)=>{
    try {
        const {name,category,description,price,image} = req.body
        const courseExist = await CourseModel.findOne({name})
        if(courseExist){
             res.status(400).json('Course Already registered')
        }

        const createCourse = await CourseModel.create({
            name,
            image,
            category,
            description,
            price
        })

        res.status(200).json({createCourse})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const courses = async(req,res)=>{
    try {
        const data = await CourseModel.find()
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

module.exports = {courses,course}