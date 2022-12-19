import Cv_Language from "../models/cv_language.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {name,level,candidateId}=body;
    const language= await Cv_Language.create({
      name,level,candidateId
    });

    return resultMessage.successMessage(201,"language is added.",language);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId}=body.query;
    const language=await Cv_Language.find({candidateId})
    return resultMessage.successMessage(200,"languages listed by candidate.",language);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}