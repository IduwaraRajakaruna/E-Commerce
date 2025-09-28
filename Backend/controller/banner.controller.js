import Banner from "../models/banner.model.js";
import banner from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

//Create banner
const createBanner = asyncHandler(async(req,res)=>{
const newBanner = Banner(req.body);
const savedBanner = newBanner.save();

if(!saveBanner){
    res.status(400);
    throw new Error("Banner was not created");
}else{
    res.status(201).json(savedBanner);
}
});

//DELETE BANNER
const deleteBanner = asyncHandler(async (req,res)=>{
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if(banner){
        res.status(400);
        throw new Error("Banner was not deleted");
        
    }else{
        res.status(201).json("Banner has been deleted");
    }
});

//GET ALL BANNERS
const grtAllBanners = asyncHandler(async(res,res)) =>{
    const banners = await Banner.find({});
    if(!banners){
        res.status(400);
        throw new Error("No banners banners were not fetched or somthing");
    }else{
        res.status(200).json(banners);
}};

//GET RANDOM BANNER
const getRandomBanner = asyncHandler(async(req,res)=>{
    const banners = await banner.find();

    if(!banners){
        res.status(400)
        throw new Error("No banneBanners were not fetched or something went wrong"); 
    }else {
        const randomIndex =Math.floor(Math.random() * banners.length);
        const randomBanner = banners[randomIndex];
        res.status(200).json(randomBanner);
    }
});

export {grtAllBanners, createBanner, deleteBanner, getRandomBanner};
