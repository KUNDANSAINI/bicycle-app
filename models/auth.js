import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    is_Admin:{
        type:Boolean,
        default:false
    },
    personalDetails:{
        fatherName:String,
        dob:Date,
        gender:String,
        primaryAdderss:String,
        secondaryAddress:String
    },
    bankDetails:{
        accountno:String,
        holderName:String,
        ifce:String,
        branch:String
    }
})


const Auth = mongoose.models.Auth || mongoose.model("Auth",authSchema)

export default Auth;