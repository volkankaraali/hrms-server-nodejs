import { add, getAll } from "../services/city.js";

export const addCity=async(req,res)=>{

  try {
    
    const cityService=await add(req.body);
    res.json(cityService)
    //console.log(cityService)

  } catch (error) {
    res.json(error)
  }
};

export const getAllCity=async(req,res)=>{
  try {
    
    const cityService=await getAll();
    res.json(cityService);

  } catch (error) {
    res.json(error);
  }
}