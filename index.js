import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert {type:"json"};

import userRoutes from "./src/routes/user.js";
import employeeRoutes from "./src/routes/employee.js";
import candidateRoutes from "./src/routes/candidate.js";
import employerRoutes from "./src/routes/employer.js";
import loginRoutes from "./src/routes/login.js";
import registerRoutes from "./src/routes/register.js";
import jobPositionRoutes from "./src/routes/jobPosition.js";
import jobAdvertRoutes from "./src/routes/jobAdvert.js";
import cityRoutes from "./src/routes/city.js";
import cvAbilityRoutes from "./src/routes/cv_ability.js";
import cvCoverLetterRoutes from "./src/routes/cv_coverLetter.js";
import cvEducationRoutes from "./src/routes/cv_education.js";
import cvExperienceRoutes from "./src/routes/cv_experience.js";
import cvImageRoutes from "./src/routes/cv_image.js";
import cvLanguageRoutes from "./src/routes/cv_language.js";
import cvSocialMediaRoutes from "./src/routes/cv_socialMedia.js";
import cvEduGraduateTypeRoutes from "./src/routes/cv_eduGraduateType.js"
import jobAdvertApplicationCandidateRoutes from "./src/routes/jobAdvert_application_candidate.js"
import mongoConfig from "./src/config/mongoConfig.js";

const app= express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
  res.json({
    message:'server online',
  })
});


//routes
app.use("/login",loginRoutes);
app.use("/register",registerRoutes);
app.use("/user",userRoutes);
app.use("/employee",employeeRoutes);
app.use("/candidate",candidateRoutes);
app.use("/employer",employerRoutes);
app.use("/jobPosition",jobPositionRoutes);
app.use("/jobAdvert",jobAdvertRoutes);
app.use("/city",cityRoutes);
app.use("/cvAbility",cvAbilityRoutes);
app.use("/cvCoverLetter",cvCoverLetterRoutes);
app.use("/cvEducation",cvEducationRoutes);
app.use("/cvExperience",cvExperienceRoutes);
app.use("/cvImage",cvImageRoutes);
app.use("/cvLanguage",cvLanguageRoutes);
app.use("/cvSocialMedia",cvSocialMediaRoutes);
app.use("/cvEduGraduateType",cvEduGraduateTypeRoutes);
app.use("/jobAdvertApplication",jobAdvertApplicationCandidateRoutes);

//swagger
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));


//connection to mongodb
mongoConfig().then(()=>{
  app.listen(PORT,()=>{
    console.log('server is running: '+PORT);
  });
})
.catch(error=>{
  console.log(error);
})