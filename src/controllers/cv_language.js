import { add, getAllByCandidate } from "../services/cv_language.js";

export const addCvLanguage=async(req,res)=>{

  try {
    
    const languageService=await add(req.body)
    res.json(languageService)

  } catch (error) {
    res.json(error)
  }
};

export const getAllLanguageByCandidate=async(req,res)=>{

  try {
    
    const languageService=await getAllByCandidate(req)
    res.json(languageService)

  } catch (error) {
    res.json(error)
  }
};
