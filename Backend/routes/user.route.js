import express from "express";
const router = express.Router();
import { getAllUsers,getUser,deleteUser,updateUser } from "../controller/auth.controller.js";

//GET ALL USERS
router.get("/", getAllUsers);

//DELETE USER
routrer.delete("/:id", deleteUser);

//UPDATE USER
router.put("/:id", updateUser);

//GET ONE USER
router.get("/find/:userId",getUser);

export default router;