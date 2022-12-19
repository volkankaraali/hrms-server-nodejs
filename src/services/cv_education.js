import Cv_Education from "../models/cv_education.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {schoolName,department,startedDate,endedDate,graduateTypeId,candidateId}=body;
    const education=await Cv_Education.create({
      schoolName,
      department,
      startedDate,
      endedDate,
      graduateTypeId,
      candidateId
    });
    
    return resultMessage.successMessage(201,"education created.",education);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByCandidate=async(body)=>{
  try {
    const {candidateId,dateSortBy="desc"}=body.query;
    const educations=await Cv_Education.find({candidateId}).sort({endedDate:dateSortBy});

    return resultMessage.successMessage(200,"educations listed by candidate.",educations);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}