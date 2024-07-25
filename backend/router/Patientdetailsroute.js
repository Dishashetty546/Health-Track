import express from 'express';

import { Createuser } from '../controller/userController.js';
const router= express.Router()
router.post('/create',Createuser)

export default router;