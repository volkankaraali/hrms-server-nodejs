import mongoose from "mongoose";
import User from "../user.js";

export default async(candidateId)=>{
  
  
  try {
    
    const cv= await User.aggregate([
      {$match:{_id:new mongoose.Types.ObjectId(candidateId)}},
      {
        $lookup:{
          from:"cv_abilities",
          localField:"_id",
          foreignField:"candidateId",
          as:"abilities",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
      {
        $lookup:{
          from:"cv_coverletters",
          localField:"_id",
          foreignField:"candidateId",
          as:"coverletters",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
      {
        $lookup:{
          from:"cv_educations",
          localField:"_id",
          foreignField:"candidateId",
          as:"educations",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
      {
        $lookup:{
          from:"cv_experiences",
          localField:"_id",
          foreignField:"candidateId",
          as:"experiences",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
      {
        $lookup:{
          from:"cv_images",
          localField:"_id",
          foreignField:"candidateId",
          as:"images",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
      {
        $lookup:{
          from:"cv_language",
          localField:"_id",
          foreignField:"candidateId",
          as:"languages",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },{
        $lookup:{
          from:"cv_socialMedia",
          localField:"_id",
          foreignField:"candidateId",
          as:"socialMedias",
          pipeline:[
            {$project : { _id:0, candidateId:0 }}
          ]
        }
      },
    ]);

    return cv;

  } catch (error) {
    return error;
  }
  
}
