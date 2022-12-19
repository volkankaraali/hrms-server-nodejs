import { add, getAll } from "../services/jobPosition.js";

export const addJobPosition=async(req,res)=>{

  try {
    const jobPositionService=await add(req.body);
    res.json(jobPositionService)
    
  } catch (error) {
    res.json(error)
  }
};

export const getAllJobPositions=async(req,res)=>{
  try {
    const jobPositionService=await getAll();
    res.json(jobPositionService);

  } catch (error) {
    res.json(error)
  }
}