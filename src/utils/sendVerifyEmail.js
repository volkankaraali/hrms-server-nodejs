import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import Verification_Code from "../models/verificationCode.js";

export default async(userId,email)=>{
  try {
    const verifyToken=jwt.sign(
      {user_id:userId},
      process.env.JWT_KEY,
    )
    const link = `${process.env.BASE_URL}/user/verify/${verifyToken}`

    //not used verify module now. every user sets as verify true from ./models/verificatonCode.js
  
    // let transporter= nodemailer.createTransport({
    //   service:"Gmail",
    //   auth:{
    //     user:process.env.GMAIL_USER,
    //     pass:process.env.GMAIL_PASS
    //   }
    // })


    // let info= await transporter.sendMail({
    //   to:email,
    //   subject:"Verify Email",
    //   text:"Verifiy your account.",
    //   html:"Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
    // })

    const verificationCode= await Verification_Code.create({
      userId,
      verifyCode:verifyToken
    });
    
    return {status:true,message:"email sended."}
  } catch (error) {
    return {status:false,message:error}
  }
}