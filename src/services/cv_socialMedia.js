import Cv_SocialMedia from "../models/cv_socialMedia.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {linkedinUrl,githubUrl,candidateId}=body;
    const socialMedia= await Cv_SocialMedia.create({
      linkedinUrl,
      githubUrl,
      candidateId
    });

    return resultMessage.successMessage(201,"socialmedia is added.",socialMedia);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId}=body.query;
    const socialMedia=await Cv_SocialMedia.find({candidateId})
    return  resultMessage.successMessage(201,"socialmedia is listed by candidate.",socialMedia);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}