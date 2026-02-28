import express  from "express";
import { createNewConnection } from "../Controller/Formcontroller.js";


const router = express.Router();

router.post("/connection" , createNewConnection )

export default router ;