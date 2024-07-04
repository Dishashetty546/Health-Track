import { catchasyncErrors } from "../middlewears/catchAsyncErrors.js";
import ErrorHandler from "../middlewears/errormiddlewear.js";
import { User } from "../models/userSchema.js";

export const patientRegister = catchasyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, password, gender, dob, nic, role,doctorDepartment,docAvatar } = req.body;

    if (!firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic || !role || !doctorDepartment || !docAvatar) {
        return next(new ErrorHandler("Please fill the full form!", 400));
    }

    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User already registered!", 400));
    }

    user = await User.create({ firstName, lastName, email, phone, password, gender, dob, nic, role,doctorDepartment, docAvatar });

    res.status(200).json({
        success: true,
        message: "User registered successfully",
    });
});
