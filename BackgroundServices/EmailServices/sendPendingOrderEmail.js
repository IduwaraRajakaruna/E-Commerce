import ejs, { name } from 'ejs';
import dotenv from 'dotenv';
import sendMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js"
import Product from '../../Backend/models/product.model.js';
dotenv.config();
 
const sendPendingOrderEmail = async () => {
const orders = await Order.find({status:0});
    if(orders.length > 0){
        for(let order of orders){
            ejs.renderFile(
                "templates/pendingOrder.ejs",
                {
                    name: order.name,
                    Products: order.products,
                },
                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: order.email,
                        subject: "Your Order is Pending",
                        html: data,
                    };
                    try{
                        await sendMail(messageoption);
                        await Order.findByIdAndUpdate(order._id, {$set: {status:1}});
                    } catch (error) {
                        console.log(error);
                    }
                }
            );
        }
    }
};

export default sendPendingOrderEmail;