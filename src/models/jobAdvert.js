import mongoose from "mongoose";
import Employer from "./employer.js";
import City from "./city.js";
import JobPosition from "./jobPosition.js";

const jobAdvertScheme = mongoose.Schema({
  jobDescription:{
    type:String,
    require:true
  },
  minSalary:{
    type:String
  },
  maxSalary:{
    type:String
  },
  openJobNumber:{
    type:String,
    require:true
  },
  applicationDeadline:{
    type:Date
  },
  createdDate:{
    type:Date,
    default:new Date()
  },
  isActive:{
    type:Boolean,
  },
  jobPositionId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:JobPosition,
    require:true
  },
  cityId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: City
  },
  employerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Employer,
    require:true
  },
});

const JobAdvert = mongoose.model("Job_Adverts",jobAdvertScheme);

export default JobAdvert;