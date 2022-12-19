import { confirm,getAll } from "../services/employee.js"

export const confirmEmployer=async(req,res)=>{

  try {
    const employeeService=await confirm(req.body)
    res.json(employeeService)
  } catch (error) {
    res.json(error)
  }
}

export const getAllEmployee=async(req,res)=>{
  try {
    const employeeService=await getAll()
    res.json(employeeService)
  } catch (error) {
    res.json(error)
  }
}