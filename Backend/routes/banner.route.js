import express from "express";

const router = express.router();
import { greatebanner,getAllBanners, getRandomBanner,deleteBanner}from "../controller/banner.cotroller.js"


//CREATE BANNER ROUTE
router.post("/", createBanner);

//GET ALL BANNERS
router.get("/", getAllBanners);

//DELETE BANNER route
router.delete("/:id", deleteBanner);

//RANDOM BANNER route
router.get("/random", getRandomBanner);

export default router;