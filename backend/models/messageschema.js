import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"]
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid Email ID!"
        }
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain 11 digits!"],
        maxLength: [11, "Phone number must contain 11 digits!"]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must contain at least 10 characters"]
    }
});

export const Message = mongoose.model("Message", messageSchema);
