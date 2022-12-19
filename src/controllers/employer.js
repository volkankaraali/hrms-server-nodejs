import { getAll } from "../services/employer.js"

export const getAllEmployer=async(req,res)=>{
  try {
    const employerService=await getAll()
    res.json(employerService)
  } catch (error) {
    res.json(error)
  }
}