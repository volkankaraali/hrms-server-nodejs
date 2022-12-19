import { add, getAllByCandidate } from "../services/cv_experince.js";

export const addCvExperience=async(req,res)=>{

  try {
    
    const experinceService = await add(req.body);
    res.json(experinceService);

  } catch (error) {
    res.json(error)
  }
};


export const getAllExperienceByCandidate=async(req,res)=>{
  try {
    
    const experinceService = await getAllByCandidate(req)
    res.json(experinceService);

  } catch (error) {
    res.json(error)
  }
}