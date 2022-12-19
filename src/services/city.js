import City from "../models/city.js";
import ResultMessages from "../utils/apiReturnMessage.js";

const resultMessage=new ResultMessages();

export const add=async(body)=>{
  try {
    
    const {cityName}=body;

    const checkCity=await City.findOne({cityName})
  
    if(checkCity){
      return resultMessage.errorMessage(403,"duplicate value.",cityName);
    }

    await City.create({
      cityName
    });
    
    return resultMessage.successMessage(200,"city is created.",cityName);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}

export const getAll=async()=>{
  try { 
    const citys= await City.find();
    return resultMessage.successMessage(200,"cities listed.",citys);
  } catch (error) {
    return resultMessage.errorMessage(400,"error",error);
  }
}