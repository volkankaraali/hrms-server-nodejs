import { add,getAll, getAllByJobAdvertId } from "../services/jobAdvert_application_candidate.js";


export const addApplication=async(req,res)=>{
  try {
    const applicationService=await add(req);
    res.json(applicationService);
  } catch (error) {
    res.json(error);
  }
}


export const getAllApplication=async(req,res)=>{
  try {
    const applicationService=await getAll();
    res.json(applicationService);
  } catch (error) {
    res.json(error);
  }
}

export const getAllByJobAdvert=async(req,res)=>{
  try {
    const applicationService=await getAllByJobAdvertId(req);
    res.json(applicationService);
  } catch (error) {
    res.json(error);
  }
}