import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import authRoute from './routes/auth.route.js';
import productRoute from './routes/product.route.js';
import bannerRoute from './routes/banner.route.js';
import userRoute from './routes/user.route.js';
import orderRoute from './routes/order.route.js';

const app = express();  

//cors - allow all origins for development
app.use(cors({
    origin: true,
    credentials: true
}));

//json body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

//cookie parser
app.use(cookieParser());

//debug middleware - log requests (remove in production)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body);
    next();
});

//simple test endpoint for JSON validation
app.post('/api/test-json', (req, res) => {
    console.log('Raw body received:', req.body);
    res.json({ 
        success: true,
        receivedData: req.body,
        message: 'JSON parsed successfully!'
    });
});

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/banners", bannerRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

//error middleware
app.use(notFound);
app.use(errorHandler);

export default app;