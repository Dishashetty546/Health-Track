import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, "First name should at least contain 3 characters"]
    },
    lastname: {
        type: String,

    
        required: true,
        minlength: [3, "Last name should at least contain 3 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Enter a valid email Id"
        }
    },
    phone: {
        type: String,
        required: true,
        minlength: [11, "Phone number must contain 11 characters"],
        maxlength: [11, "Phone number must contain 11 characters"]
    },
    nic: {
        type: String,
        required: true,
        minlength: [13, "NIC must contain 13 characters"],
        maxlength: [13, "NIC must contain 13 characters"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    dob: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must contain at least 8 characters"],
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    doctorDepartment: {
        type: String
    },
    docAvatar: {
        public_id: String,
        url: String
    }
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function() {
    return JWT.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

export const User = mongoose.model("User", userSchema);
