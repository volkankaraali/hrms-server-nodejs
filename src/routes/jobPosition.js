import express from "express";
import { addJobPosition,getAllJobPositions } from "../controllers/jobPosition.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.post("/",authRequired,addJobPosition)
router.get("/getall",getAllJobPositions)


export default router;