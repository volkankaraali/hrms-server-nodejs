import express from "express";
import { confirmEmployer,getAllEmployee } from "../controllers/employee.js";
const router = express.Router();

router.post("/confirmEmployer",confirmEmployer);
router.get("/getall",getAllEmployee);



export default router;