import User from "../models/user.js";
import Verification_Code from "../models/verificationCode.js";
import jwt from "jsonwebtoken";
import ResultMessages from "../utils/apiReturnMessage.js";
import Employer from "../models/employer.js";
import Candidate from "../models/candidate.js";

const resultMessage=new ResultMessages();

export const getAll=async()=>{
  try {
    const alluser= await User.find().select("-password");
    return  resultMessage.successMessage(200,"users listed.",alluser);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const verify=async(body)=>{
  try {
    const token=body;
    const decodedToken=jwt.verify(token,process.env.JWT_KEY);
    const changeVerifyStatus=await Verification_Code.updateOne({userId:decodedToken.user_id},{$set:{isVerified:false}})
    return resultMessage.successMessage(200,"confirm succes.",changeVerifyStatus);

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const me=async(body)=>{
  try {
    //token gets from headers. requests with tokens are accepted.
    const token=body?.headers?.authorization.split(" ")[1];
    const {user_id}=jwt.verify(token,process.env.JWT_KEY)
    const user= await User.find({_id:user_id}).select("-password");
    const employer= await Employer.find({_id:user_id})
    const candidate= await Candidate.find({_id:user_id})

    if(employer.length>0){
      const returnObj={
        id:user[0]?._id,
        email:user[0]?.email,
        companyName:employer[0]?.companyName,
        userType:'employer'

      }

      return resultMessage.successMessage(200,"user success.",returnObj);
    }

    if(candidate.length>0){
      const returnObj={
        id:user[0]?._id,
        email:user[0]?.email,
        firstName:candidate[0]?.firstName,
        lastName:candidate[0]?.lastName,
        userType:'candidate'

      }

      return resultMessage.successMessage(200,"user success.",returnObj);
    }

  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}