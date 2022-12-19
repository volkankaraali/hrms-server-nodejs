import Cv_Abilities from "../models/cv_ability.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {name,candidateId}=body;

    const ability=await Cv_Abilities.create({
      name,
      candidateId
    });
    
    return resultMessage.successMessage(200,"ability is created.",ability);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId}=body.query;
    const ability=await Cv_Abilities.find({candidateId})
    return resultMessage.successMessage(200,"ability is listed by candidate.",ability);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}