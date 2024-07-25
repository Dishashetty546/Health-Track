    import mongoose from 'mongoose';

    const DoctorSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: String,
        specialization: String,
        licenseNumber: String,
        experience: Number,
        clinicName: String,
        clinicAddress: String,
        workPhone: String,
        securityQuestion: String,
        securityAnswer: String
    });

    const DoctorModel = mongoose.model('Doctor', DoctorSchema);

    export default DoctorModel;
