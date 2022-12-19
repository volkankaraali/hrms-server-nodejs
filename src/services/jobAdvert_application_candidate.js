import Job_Advert_Application_Candidate from "../models/jobAdvert_application_candidate.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    const {candidateId,jobAdvertId}=body.query;
    
    const oldApplication=await Job_Advert_Application_Candidate.find({candidateId,jobAdvertId});
    if(oldApplication){
      return resultMessage.errorMessage(400,"already applied.",null)
    };

    const application= await Job_Advert_Application_Candidate.create({
      candidateId,
      jobAdvertId
    });

    return resultMessage.successMessage(200,"application is succesful",application);

  } catch (error) {
    return resultMessage.errorMessage(400,"error.",error);
  }
}

export const getAll=async(body)=>{
  try {
    
    const allApplications=await Job_Advert_Application_Candidate.find();
    return resultMessage.successMessage(200,"all application is listed",allApplications);

  } catch (error) {
    return resultMessage.errorMessage(400,"error.",error);
  }
}

export const getAllByJobAdvertId=async(body)=>{
  try {
    const {jobAdvertId}=body.query;
    const allApplications=await Job_Advert_Application_Candidate.find({jobAdvertId});
    return resultMessage.successMessage(200,"all application is listed",allApplications);

  } catch (error) {
    return resultMessage.errorMessage(400,"error.",error);
  }
}
