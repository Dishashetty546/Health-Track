import Patientdetails from '../models/Patientdetails.js';

// to send the responses
// it will accept requests and respond
const Createuser = async (req, res) => {
    try {
        // requesting these fields from the request body
        const { name, father, mother, email, phone } = req.body;

        // Create a new user instance
        const newUser = new Patientdetails({
            name,
            father,
            mother,
            email,
            phone
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response
        res.status(200).json({
            success: true,
            message: 'User is created successfully',
            newUser
        });
    } catch (error) {
        console.log(error);
        // Send an error response
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

export { Createuser };
