import mongoose from "mongoose";
const cv_eduGraduateTypeScheme = mongoose.Schema({
  name:{
    type:String,
    unique:true
  },
  
})

const Cv_EduGraduateType = mongoose.model("cv_edu_graduate_types",cv_eduGraduateTypeScheme);

export default Cv_EduGraduateType;