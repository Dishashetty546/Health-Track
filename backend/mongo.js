// mongo.js (in /database)
const mongoose = require("mongoose");
const { config } = require("dotenv");

// Load environment variables
config({ path: "./config/config.env" });

// Replace with your MongoDB connection string
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error('Connection failed:', error);
  });

const newSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  licenseNumber: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  clinicHospitalName: {
    type: String,
    required: true
  },
  clinicHospitalAddress: {
    type: String,
    required: true
  },
  workPhone: {
    type: String,
    required: true
  },
  securityQuestion: {
    type: String,
    required: true
  },
  securityAnswer: {
    type: String,
    required: true
  }
});

const Collection = mongoose.model("Collection", newSchema);

module.exports = Collection;
