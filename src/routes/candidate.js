import express from "express";
import { getAllCandidates, getCvByCandidate } from "../controllers/candidate.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.get("/getall",getAllCandidates)
router.get("/getCv",authRequired,getCvByCandidate)


export default router;