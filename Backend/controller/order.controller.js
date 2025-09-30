import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

//Create order
const createOrder = asyncHandler(async(req, res) => {
    const newOrder = new Order(req.body);
    const saveOrder = await newOrder.save();
    if(!saveOrder){
        res.status(400);
        throw new Error("Order was not created");
    }else{
        res.status(201).json(saveOrder);
    }
});

//UPDATE ORDER
const updateOrder = asyncHandler(async(req,res)=>{
    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {$set: req.body,},
        {new: true}
    );
    if(!updatedOrder){
        res.status(400);
        throw new Error("Order has not been updated");
    }else{
        res.status(201).json(updatedOrder);
    }
});

//DELETE ORDER
const deleteOrder = asyncHandler(async(req,res)=>{
    const order = await Order.findByIdAndDelete(req.params.id);
    if(!order){
        res.status(400);
        throw new Error("Order was not deleted");
    }else{
        res.status(200).json(order)
    }
});

//GET USER ORDERS
const getUserOrder =asyncHandler(async(req,res)=>{
    const orders = await Order.find({userId: req.params.id}).sort({createdAt: -1});
    if(!orders){
        res.status(400);
        throw new Error("No orders found or something went wrong");
    }else{
        res.status(200).json(orders);
    }
});

//GET ALL ORDERS
const getAllOrders =asyncHandler(async(req,res)=>{
    const orders = await Order.find();

    if(!orders){
        res.status(400);
        throw new Error("No orders found or something went wrong");
    }else{
        res.status(200).json(orders);
    }
});

export {getAllOrders, getUserOrder, deleteOrder, createOrder, updateOrder}