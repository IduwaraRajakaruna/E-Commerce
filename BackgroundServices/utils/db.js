import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async() => {
    try {
        const DB = process.env.DB;
        console.log("Attempting to connect to database...");
        
        const conn = await mongoose.connect(DB, {
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        });

        console.log(`Database connected successfully: ${conn.connection.host}`);
        
    } catch (error) {
        console.error("Database connection error:", error.message);
        console.error("Make sure your IP address is whitelisted in MongoDB Atlas");
        setTimeout(dbConnection, 5000);
    }
}

export default dbConnection;
