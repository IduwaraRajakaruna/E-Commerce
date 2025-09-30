import jwt from "jsonwebtoken";
import expressAsyncHandler  from "express-async-handler";
import User from "../models/user.model.js";
import dotenv from "dotenv"

dotenv.config();

const Protect = expressAsyncHandler(async(req,res,next)=>{
    let token;
    token = req.cookies.jwt;
    if(token){
        try{
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decodedToken.userId).select("-password");
            next();
        }catch(error){
            res.status(401);
            throw new Error("Not authorized, invalid token ");
        }
    }else{
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export { Protect };