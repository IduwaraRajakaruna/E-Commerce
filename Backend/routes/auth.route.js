import express from 'express';
import { registerUser, loginUser, logOut }  from '../controller/auth.controller.js';
const router = express.Router();

//Register user route
router.post('/register', registerUser);

//Login user routeer
router.post('/login', loginUser);

//Logout user routeer
router.get('/logout', logOut);


export default router;