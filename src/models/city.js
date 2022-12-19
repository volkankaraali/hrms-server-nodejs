import mongoose from "mongoose";
const cityScheme = mongoose.Schema({
  cityName:{
    type:String,
    unique:true
  },
  
})

const City = mongoose.model("Citys",cityScheme);

export default City;