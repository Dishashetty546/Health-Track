import mongoose from "mongoose";

// Define the schema for Patient details
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    father: {
        type: String
    },
    mother: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
}, { timestamps: true });

// Check if the model is already defined
const PatientDetails = mongoose.models.PatientDetails || mongoose.model('PatientDetails', userSchema);

export default PatientDetails;
