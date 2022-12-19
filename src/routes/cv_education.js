import express from "express";
import { addCvEducation, getAllEducationByCandidate } from "../controllers/cv_education.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.post("/",authRequired,addCvEducation)
router.get("/getAllByCandidate",getAllEducationByCandidate)


export default router;