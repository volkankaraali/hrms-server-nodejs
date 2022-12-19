import { add, getAllByCandidate } from "../services/cv_socialMedia.js";

export const addCvSoacialMedia=async(req,res)=>{

  try {
    
    const socialMediaService=await add(req.body);
    res.json(socialMediaService);

  } catch (error) {
    res.json(error)
  }
};
export const getAllSocialMediaByCandidate=async(req,res)=>{

  try {
    
    const socialMediaService=await getAllByCandidate(req);
    res.json(socialMediaService);

  } catch (error) {
    res.json(error)
  }
};