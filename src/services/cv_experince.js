import Cv_Experience from "../models/cv_experience.js";

import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {companyName,jobPosition,startedDate,endedDate,candidateId}=body;
    const experience= await Cv_Experience.create({
      companyName,
      jobPosition,
      startedDate,
      endedDate,
      candidateId
    });

    return resultMessage.successMessage(201,"experience is added.",experience); 

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId,dateSortBy="desc"}=body.query;
    const experience=await Cv_Experience.find({candidateId}).sort({endedDate:dateSortBy})
    return resultMessage.successMessage(200,"experiences listed by candidate.",experience);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}