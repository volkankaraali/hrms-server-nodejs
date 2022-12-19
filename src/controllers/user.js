import { getAll, me, verify } from "../services/user.js";

export const getAllUser=async(req,res)=>{
  try {
    const userService= await getAll();
    res.json(userService);
  } catch (error) {
    res.json(error)
  }
}


export const verifyEmail=async(req,res)=>{
  try {

    const userService=await verify(req.params.token)
    res.json(userService); 

  } catch (error) {
    res.json(error)
  }
}

export const getMe=async(req,res)=>{
  try {
    const userService=await me(req)
    res.json(userService)
  } catch (error) {
    res.json(error)
  }
}