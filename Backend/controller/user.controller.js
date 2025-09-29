import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import e from "express";

//UPDATE USER
const updateUser = asyncHandler(async(req,res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser =await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    );
    if(!updatedUser){
        res.status(400);
        throw new Error("User was not updated");
    }else{
        res.status(201).json(updatedUser);
    }
});

//DELETE USER
const deleteUser =asyncHandler(async(req,res) =>{
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser){
        res.status(400);
        throw new Error("User was not deleted");
    }else{
        res.status(201).json({message: "User deleted successfully"});
    }
});

//GET USER
const getUser = asyncHandler(async(req,res) =>{
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(400);
        throw new Error("User not found");
    }else{
        res.status(200).json(user);
    }
});

//GET ALL USERS
const getAllUsers = asyncHandler(async(req,res) =>{
    const users = await User.find();
    if(!users){
        res.status(400);
        throw new Error("No users found");
    }else{
        res.status(200).json(users);
    }
});

export{getAllUsers, getUser, deleteUser, updateUser}