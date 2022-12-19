import express from "express";
import { addCity, getAllCity } from "../controllers/city.js";
import authRequired from "../middleware/auth.js";

const router = express.Router();

router.get("/",getAllCity)
router.post("/",authRequired,addCity)


export default router;