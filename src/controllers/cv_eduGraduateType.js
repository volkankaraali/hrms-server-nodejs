import { add, getAll } from "../services/cv_eduGraduateType.js";

export const addCvEduGraduateType=async(req,res)=>{

  try { 
    const eduGradTypeService = await add(req.body);
    res.json(eduGradTypeService);

  } catch (error) {
    res.json(error);
  }
};


export const getAllEduGraduateType=async(req,res)=>{
  try {
    const eduGradTypeService= await getAll();
    res.json(eduGradTypeService);
  } catch (error) {
    res.json(error);
  }
}