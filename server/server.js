require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./routers/auth-router')
const contactRouter = require('./routers/contact-router')
const connectDb = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/form',contactRouter)

app.use(errorMiddleware)
connectDb().then(()=>{
    app.listen(5000,()=>{
        console.log('listening on Port 5000')
    })
})
    


