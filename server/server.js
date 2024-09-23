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


const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        'https://course-info-hub-mern.onrender.com',
        'https://superb-dodol-85b8a8.netlify.app',

      ];
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/form',contactRouter)
app.use('/api/info',courseRouter)
app.use('/api/admin',adminRouter)

app.use(errorMiddleware)

const port = process.env.PORT || 5000
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`listening on Port ${port}`)
    })
})
    


