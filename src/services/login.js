import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ResultMessages from "../utils/apiReturnMessage.js";
import Employer from "../models/employer.js";
import Candidate from "../models/candidate.js";

const resultMessage=new ResultMessages();

export const login=async(body)=>{
  try {
    const {email,password}=body;

    // Validate user input
    if (!(email && password)) {
      return resultMessage.errorMessage(400,"all input is required.",null);
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email })
    
    if(!user){
      return resultMessage.errorMessage(400,'user doesnt exist.',null)
    }
    
    const decryptPassword=await bcrypt.compare(password,user.password);
    if(user && decryptPassword){
      const token = jwt.sign(
        {user_id:user._id,email,username:user.userName},
        process.env.JWT_KEY,
      );

      //finds user type which is login
      const isEmployer= await Employer.find({_id:user._id})
      const isCandidate= await Candidate.find({_id:user._id})

      if(isEmployer.length>0){
        const returnObj={
          id:user?._id,
          email:user?.email,
          companyName:isEmployer[0]?.companyName,
          userType:'employer',
          token
        }
  
        return resultMessage.successMessage(200,"login successful.",returnObj);
      }

      if(isCandidate.length>0){
        const returnObj={
          id:user[0]?._id,
          email:user[0]?.email,
          firstName:isCandidate[0]?.firstName,
          lastName:isCandidate[0]?.lastName,
          userType:'candidate',
          token
  
        }
  
        return resultMessage.successMessage(200,"login successful.",returnObj);
      }
      
    }

    return resultMessage.errorMessage(400,"invalid credentials",null)

  } catch (error) {
    console.log(error)
    return resultMessage.errorMessage(400,"error",error.message)
  }
}