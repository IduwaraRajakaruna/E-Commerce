import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async() => {
    const DB = process.env.DB;
    console.log("Connecting to database:", DB);
    try{
         await mongoose.connect(DB).then(() =>{
            console.log("Database is connected successfully");
         })
    }catch(error){
        console.error("Database connection error:", error.message);
        setTimeout(dbConnection, 5000);
    }
}

export default dbConnection;