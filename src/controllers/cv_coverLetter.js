import { add, getAllByCandidate } from "../services/cv_coverLetter.js";

export const addCvCoverLetter=async(req,res)=>{

  try {
    
    const coverLetterService = await add(req.body)
    res.json(coverLetterService)

  } catch (error) {
    res.json(error)
  }
};

export const getAllEducationByCandidate=async(req,res)=>{
  try {
    const coverLetterService=await getAllByCandidate(req);
    res.json(coverLetterService);
  } catch (error) {
    res.json(error);
  }
}