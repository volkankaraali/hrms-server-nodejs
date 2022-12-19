
import { add,updateIsActive,getAll, getAllByEmployerId } from "../services/jobAdvert.js";

export const addJobAdvert=async(req,res)=>{

  try {
    
    const jobAdvertService=await add(req.body);
    res.json(jobAdvertService);

  } catch (error) {
    res.json(error)
  }
};


export const getAllJobAdverts=async(req,res)=>{
  try {
    const jobadvertService=await getAll(req);
    res.json(jobadvertService)

  } catch (error) {
    res.json(error)
  }
}

export const getAllJobAdvertsByEmployerId=async(req,res)=>{
  try {
    const jobadvertService=await getAllByEmployerId(req);
    res.json(jobadvertService)

  } catch (error) {
    res.json(error)
  }
}

export const updateIsActiveById=async(req,res)=>{
  try {
    const jobAdvertService=await updateIsActive(req.body)
    res.json(jobAdvertService)
  } catch (error) {
    res.json(error)
  }
}