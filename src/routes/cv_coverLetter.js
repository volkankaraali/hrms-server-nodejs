import express from "express";
import { addCvCoverLetter, getAllEducationByCandidate } from "../controllers/cv_coverLetter.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.post("/",authRequired,addCvCoverLetter)
router.get("/getAllByCandidate",getAllEducationByCandidate)


export default router;