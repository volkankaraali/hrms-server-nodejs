import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_experienceScheme = mongoose.Schema({
  companyName:{
    type:String
  },
  jobPosition:{
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
  candidateId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Candidate
  }
  
})

const Cv_Experience = mongoose.model("cv_experiences",cv_experienceScheme);

export default Cv_Experience;