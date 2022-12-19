import Employer from "../models/employer.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const getAll=async()=>{
  try {
    const employers=await Employer.find();
    
    return resultMessage.successMessage(200,"employers listed.",employers);
  } catch (error) {
    return resultMessage.errorMessage(400,"error.",error);
  }
}
