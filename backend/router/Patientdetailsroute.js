import express from 'express';
import { Createuser } from '../controller/Patientdetailscontroller.js';

const router = express.Router();

router.post('/create', Createuser);
router.post()

export default router;
