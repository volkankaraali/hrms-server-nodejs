import User from "../models/user.js";
import Candidate from "../models/candidate.js";
import Employer from "../models/employer.js";
import Employee from "../models/employee.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendVerifyEmail from "../utils/sendVerifyEmail.js";
import checkEmailAndDomain from "../utils/checkEmailAndDomain.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();


export const addCandidateUser=async(body)=>{
  try {
    const {firstName,lastName,userName,email,password}=body;
    // Validate user input
    
    if (!(userName && email && password && firstName && lastName)) {
      return resultMessage.errorMessage(400,"all input is required.",null);
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return resultMessage.errorMessage(409,"email already exist.",null); 
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user= await User.create({
      userName,
      email,
      password:encryptedPassword,
    })
    const candidate= await Candidate.create({
      _id:user._id,
      firstName,
      lastName
    })

    //email verify sends and verifytoken creates in db 
    const responseSendEmail=await sendVerifyEmail(user._id,email);

    // Create access token
    const token = jwt.sign(
      { user_id: user._id, email,userName},
      process.env.JWT_KEY,
    );

    const obj={
      id:user._id,
      email:user.email,
      userName:user.userName,
      createdAt:user.createdAt,
      token
    }
    return resultMessage.successMessage(201,"register successful.",obj);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}

export const addEmployerUser=async(body)=>{
  try {
    const {companyName,webAdress,phoneNumber,userName,email,password}=body;
    // Validate user input
    
    if (!(userName && email && password && companyName && webAdress && phoneNumber)) {
      return resultMessage.errorMessage(400,"all input is required.",null);
    }


    if(!checkEmailAndDomain(email,webAdress)){
      return resultMessage.errorMessage(409,"company email must be same with web adress domain.",null);
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return  resultMessage.errorMessage(409,"email already exist.",null);
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user= await User.create({
      userName,
      email,
      password:encryptedPassword,
    })

    const employer= await Employer.create({
      _id:user._id,
      companyName,
      webAdress,
      phoneNumber,
    });

    //email verify sends and verifytoken creates in db 
    const responseSendEmail=await sendVerifyEmail(user._id,email);

    // Create access token
    const token = jwt.sign(
      { user_id: user._id, email,userName},
      process.env.JWT_KEY,
    );


    const obj={
      id:user._id,
      email:user.email,
      userName:user.userName,
      createdAt:user.createdAt,
      token
    }
    return resultMessage.successMessage(201,"register successful.",obj);
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}

export const addEmployeeUser=async(body)=>{
  try {
    const {firstName,lastName,userName,email,password}=body;
    // Validate user input
    
    if (!(userName && email && password && firstName && lastName)) {
      returnresultMessage.errorMessage(400,"all input is required.",null);
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return resultMessage.errorMessage(409,"user already exist. please login.",null);
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user= await User.create({
      userName,
      email,
      password:encryptedPassword,
    })

    const employee= await Employee.create({
      _id:user._id,
      firstName,
      lastName
    })

    //email verify sends and verifytoken creates in db 
    const responseSendEmail=await sendVerifyEmail(user._id,email);

    // Create access token
    const token = jwt.sign(
      { user_id: user._id, email,userName},
      process.env.JWT_KEY,
    );
    return resultMessage.successMessage(201,"register successful.",{user,token,responseSendEmail});
    
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error)
  }
}