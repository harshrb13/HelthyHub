
const app = require('./app')
const connectDatabase = require('./config/database');
const PORT = process.env.PORT || 3000;
const cloudinary = require('cloudinary')


//handle uncaught error
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log("Shuting down server due to uncaughtException")

    process.exit(1)
})



//configration of cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API,
    api_secret:process.env.CLOUDINARY_SECRET
})

//connecting databse
connectDatabase()

//listen server on port
const server = app.listen(PORT,()=>{
    console.log(`connection success on http://localhost:${PORT}`)
})

//unhandled promise rejection
process.on('unhandledRejection',err =>{
    console.log(`Error: ${err.message}`);
    console.log("Shuting down server due to unhandled server Rejection")

    server.close(()=>{
        process.exit(1)
    })
})