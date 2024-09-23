const adminMiddleware = async(req,res,next)=>{
    try {
        const AdminRole = req.user.isAdmin;
        if(!AdminRole){
           return res.status(400).send("You can;t access this page as you are not an admin")
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware