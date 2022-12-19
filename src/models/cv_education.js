import mongoose from "mongoose";
import Candidate from "./candidate.js";
import Cv_EduGraduateType from "./cv_eduGraduateType.js";

const cv_educationScheme = mongoose.Schema({
  schoolName:{
    type:String
  },
  department:{
    type:String
  },
  startedDate:{
    type:Date
  },
  endedDate:{
    type:Date
  },
  createdDate:{
    type:Date,
    default:new Date()
  },
  graduateTypeId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Cv_EduGraduateType
  },
  candidateId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Candidate
  }
  
})

const Cv_Education = mongoose.model("cv_educations",cv_educationScheme);

export default Cv_Education;