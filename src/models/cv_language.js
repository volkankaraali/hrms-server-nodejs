import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_languageScheme = mongoose.Schema({
  name:{
    type:String
  },
  level:{
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

const Cv_Language = mongoose.model("cv_languages",cv_languageScheme);

export default Cv_Language;