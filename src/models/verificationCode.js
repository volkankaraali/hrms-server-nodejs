import mongoose from "mongoose";
import User from "./user.js";


//email verify system doenst work now. every new user sets verify true. 
//if you will use email verify check  ./utils/sendVerifyEmail.js . and replace of isVerifid field to false


const verificationCodeScheme = mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },
  verifyCode:{
    type:String,
    unique:true
  },
  isVerified:{
    type:Boolean,
    default:true
  },
  createdAt:{
    type:Date,
    default:new Date(),
  }
})

const Verification_Code = mongoose.model("verification_codes",verificationCodeScheme);

export default Verification_Code;