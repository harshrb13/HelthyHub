const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsycnError')
const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto');
const getDataUri = require('../utils/dataUri');
const cloudinary = require('cloudinary')

//Register user
exports.createUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const file = req.file;
    const fileUri = getDataUri(file)
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content)
    await User.create({
        name, email, password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        }
    })

    res.status(200).json({
        success:true,
        message:"Registration Successfull"
    })
})

//login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 401))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email & password", 401))
    }

    const isPasswordCorrect = await user.comparePassword(password);


    if (!isPasswordCorrect) {
        return next(new ErrorHandler("Invalid email & password", 400))
    }

    sendToken(user, 200, res)

})

//logout user
exports.logoutUser = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie('token', null, {
        expires: new Date(
            Date.now()
        ),
        httpOnly:true,
        secure:true,
        sameSite:'none'
        
    }).json({
        success: true,
        message: "logged out"
    })
})

// forgot passsword
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("user not found", 404))
    }

    //get reset token
    const resetToken = user.getResetPaswordToken();

    await user.save({ validateBeforeSave: false });
    const resetPasswordUrl = `${process.env.CLIENT_URL}/reset/${resetToken}`

    const message = `your password reset token is : \n\n${resetPasswordUrl} \n\n if you are not requested,Please ignore it`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Helthyhub password recovery`,
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })
        next(error)
    }
})


//reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler("Reset password token is Invalid or has been expired", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Both password does not matched", 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save()
    res.status(200).json({
        success:true,
        message:'Password reset successfully'
    })
})


// user detail 

exports.getUserDetail = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    })
})

//update user password
exports.updatePassword = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");
  
    
    const ispassowrdMatched = await user.comparePassword(req.body.oldPassword);

    if (!ispassowrdMatched) {
        return next(new ErrorHandler("Old passowrd is incorrect", 400))
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler('password does not matched',400))
    }
    user.password = req.body.newPassword;

    await user.save()
    
   sendToken(user,200,res)
})


// update user profile 
exports.updateProfile = catchAsyncError(async(req,res,next)=>{
    const newUserData = {
        name:req.body.name,
        email:req.body.email
    }

    //add cloudinary soon

    const user =await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators: true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
        user
    })

})