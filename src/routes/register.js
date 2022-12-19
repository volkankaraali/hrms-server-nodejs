import express from "express";
import { registerCandidateUser,registerEmployerUser,registerEmployeeUser } from "../controllers/register.js";

const router = express.Router();

router.post("/candidate",registerCandidateUser)
router.post("/employer",registerEmployerUser)
router.post("/employee",registerEmployeeUser)


export default router;