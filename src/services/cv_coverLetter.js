import Cv_CoverLetter from "../models/cv_coverLetter.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {text,candidateId}=body;

    const coverLetter=await Cv_CoverLetter.create({
      text,
      candidateId
    });
    
    return resultMessage.successMessage(200,"cover letter is added.",coverLetter);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId}=body.query;
    const coverLetters=await Cv_CoverLetter.find({candidateId})
    return resultMessage.successMessage(200,"cover letters is listed by candidate.",coverLetters); 
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}