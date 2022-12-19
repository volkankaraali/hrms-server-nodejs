import express from "express";
import { addJobAdvert,updateIsActiveById,getAllJobAdverts, getAllJobAdvertsByEmployerId } from "../controllers/jobAdvert.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.post("/",authRequired,addJobAdvert);
router.get("/",getAllJobAdverts);
router.get("/getAllByEmployer",getAllJobAdvertsByEmployerId);
router.post("/updateActiveStatus",updateIsActiveById);



export default router;