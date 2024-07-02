// db.js
import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "MERN_HEALTH" })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.error(`MongoDB connection error: ${err}`);
        });
};
