import express from "express";
import { addCvLanguage, getAllLanguageByCandidate } from "../controllers/cv_language.js";
import authRequired from "../middleware/auth.js";


const router = express.Router();

router.post("/",authRequired,addCvLanguage)
router.get("/getAllByCandidate",getAllLanguageByCandidate)


export default router;