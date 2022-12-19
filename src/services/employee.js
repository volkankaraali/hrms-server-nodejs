import Employee from "../models/employee.js";
import EmployeeConfirm from "../models/employeeConfirm.js";
import EmployeeConfirmEmployer from "../models/employeeConfirmEmployer.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const confirm=async(body)=>{
  try {
    const {employeeId,employerId}=body;
    const date=new Date();

    const employeeConfirm = await EmployeeConfirm.create({
      employeeId,
      isConfirmed:true,
      confirmDate:date
    });

    const employeeConfirmEmployer= await EmployeeConfirmEmployer.create({
      employeeConfirmId:employeeConfirm._id,
      employerId
    });
    

    return resultMessage.successMessage(200,"employer confirmed.",{employeeConfirm,employeeConfirmEmployer});
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}

export const getAll=async()=>{
  try {
    const employees=await Employee.find();

    return  resultMessage.successMessage(200,"employees listed.",employees);
  
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}
