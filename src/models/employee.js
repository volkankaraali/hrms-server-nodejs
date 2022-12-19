import mongoose from "mongoose";
import User from "./user.js";
const employeeScheme = mongoose.Schema({
  firstName:{
    type:String,
    unique:true
  },
  lastName:{
    type:String,
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },

})

const Employee = mongoose.model("Employees",employeeScheme);

export default Employee;