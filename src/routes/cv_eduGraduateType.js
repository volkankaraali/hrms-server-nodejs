import express from "express";
import { addCvEduGraduateType, getAllEduGraduateType } from "../controllers/cv_eduGraduateType.js";

import authRequired from "../middleware/auth.js";

const router = express.Router();

router.get("/",getAllEduGraduateType);
router.post("/",authRequired,addCvEduGraduateType);



export default router;