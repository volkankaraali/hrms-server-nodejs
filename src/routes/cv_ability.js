import express from "express";
import { addCvAbility, getAllEducationByCandidate } from "../controllers/cv_ability.js";
import authRequired from "../middleware/auth.js";


const router = express.Router();

router.post("/",authRequired,addCvAbility)
router.get("/getAllByCandidate",getAllEducationByCandidate)


export default router;