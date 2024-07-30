import app from './app.js';
import cloudinary from 'cloudinary';
import { config } from 'dotenv';

// Initialize dotenv
config({ path: './config/config.env' });

// Set up Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// app.use('/api/create', patientDetRouter);
// Start the server
const PORT = process.env.PORT || 5001; // Default to 5001 if not provided
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
