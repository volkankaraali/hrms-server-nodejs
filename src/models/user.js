import mongoose from "mongoose";

const userScheme = mongoose.Schema({
  userName:{
    type:String,
    unique:true
  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String,
    minlength:6,
  },
  createdAt:{
    type:Date,
    default:new Date(),
  }
})

const User = mongoose.model("Users",userScheme);

export default User;