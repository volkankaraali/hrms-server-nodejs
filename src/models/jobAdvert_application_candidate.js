import mongoose from "mongoose";
import Candidate from "./candidate.js";
import JobAdvert from "./jobAdvert.js";

const jobAdvertApplicationCandidateScheme = mongoose.Schema({
  candidateId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Candidate,
    require:true
  },
  jobAdvertId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:JobAdvert,
    require:true
  },
  createdDate:{
    type:Date,
    default:new Date()
  }
});

const Job_Advert_Application_Candidate = mongoose.model("Job_Advert_Applications_Candidate",jobAdvertApplicationCandidateScheme);

export default Job_Advert_Application_Candidate;