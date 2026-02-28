import express from "express";
import { createServiceRequest } from "../Controller/Formcontroller.js";

const router = express.Router();

router.post("/service" , createServiceRequest)

export default router ;