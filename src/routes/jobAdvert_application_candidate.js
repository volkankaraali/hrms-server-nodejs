import express from "express";
import { addApplication, getAllApplication,getAllByJobAdvert } from "../controllers/jobAdvert_application_candidate.js";
const router = express.Router();

router.post("/",addApplication);
router.get("/",getAllApplication);
router.get("/getAllByJobAdvert",getAllByJobAdvert);

export default router;