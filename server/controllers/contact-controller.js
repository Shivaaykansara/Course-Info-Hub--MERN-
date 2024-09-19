const ContactModel = require("../models/contact-model");

const contact = async(req,res)=>{
    try {
        const response = req.body;
        await ContactModel.create(response)
        return res.status(200).json({message:"Message sent successfully"})
    } catch (error) {
        return res.status(500).json({message:"Message not delivered"})
    }
}

module.exports = contact