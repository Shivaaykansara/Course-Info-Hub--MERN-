const UserModel = require("../models/user-model")
const CourseModel = require('../models/course-model')
const ContactModel = require('../models/contact-model')

const users = async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json({users})
        
    } catch (error) {
        next(error)
    }
}

const coursesInfo = async(req,res)=>{
    try {
        const courses = await CourseModel.find()
        res.status(200).json({courses})
    } catch (error) {
        next(error)
    }
}

const contacts = async(req,res)=>{
    try {
        const contacts = await ContactModel.find()
        res.status(200).json({contacts})
    } catch (error) {
        next(error)
    }
}

const deleteContacts = async(req,res)=>{
    try {
        const param = req.params.id
        await ContactModel.deleteOne({_id:param})
        res.status(200).send("Contact Deleted Successfully")
    } catch (error) {
        next(error)
    }
}

const deleteCoursesInfo = async(req,res)=>{
    try {
        const param = req.params.id
        await CourseModel.deleteOne({_id:param})
        res.status(200).send("Course Deleted Successfully")
    } catch (error) {
        next(error)
    }
}

const deleteUsers = async (req,res)=>{
    try {
        const param = req.params.id;
        await UserModel.deleteOne({_id:param})
        res.status(200).send("User Deleted Successfully")
    } catch (error) {
        next(error)
    }
}

const editUsers = async(req,res)=>{
    try {
        const updatedData = req.body;
        const newData = await UserModel.updateOne({_id:updatedData.id},{$set:updatedData})
        res.status(200).json(newData)
    } catch (error) {
        next(error)
    }
}

const editCourses = async(req,res)=>{
    try {
        const updatedData = req.body;
        const newData = await CourseModel.updateOne({_id:updatedData.id},{$set:updatedData})
        res.status(200).json(newData)
    } catch (error) {
        next(error)
    }
}

module.exports = {users,coursesInfo,contacts,deleteContacts,deleteCoursesInfo,deleteUsers,editUsers,editCourses}