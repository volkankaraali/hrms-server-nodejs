import Cv_Image from "../models/cv_image.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {imageUrl,candidateId}=body;
    const image= await Cv_Image.create({
      imageUrl,
      candidateId
    });

    return resultMessage.successMessage(201,"image is added.",image);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId}=body.query;
    const images=await Cv_Image.find({candidateId})
    return resultMessage.successMessage(200,"images listed by candidate.",images);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}