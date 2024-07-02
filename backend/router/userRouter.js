import express from "express";
import { patientRegister } from "../controller/userController.js"; // Add .js extension

const router = express.Router();

router.post("/patient/Register", patientRegister);

export default router;
