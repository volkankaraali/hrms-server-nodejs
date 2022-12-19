import express from "express";
import { getAllEmployer } from "../controllers/employer.js";
const router = express.Router();


router.get("/getall",getAllEmployer);



export default router;