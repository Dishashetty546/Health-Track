import mongoose from "mongoose";
//Patientdetails
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    father:{
        type:String
    },
    mother:{
        type:String
    },
    email:{
        type:String

    },
    phone:{
        type:String
    }

},{timestamps:true})
const UserModels= mongoose.m('user',userSchema)
export default UserModels;