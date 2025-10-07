import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './utils/db.js';
import cron from 'node-cron';
import sendWelcomeEmail from './EmailServices/sendWelcomeEmail.js';
import sendPendingOrderEmail from './EmailServices/sendPendingOrderEmail.js';
import sendDeliverdOrderEmail from './EmailServices/sendDeliveredOrderEmail.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES 
const services = () => {
    cron.schedule('* * * * * *', () => {
   sendWelcomeEmail();
   sendPendingOrderEmail();
   sendDeliverdOrderEmail();
});
};

const promotion = () => {
    cron.schedule('30 5 * * 5', () => {
   // sending Promotion Email
    sendPromotionEmail();
});
};



services();
promotion();

app.listen(PORT, () => {
    console.log(`Backgroundservices is running on port ${PORT}`);
    dbConnection();
});