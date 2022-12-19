import JobPosition from "../models/jobPosition.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {jobName}=body;

    const checkJobPosition=await JobPosition.findOne({jobName})
  
    if(checkJobPosition){
      return resultMessage.errorMessage(403,"duplicate value.",jobName);
    }

    await JobPosition.create({
      jobName
    });
    
    return resultMessage.successMessage(200,"job position created.",jobName);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }

};

export const getAll=async()=>{
  try {
    const jobPositions=await JobPosition.find();
    return resultMessage.successMessage(200,"job positions listed.",jobPositions);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);

  }
}

