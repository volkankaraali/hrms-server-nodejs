import mongoose from "mongoose";
import Employee from "./employee.js";
const employeeConfirmScheme = mongoose.Schema({
  
  employeeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Employee
  },
  isConfirmed:{
    type:String,
  },
  confirmDate:{
    type:Date,
  }
  

})

const EmployeeConfirm = mongoose.model("Employee_confirms",employeeConfirmScheme);

export default EmployeeConfirm;