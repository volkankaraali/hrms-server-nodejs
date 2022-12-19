import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_abilityScheme = mongoose.Schema({
  name:{
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

const Cv_Abilities = mongoose.model("cv_abilities",cv_abilityScheme);

export default Cv_Abilities;