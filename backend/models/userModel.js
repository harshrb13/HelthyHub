const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name connot exceed 30 characters"],
        minLength:[4,"Name should have more than 4 characters"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Pleasse enter your password"],
        minLength:[8,"Password must be greaterthan 8 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken : String,
    resetPasswordExpire: Date
})

//hash Password using bcrypt
userSchema.pre('save',async function(next){
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

//create json web token while register
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

//compare login password
userSchema.methods.comparePassword = async function(entredPassword){
    return await bcrypt.compare(entredPassword,this.password)
}

//generate reset password token
userSchema.methods.getResetPaswordToken = function(){

    //generate reset token
   const resetToken = crypto.randomBytes(20).toString('hex')

   //adding resetPassword token in the useSchema
   this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    
   return resetToken;
}
module.exports = new mongoose.model("User",userSchema)