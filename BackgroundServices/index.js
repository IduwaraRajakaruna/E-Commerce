import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './utils/db.js';
import cron from 'node-cron';
import sendWelcomeEmail from './EmailServices/sendWelcomeEmail.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES 
const services = () => {
    cron.schedule('* * * * * *', () => {
   sendWelcomeEmail();
});
};

services();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    dbConnection();
});