import express from "express";
import { addCvSoacialMedia, getAllSocialMediaByCandidate } from "../controllers/cv_socialMedia.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.post("/",authRequired,addCvSoacialMedia)
router.get("/getAllByCandidate",getAllSocialMediaByCandidate)


export default router;