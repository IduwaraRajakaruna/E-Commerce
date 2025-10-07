import ejs, { name } from 'ejs';
import dotenv from 'dotenv';
import sendMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js"
import Product from '../../Backend/models/product.model.js';
dotenv.config();
 
const sendDeliverdOrderEmail = async () => {
const orders = await Order.find({status:2});
    if(orders.length > 0){
        for(let order of orders){
            ejs.renderFile(
                "templates/deliverdorder.ejs",
                {
                    name: order.name,
                    Products: order.products,
                },
                async (err, data) => {
                    let messageoption = {
                        from: process.env.EMAIL,
                        to: order.email,
                        subject: "Your Order has been delivered",
                        html: data,
                    };
                    try{
                        await sendMail(messageoption);
                        await Order.findByIdAndUpdate(order._id, {$set: {status:3}});
                    } catch (error) {
                        console.log(error);
                    }
                }
            );
        }
    }
};

export default sendDeliverdOrderEmail;