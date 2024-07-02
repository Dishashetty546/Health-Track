// Importing express and other necessary modules
import express from "express";
import cors from "cors"; // Cross-Origin Resource Sharing
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbconnection } from "./database/dbconnection.js";
import  errorHandler  from "./middlewears/errormiddlewear.js";
import messageRouter from "./router/messagerouter.js";
import userRouter from "./router/userRouter.js"

// Initialize dotenv to load environment variables
config({ path: "./config/config.env" });

// Create an express application
const app = express();

// MIDDLEWARES

// 1. CORS setup
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// 2. Cookie parser
app.use(cookieParser());

// 3. Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. File upload configuration
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
}));

// 5. Router setup
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user',userRouter);


// Initialize the database connection
dbconnection();

// Error handling middleware should be used at the end
app.use(errorHandler);

// Export the app
export default app;
