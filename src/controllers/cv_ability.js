
import { add, getAllByCandidate } from "../services/cv_ability.js";

export const addCvAbility=async(req,res)=>{

  try {
    const cvAbilityService= await add(req.body);
    res.json(cvAbilityService)

  } catch (error) {
    res.json(error)
  }
};

export const getAllEducationByCandidate=async(req,res)=>{
  try {
    const cvAbilityService=await getAllByCandidate(req);
    res.json(cvAbilityService);
  } catch (error) {
    res.json(error);
  }
}