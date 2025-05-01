import mongoose from "mongoose";
const userschema = new mongoose.Schema({
   email:{
    type:"string",
    requird:true,
    unique:true
   },

   firstName:{
    type:"string",
    requird:true

   },
   lastName:{

    type:"string",
    requird:true
   },
   role:{
    type:"string",
    requird:true,
    default:"user"
   },
   password:{
    type:"string",
    requird:true,
   },
   phone:{
    type:"string",
    requird:true,
    default:"not given"
   },
   isDisabled:{
    type:Boolean,
    requird:true,
    default:false
   },

   isEmailverifed:{
    type:Boolean,
    requird:true,
    default:false
   },




}


)
const User = mongoose.model("users",userschema)
export default User;


