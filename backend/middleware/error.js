const ErrorHandler = require('../utils/errorHandler')
module.exports = (err,req,res,next)=>{
    
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error"

    //mongodb id error || castError
    if (err.name === "CastError") {
        const message = `Resource not found. invalid: ${err.path} `
        err = new ErrorHandler(message,400)
    }

    //mongodb duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message,400)
    }

    //wrong jwt error
    if (err.name === "jsonWebTokenError") {
        const message = `Json web token is Invalid ,Try again`
        err = new ErrorHandler(message,400)
    }

    //jwt expire error
    if (err.name === "TokenExpiredError") {
        const message = `Json web token is Expired ,Try again`
        err = new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}
