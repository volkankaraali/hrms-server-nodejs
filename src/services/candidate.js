import Candidate from "../models/candidate.js"
import cvDto from "../models/dtos/cvDto.js";

import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const getAll=async()=>{
  try {
    const candidates=await Candidate.find();
    return resultMessage.successMessage(200,"candidates listed.",candidates);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
} 


export const getCv=async(body)=>{
  try {
    //cvDto gets param as userId
    const {candidateId:userId}=body.query;
    const cv=await cvDto(userId);
    return resultMessage.successMessage(200,"candidate cv is listed.",cv)

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}