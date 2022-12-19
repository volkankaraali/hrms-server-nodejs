import { add, getAllByCandidate } from "../services/cv_image.js";

export const addCvImage=async(req,res)=>{

  try {
    
    const imageService = await add(req.body);
    res.json(imageService);
  } catch (error) {
    res.json(error)
  }
};

export const getAllImagesByCandidate=async(req,res)=>{
  try {
    
    const imageService = await getAllByCandidate(req);
    res.json(imageService);

  } catch (error) {
    res.json(error)
  }
}