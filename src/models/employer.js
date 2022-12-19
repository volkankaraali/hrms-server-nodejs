import mongoose from "mongoose";
import User from "./user.js";
const employerScheme = mongoose.Schema({
  companyName:{
    type:String,
    unique:true
  },
  webAdress:{
    type:String,
  },
  phoneNumber:{
    type:String,
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },

})

const Employer = mongoose.model("Employers",employerScheme);

export default Employer;