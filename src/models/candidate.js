import mongoose from "mongoose";
import User from "./user.js";
const candidateScheme = mongoose.Schema({
  firstName:{
    type:String,
  },
  lastName:{
    type:String,
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
  },

})

const Candidate = mongoose.model("Candidates",candidateScheme);

export default Candidate;