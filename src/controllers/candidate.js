import mongoose from "mongoose";
import User from "../models/user.js";
import { getAll, getCv } from "../services/candidate.js"

export const getAllCandidates=async(req,res)=>{
  try {
    
    const candidateService=await getAll();
    res.json(candidateService);

  } catch (error) {
    res.json(error);
    
  }
}

export const getCvByCandidate=async(req,res)=>{
  try {

    const candidateService =await getCv(req);
    res.json(candidateService);
    
  } catch (error) {
    res.json(error)
  }
}