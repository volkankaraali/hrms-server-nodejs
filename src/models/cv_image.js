import mongoose from "mongoose";
import Candidate from "./candidate.js";
const cv_imageScheme = mongoose.Schema({
  imageUrl:{
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

const Cv_Image = mongoose.model("cv_images",cv_imageScheme);

export default Cv_Image;