import { add, getAllByCandidate } from "../services/cv_education.js";

export const addCvEducation=async(req,res)=>{

  try {
    const educationService = await add(req.body);
    res.json(educationService);
    
  } catch (error) {
    res.json(error);
  }
};

export const getAllEducationByCandidate=async(req,res)=>{
  try {
    const educationService=await getAllByCandidate(req);
    res.json(educationService);
  } catch (error) {
    res.json(error);
  }
}