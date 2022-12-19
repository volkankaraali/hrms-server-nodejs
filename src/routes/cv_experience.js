import express from "express";
import { addCvExperience, getAllExperienceByCandidate } from "../controllers/cv_experience.js";
import authRequired from "../middleware/auth.js";


const router = express.Router();

router.post("/",authRequired,addCvExperience)
router.get("/getAllByCandidate",getAllExperienceByCandidate)


export default router;