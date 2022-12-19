import mongoose from "mongoose";
const jobPositionScheme = mongoose.Schema({
  jobName:{
    type:String,
    unique:true
  },

  
})

const JobPosition = mongoose.model("Job_Positions",jobPositionScheme);

export default JobPosition;