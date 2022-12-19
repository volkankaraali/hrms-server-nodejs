import { addCandidateUser, addEmployeeUser, addEmployerUser } from "../services/register.js";


export const registerCandidateUser=async(req,res)=>{
  
  try {
    const registerService=await addCandidateUser(req.body);
    res.json(registerService);
  } catch (error) {
    res.json(error)
  }

};

export const registerEmployerUser=async(req,res)=>{
  try {
    const registerService=await addEmployerUser(req.body);
    res.json(registerService);
  } catch (error) {
    res.json(error)
  }
};

export const registerEmployeeUser=async(req,res)=>{
  try {
    const registerService=await addEmployeeUser(req.body);
    res.json(registerService);
  } catch (error) {
    res.json(error)
  }
};