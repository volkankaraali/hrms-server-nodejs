import express from "express";
import { addCvImage, getAllImagesByCandidate } from "../controllers/cv_image.js";
import authRequired from "../middleware/auth.js";


const router = express.Router();

router.post("/",authRequired,addCvImage)
router.get("/getAllByCandidate",getAllImagesByCandidate)


export default router;