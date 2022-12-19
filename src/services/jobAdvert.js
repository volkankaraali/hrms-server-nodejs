import JobAdvert from "../models/jobAdvert.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    const {jobDescription,minSalary,maxSalary,openJobNumber,applicationDeadline,isActive,jobPositionId,cityId,employerId}=body;
    const jobAdvert= await JobAdvert.create({
      jobDescription,
      minSalary,
      maxSalary,
      openJobNumber,
      applicationDeadline,
      isActive,
      jobPositionId,
      cityId,
      employerId
    })

    return resultMessage.successMessage(201,"job advert is added",jobAdvert);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAll=async(body)=>{
  try {

    const {dateSortBy='desc'}=body.query;
    const jobadverts=await JobAdvert.find({isActive:true}).populate("employerId").select("jobDescription openJobNumber applicationDeadline createdDate employerId").sort({createdDate:dateSortBy})

    return resultMessage.successMessage(201,"job adverts listed",jobadverts);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAllByEmployerId=async(body)=>{
  try {
    
    const {employerId,dateSortBy="desc"}=body.query;
    const jobadvert=await JobAdvert.find({isActive:true,employerId}).populate("employerId").select("jobDescription openJobNumber applicationDeadline createdDate employerId").sort({createdDate:dateSortBy});

    return resultMessage.successMessage(201,"job advert listed by employer",jobadvert);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const updateIsActive=async(body)=>{
  try {
    const {jobAdvertId,status}=body;

    const jobAdvert=await JobAdvert.findByIdAndUpdate(jobAdvertId,{isActive:status})

    return resultMessage.successMessage(201,"job advert status is changed.",jobAdvert);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}