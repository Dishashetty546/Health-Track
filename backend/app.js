// Importing express and other necessary modules
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dbconnection from './database/dbconnection.js'; // This will establish the connection
import errorHandler from './middlewares/errormiddleware.js';
import messageRouter from './router/messagerouter.js';
import userRouter from './router/userRouter.js';
import Collection from './database/mongo.js'; // Import the Collection model
import bcrypt from 'bcrypt'; // For password hashing

// Initialize dotenv to load environment variables
config({ path: './config/config.env' });

// Create an express application
const app = express();

// Initialize the database connection
dbconnection();

// MIDDLEWARES

// 1. CORS setup
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
    tempFileDir: './temp/', // Adjust the directory as needed
}));

// 5. Router setup
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);

// Error handling middleware should be used at the end
app.use(errorHandler);

// Define routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await Collection.findOne({ email });

        if (check) {
            res.status(200).json({ message: 'User exists' });
        } else {
            res.status(404).json({ message: 'User does not exist' });
        }

    } catch (e) {
        console.error(e); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/registering', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
        specialization,
        licenseNumber,
        experience,
        clinicHospitalName,
        clinicHospitalAddress,
        workPhone,
        securityQuestion,
        securityAnswer
    } = req.body;

    try {
        const check = await Collection.findOne({ email });

        if (check) {
            res.status(409).json({ message: 'User already exists' });
        } else {
            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new Collection({
                firstName,
                lastName,
                email,
                password: hashedPassword, // Save the hashed password
                phone,
                specialization,
                licenseNumber,
                experience,
                clinicHospitalName,
                clinicHospitalAddress,
                workPhone,
                securityQuestion,
                securityAnswer
            });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        }

    } catch (e) {
        console.error(e); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5173; // Use environment variable or default to 5173
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app
export default app;
