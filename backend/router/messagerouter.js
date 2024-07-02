// importing express to encapsulating route logic into modular components for better code organization and maintainability.
import express from 'express';
import { sendMessage } from '../controller/messageController.js';

//const is used for initializing, express.Router  helps to structure the codebase logically - making it easier to manage and scale as your application grows
const router = express.Router();

//sendMessage -transmitting messages or data between components(front-end) or systems(backend-database),
router.post("/send", sendMessage);

export default router;