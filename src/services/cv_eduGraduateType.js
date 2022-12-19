import Cv_EduGraduateType from "../models/cv_eduGraduateType.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {name}=body;
    const educationGradudateType= await Cv_EduGraduateType.create({
      name
    });

    return resultMessage.successMessage(201,"education type is added.",educationGradudateType);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAll=async()=>{
  try {
    
    const eduGradudateTypes=await Cv_EduGraduateType.find();
    return resultMessage.successMessage(201,"education types is listed.",eduGradudateTypes);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);

  }
}