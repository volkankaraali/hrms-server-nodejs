import jwt from "jsonwebtoken";

const verifyToken=(req,res,next)=>{
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    const decodedToken=jwt.verify(token,process.env.JWT_KEY);
    req.user=decodedToken;
    next();

  } catch (error) {
    res.json({status:"401",message:"Unauthorized Access."});
  }
};

export default verifyToken;