import mongoose from "mongoose";
import EmployeeConfirm from "./employeeConfirm.js";
import Employer from "./employer.js";
const employeeConfirmEmployerScheme = mongoose.Schema({
  
  employeeConfirmId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:EmployeeConfirm
  },
  employerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Employer
  },
  

})

const EmployeeConfirmEmployer = mongoose.model("Employee_confirm_employers",employeeConfirmEmployerScheme);

export default EmployeeConfirmEmployer;