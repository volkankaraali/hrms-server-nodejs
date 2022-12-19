import { login } from "../services/login.js";



export const loginUser=async (req,res)=>{

  try {

    const loginService=await login(req.body);
    res.json(loginService);

  } catch (error) {
    res.json(error)
  }

};