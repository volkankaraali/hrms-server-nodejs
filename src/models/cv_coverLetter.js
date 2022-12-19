import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_coverLetterScheme = mongoose.Schema({
  text:{
    type:String
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

const Cv_CoverLetter = mongoose.model("cv_coverLetters",cv_coverLetterScheme);

export default Cv_CoverLetter;