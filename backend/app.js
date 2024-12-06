const express = require('express')
const dotenv = require('dotenv')
const app = express();
const errorMiddleware = require('./middleware/error')
const cors  = require('cors')
const cookieParser = require('cookie-parser')

// configration of .env
dotenv.config({path:"./config/.env"})

//json middleware
app.use(express.json())

//define cors
const corsOptions = {
    origin:process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true
}
app.use(cors(corsOptions))

app.use(cookieParser())

//define routes
const userRoute = require('./routes/userRoute')

app.use('/api/v1/',userRoute)

//error middleware
app.use(errorMiddleware)

module.exports = app;