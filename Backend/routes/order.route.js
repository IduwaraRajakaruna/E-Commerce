import express from "express";
const router = express.Router();
import {getAllOrders, getUserOrder, deleteOrder, createOrder, updateOrder } from "../controller/order.controller.js";
import { Protect } from "../middleware/auth.middleware.js";

//CREATE ORDER ROUTE
router.post("/", createOrder);

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//GET ALL ORDERS ROUTE
router.get("/",Protect, getAllOrders);

//DELETE ORDER ROUTE
router.delete("/:id", deleteOrder);

//GET USER ORDERS ROUTE
router.get("/find/:userId",getUserOrder);

export default router;