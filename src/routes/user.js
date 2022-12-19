import express from "express";
import { getAllUser,getMe,verifyEmail } from "../controllers/user.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.get("/getalluser",authRequired,getAllUser);
router.get("/me",authRequired,getMe);
router.post("/verify/:token",verifyEmail);

export default router;