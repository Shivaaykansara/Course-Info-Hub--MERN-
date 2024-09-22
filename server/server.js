require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const authRouter = require('./routers/auth-router')
const contactRouter = require('./routers/contact-router')
const courseRouter = require('./routers/course-router')
const adminRouter = require('./routers/admin-router')
const connectDb = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')

const corsOption = {
    origin:'http://localhost:5173',
    methods:'GET, PUT, POST, PATCH, DELETE, HEAD',
    credentials:true
}

app.use(cors(corsOption))

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/form',contactRouter)
app.use('/api/info',courseRouter)
app.use('/api/admin',adminRouter)

app.use(errorMiddleware)
connectDb().then(()=>{
    app.listen(5000,()=>{
        console.log('listening on Port 5000')
    })
})
    


