import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbconnection } from './database/dbconnection.js';
import messageRouter from './router/messagerouter.js';
import userRouter from './router/userRouter.js';  // Assuming this is correctly named
import errormiddleware from './middlewears/errormiddlewear.js';
import DoctorModel from './models/Doctor.js';
import bcrypt from 'bcrypt';

import patientdetailsRouter from './router/patientdetailsrouter.js'; // Corrected import

// Initialize dotenv
config({ path: './config/config.env' });

// Create an express application
const app = express();

// Initialize the database connection
dbconnection();

// MIDDLEWARES
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './temp/',
}));

// ROUTES
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/patient', patientdetailsRouter);  // Registering the patient router

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await DoctorModel.findOne({ email });
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.status(200).json(doctor);
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Register Route
app.post('/register', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            phone,
            specialization,
            licenseNumber,
            experience,
            clinicName,
            clinicAddress,
            workPhone,
            securityQuestion,
            securityAnswer
        } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if email already exists
        const existingDoctor = await DoctorModel.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new doctor
        const newDoctor = new DoctorModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            specialization,
            licenseNumber,
            experience,
            clinicName,
            clinicAddress,
            workPhone,
            securityQuestion,
            securityAnswer
        });

        // Save the doctor to the database
        await newDoctor.save();

        // Respond with success message and new doctor info
        res.status(201).json({ message: 'Registration successful', doctor: newDoctor });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
app.use(errormiddleware);

// Export the app
export default app;
