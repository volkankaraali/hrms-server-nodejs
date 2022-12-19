import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_socialMediaScheme = mongoose.Schema({
  linkedinUrl:{
    type:String
  },
  githubUrl:{
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

const Cv_SocialMedia = mongoose.model("cv_socialMedias",cv_socialMediaScheme);

export default Cv_SocialMedia;